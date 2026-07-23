import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Contact St. Peter Council 12906",
  "Contact Knights of Columbus St. Peter Council 12906 or find monthly meeting information in Covington, Louisiana.",
  "/contact",
);

const facebookUrl =
  "https://www.facebook.com/p/St-Peter-Knights-of-Columbus-covington-61568291579406/";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Contact"
          title="Contact St. Peter Council 12906"
          subtitle="We welcome questions about membership, service projects, meetings, and council activities."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <section className="rounded-3xl border p-8 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">Meeting Information</h2>
            <p className="mt-4"><strong>Location:</strong> St. Mary&apos;s Hall</p>
            <p className="mt-2"><strong>When:</strong> Second Tuesday of each month</p>
            <ul className="mt-4 space-y-2">
              <li>6:30 PM — Rosary</li>
              <li>6:50 PM — Meal</li>
              <li>7:05 PM — General Membership Meeting</li>
            </ul>
          </section>
          <section className="rounded-3xl border p-8 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">Council Contact</h2>
            <p className="mt-4 font-bold">Knights of Columbus</p>
            <p>St. Peter Council 12906</p>
            <address className="mt-3 not-italic leading-7 text-slate-700">
              125 East 19th Ave.<br />
              Covington, LA 70433
            </address>
            <p className="mt-4"><strong>Grand Knight:</strong> Gerald Nuss</p>
            <p className="mt-4 leading-7 text-slate-600">
              For council questions, visit a monthly meeting or contact Council
              12906 through its Facebook page.
            </p>
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-yellow-500 px-6 py-3 font-black text-blue-950 transition hover:bg-yellow-400"
            >
              Contact Us on Facebook
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
