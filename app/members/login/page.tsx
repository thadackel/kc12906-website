import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { hasMemberSession } from "@/lib/member-auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logInMember } from "../actions";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Secure member access for Knights of Columbus Council 12906.",
  robots: { index: false, follow: false },
};

export default async function MemberLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await hasMemberSession()) redirect("/members");
  const { error } = await searchParams;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="section-title mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">Council 12906 Members</p>
          <h2 className="mt-3 text-4xl font-black text-blue-950 sm:text-5xl">Member Login</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Enter the council member password to access meeting minutes and member resources.
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <form action={logInMember} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-black uppercase tracking-wider text-blue-950">
                Member Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-blue-800 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {error === "invalid" && (
              <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-bold text-red-800">
                The password was not recognized. Please try again.
              </p>
            )}

            <button type="submit" className="w-full rounded-xl bg-yellow-500 px-6 py-3.5 text-lg font-black text-blue-950 transition hover:bg-yellow-400">
              Log In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
