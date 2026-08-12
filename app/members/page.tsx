import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { hasMemberSession } from "@/lib/member-auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { logOutMember } from "./actions";

export const metadata: Metadata = {
  title: "Member Resources",
  description: "Private resources for Knights of Columbus Council 12906 members.",
  robots: { index: false, follow: false },
};

export default async function MembersPage() {
  if (!(await hasMemberSession())) redirect("/members/login");

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="section-title mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">Private Member Area</p>
          <h2 className="mt-3 text-4xl font-black text-blue-950 sm:text-5xl">Council 12906 Member Resources</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Access council meeting minutes and member-only information.</p>
        </section>

        <section className="mx-auto mt-12 max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-700">Meeting Minutes</p>
              <h3 className="mt-3 text-3xl font-black text-blue-950">Council Meeting Archive</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-700">
                No meeting minutes have been published yet. This secure archive is ready, and minutes will appear here after the council uploads them.
              </p>
            </div>
            <span className="inline-flex shrink-0 rounded-full bg-white px-4 py-2 text-sm font-black text-blue-900 shadow-sm">0 documents</span>
          </div>
        </section>

        <div className="mx-auto mt-8 flex max-w-5xl justify-end">
          <form action={logOutMember}>
            <button type="submit" className="rounded-xl border-2 border-blue-950 px-6 py-3 font-black text-blue-950 transition hover:bg-blue-950 hover:text-white">
              Log Out
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
