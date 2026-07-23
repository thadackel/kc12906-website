import { createHmac, timingSafeEqual } from "crypto";

export const MEMBERS_COOKIE_NAME = "kc12906_members";
export const MEMBERS_SESSION_MAX_AGE = 60 * 60 * 12;

type SessionPayload = {
  exp: number;
  scope: "members";
};

function requiredEnvironmentValue(
  name: "MEMBERS_PASSWORD" | "MEMBERS_SESSION_SECRET",
) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function safeEqualText(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  );
}

function sign(encodedPayload: string) {
  return createHmac(
    "sha256",
    requiredEnvironmentValue("MEMBERS_SESSION_SECRET"),
  )
    .update(encodedPayload)
    .digest("base64url");
}

export function isValidMembersPassword(candidate: string) {
  return safeEqualText(
    candidate,
    requiredEnvironmentValue("MEMBERS_PASSWORD"),
  );
}

export function createMembersSessionToken(now = Date.now()) {
  const payload: SessionPayload = {
    exp: Math.floor(now / 1000) + MEMBERS_SESSION_MAX_AGE,
    scope: "members",
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );

  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function isValidMembersSessionToken(token?: string) {
  if (!token) return false;

  const [encodedPayload, suppliedSignature, ...extra] = token.split(".");
  if (!encodedPayload || !suppliedSignature || extra.length) return false;
  if (!safeEqualText(suppliedSignature, sign(encodedPayload))) return false;

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as Partial<SessionPayload>;

    return (
      payload.scope === "members" &&
      typeof payload.exp === "number" &&
      payload.exp > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

export function requestHasAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function membersPortalIsConfigured() {
  return Boolean(
    process.env.MEMBERS_PASSWORD && process.env.MEMBERS_SESSION_SECRET,
  );
}