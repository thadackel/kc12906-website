import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="About"
          title="About Council 12906"
          subtitle="Knights of Columbus Council 12906 is based at St. Peter Catholic Church in Covington, Louisiana."
        />
        <section className="mx-auto mt-12 max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          <p>Council 12906 brings Catholic men together in faith, fellowship, and charitable service. The council supports St. Peter Parish, assists local ministries, and serves the Covington community.</p>
          <p>The council meeting is held on the second Tuesday of each month at St. Mary's Hall. The evening begins with the Rosary at 6:30 PM, followed by a meal at 6:50 PM and the general membership meeting at 7:05 PM.</p>
          <p>The council's work is grounded in the Knights of Columbus principles of Charity, Unity, Fraternity, and Patriotism.</p>
        </section>
        <section className="mt-14 rounded-3xl bg-blue-950 p-10 text-white">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">Leadership</p>
          <h2 className="mt-3 text-3xl font-black">Grand Knight: Gerald Nuss</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
