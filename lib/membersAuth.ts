import { createHash, timingSafeEqual } from "crypto";

export const MEMBERS_COOKIE_NAME = "kc12906_members";
export const MEMBERS_SESSION_MAX_AGE = 60 * 60 * 12;

function requiredEnvironmentValue(name: "MEMBERS_PASSWORD" | "MEMBERS_SESSION_SECRET") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function isValidMembersPassword(candidate: string) {
  const expected = digest(requiredEnvironmentValue("MEMBERS_PASSWORD"));
  const actual = digest(candidate);

  return timingSafeEqual(expected, actual);
}

export function membersSessionToken() {
  const password = requiredEnvironmentValue("MEMBERS_PASSWORD");
  const secret = requiredEnvironmentValue("MEMBERS_SESSION_SECRET");

  return createHash("sha256")
    .update(`Council 12906:${password}:${secret}`)
    .digest("hex");
}

export function membersPortalIsConfigured() {
  return Boolean(
    process.env.MEMBERS_PASSWORD && process.env.MEMBERS_SESSION_SECRET,
  );
}
