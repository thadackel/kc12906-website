import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Get Involved",
  "Support, donate to, or join Knights of Columbus St. Peter Council 12906 in Covington, Louisiana.",
  "/get-involved",
);

const donationUrl =
  "https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/6WE6LGBU3C7O74XS7YGBGSL5";
const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="overflow-hidden rounded-3xl bg-blue-950 px-8 py-14 text-white shadow-xl md:px-14 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            Support Council 12906
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
            Get Involved
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
            Your support helps Council 12906 continue its charitable programs,
            parish activities, youth events, and service to families throughout
            the Covington community.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-400"
            >
              Donate Securely Through Square
            </Link>
            <Link
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-yellow-400 bg-white px-8 py-4 text-lg font-black text-blue-950 transition hover:bg-yellow-50"
            >
              Become a Knight
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-blue-950">
              Support Our Programs
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Donations help fund charitable outreach, youth programs, parish
              support, and community service projects sponsored by Council
              12906.
            </p>
            <Link
              href="/programs"
              className="mt-6 inline-flex font-black text-blue-900 hover:text-yellow-600"
            >
              View our programs â†’
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-blue-950">
              Participate in Our Events
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Join us at fish fries, barbecue events, youth activities, and
              charitable projects that bring our parish and community together.
            </p>
            <Link
              href="/events"
              className="mt-6 inline-flex font-black text-blue-900 hover:text-yellow-600"
            >
              View upcoming events â†’
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
