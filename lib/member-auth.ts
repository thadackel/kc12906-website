import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "kc12906_member_session";
const SESSION_LENGTH_SECONDS = 60 * 60 * 8;

function authSecret() {
  return process.env.MEMBER_AUTH_SECRET ?? "";
}

function sign(value: string) {
  return createHmac("sha256", authSecret()).update(value).digest("hex");
}

function safelyEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isMemberPassword(password: string) {
  const configuredPassword = process.env.MEMBER_PASSWORD;
  if (!configuredPassword || !authSecret()) return false;
  return safelyEqual(password, configuredPassword);
}

export async function createMemberSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_LENGTH_SECONDS;
  const value = String(expiresAt);
  const token = `${value}.${sign(value)}`;
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_LENGTH_SECONDS,
  });
}

export async function hasMemberSession() {
  if (!authSecret()) return false;

  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return false;

  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature || !/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

  return safelyEqual(signature, sign(expiresAt));
}

export async function clearMemberSession() {
  (await cookies()).delete(COOKIE_NAME);
}
