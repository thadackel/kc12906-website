import { NextResponse } from "next/server";
import {
  isValidMembersPassword,
  MEMBERS_COOKIE_NAME,
  MEMBERS_SESSION_MAX_AGE,
  membersPortalIsConfigured,
  membersSessionToken,
} from "@/lib/membersAuth";

export async function POST(request: Request) {
  if (!membersPortalIsConfigured()) {
    return NextResponse.json(
      { error: "The members portal has not been configured yet." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { password?: string }
    | null;
  const password = body?.password?.trim() ?? "";

  if (!password || !isValidMembersPassword(password)) {
    return NextResponse.json(
      { error: "The password you entered is not correct." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(MEMBERS_COOKIE_NAME, membersSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/members",
    maxAge: MEMBERS_SESSION_MAX_AGE,
  });

  return response;
}
