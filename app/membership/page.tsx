import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

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
          subtitle="Council 12906 welcomes Catholic men who want to serve, grow in faith, and support their families and parish."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(([title, text]) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
              <h2 className="text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <section className="mt-14 rounded-3xl bg-blue-950 p-10 text-center text-white">
          <h2 className="text-3xl font-black text-yellow-400">Ready to Learn More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-100">
            Visit a meeting, speak with Grand Knight Gerald Nuss, or contact the council for more information about membership.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 hover:bg-yellow-400">
            Contact the Council
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
