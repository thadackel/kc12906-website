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
            <a
              href="mailto:gtnuss58@gmail.com"
              className="mt-2 block break-all font-bold text-blue-800 hover:text-blue-600"
            >
              gtnuss58@gmail.com
            </a>
            <a
              href="tel:+19853731784"
              className="mt-2 block font-bold text-blue-800 hover:text-blue-600"
            >
              985-373-1784
            </a>
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

        <section className="mx-auto mt-8 max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
          <h2 className="text-2xl font-black text-blue-950">
            Council Leadership Contacts
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-blue-700">
                Deputy Grand Knight
              </p>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Dr. Jerome Buller
              </h3>
              <a
                href="mailto:jlbuller@gmail.com"
                className="mt-4 block break-all font-bold text-blue-800 hover:text-blue-600"
              >
                jlbuller@gmail.com
              </a>
              <a
                href="tel:+14105990908"
                className="mt-2 block font-bold text-blue-800 hover:text-blue-600"
              >
                410-599-0908
              </a>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-blue-700">
                Financial Secretary
              </p>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Brian Marcel
              </h3>
              <a
                href="mailto:brianmarcel40@gmail.com"
                className="mt-4 block break-all font-bold text-blue-800 hover:text-blue-600"
              >
                brianmarcel40@gmail.com
              </a>
              <a
                href="tel:+19855024403"
                className="mt-2 block font-bold text-blue-800 hover:text-blue-600"
              >
                985-502-4403
              </a>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-wider text-blue-700">
                Membership Director
              </p>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                James Klonica
              </h3>
              <a
                href="mailto:James.klonica@gmail.com"
                className="mt-4 block break-all font-bold text-blue-800 hover:text-blue-600"
              >
                James.klonica@gmail.com
              </a>
              <a
                href="tel:+15049095338"
                className="mt-2 block font-bold text-blue-800 hover:text-blue-600"
              >
                504-909-5338
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
