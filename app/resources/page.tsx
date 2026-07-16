import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const duesUrl =
  "https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/4DW52T2RH3TWFENKNKMDJKXQ";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Resources"
          title="Council Resources"
          subtitle="Useful links, forms, newsletters, and documents for council members and visitors."
        />

        <section className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-black uppercase tracking-widest text-blue-800">
            Member Resource
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Pay Your Annual Dues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Council 12906 members can securely pay annual membership dues through Square. The payment page opens in a new tab.
          </p>
          <Link
            href={duesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 shadow-sm transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
          >
            Pay Your Dues
          </Link>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Knights of Columbus Supreme", "Link to the national Knights of Columbus website."],
            ["St. Peter Parish", "Parish resources, schedules, and parish life information."],
            ["Forms & Documents", "Council forms, newsletters, and downloadable documents."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h2 className="text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
