import { NextResponse } from "next/server";
import {
  MEMBERS_COOKIE_NAME,
  requestHasAllowedOrigin,
} from "@/lib/membersAuth";

export async function POST(request: Request) {
  if (!requestHasAllowedOrigin(request)) {
    return NextResponse.json(
      { error: "This logout request could not be verified." },
      { status: 403 },
    );
  }

  const response = NextResponse.redirect(
    new URL("/members/login", request.url),
    303,
  );
  response.cookies.set(MEMBERS_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
    maxAge: 0,
  });
  response.headers.set("Cache-Control", "no-store");

  return response;
}