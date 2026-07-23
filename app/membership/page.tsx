import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Membership and Council Dues",
  "Learn how to become a Knight and securely pay annual dues for Knights of Columbus Council 12906.",
  "/membership",
);

const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";

const joinImage =
  "data:image/webp;base64,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";

const reasons = [
  ["Serve", "Make a direct impact through parish and community service."],
  ["Grow", "Strengthen your Catholic faith through brotherhood and prayer."],
  ["Belong", "Build friendships with Catholic men committed to service."],
];

export default function Membership() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Membership"
          title="Become a Knight"
          subtitle="St. Peter Council 12906 welcomes Catholic men who want to serve, grow in faith, and support their families and parish."
        />

        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
          <img
            src={joinImage}
            alt="Knights of Columbus membership invitation for Catholic men age 18 and older"
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(([title, text]) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h2 className="text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-widest text-blue-800">
            Join the Knights of Columbus
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Start Your Membership Application
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Use the official Knights of Columbus membership page to learn more and begin your application. The page will open in a new tab.
          </p>
          <Link
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 shadow-sm transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
          >
            Join the Knights of Columbus
          </Link>
        </section>

        <section className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-widest text-blue-800">
            Current Members
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Pay Your Annual Dues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Pay your Council 12906 annual membership dues securely through Square. The checkout page will open in a new tab.
          </p>
          <Link
            href="https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/4DW52T2RH3TWFENKNKMDJKXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 shadow-sm transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
          >
            Pay Dues
          </Link>
        </section>

        <section className="mt-14 rounded-3xl bg-blue-950 p-10 text-center text-white">
          <h2 className="text-3xl font-black text-yellow-400">Ready to Learn More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-100">
            Visit a meeting, speak with Grand Knight Gerald Nuss, or contact the council for more information about membership.
          </p>
          <address className="mt-5 not-italic leading-7 text-slate-100">
            Knights of Columbus<br />
            St. Peter Council 12906<br />
            125 East 19th Ave.<br />
            Covington, LA 70433
          </address>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 hover:bg-yellow-400">
            Contact the Council
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
