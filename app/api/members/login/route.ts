import { NextResponse } from "next/server";
import {
  createMembersSessionToken,
  isValidMembersPassword,
  MEMBERS_COOKIE_NAME,
  MEMBERS_SESSION_MAX_AGE,
  membersPortalIsConfigured,
  requestHasAllowedOrigin,
} from "@/lib/membersAuth";

export async function POST(request: Request) {
  if (!membersPortalIsConfigured()) {
    return NextResponse.json(
      { error: "The members portal has not been configured yet." },
      { status: 503 },
    );
  }

  if (!requestHasAllowedOrigin(request)) {
    return NextResponse.json(
      { error: "This login request could not be verified." },
      { status: 403 },
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { password?: string }
    | null;
  const password = body?.password ?? "";

  if (!password || !isValidMembersPassword(password)) {
    return NextResponse.json(
      { error: "The password you entered is not correct." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(MEMBERS_COOKIE_NAME, createMembersSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: MEMBERS_SESSION_MAX_AGE,
  });
  response.headers.set("Cache-Control", "no-store");

  return response;
}