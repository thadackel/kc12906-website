"use server";

import { clearMemberSession, createMemberSession, isMemberPassword } from "@/lib/member-auth";
import { redirect } from "next/navigation";

export async function logInMember(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!isMemberPassword(password)) {
    redirect("/members/login?error=invalid");
  }

  await createMemberSession();
  redirect("/members");
}

export async function logOutMember() {
  await clearMemberSession();
  redirect("/members/login");
}
