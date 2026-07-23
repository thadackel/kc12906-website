import { NextResponse } from "next/server";
import { MEMBERS_COOKIE_NAME } from "@/lib/membersAuth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/members/login", request.url));
  response.cookies.set(MEMBERS_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/members",
    maxAge: 0,
  });

  return response;
}
