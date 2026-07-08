import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const principles = ["Charity", "Unity", "Fraternity", "Patriotism"];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 py-28 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-yellow-400">
                St. Peter Council 12906
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
                Catholic men serving Covington.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-100">
                Knights of Columbus Council 12906 serves St. Peter Parish and
                the Covington community through faith, fellowship, charity, and
                brotherhood.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/membership"
                  className="rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 hover:bg-yellow-400"
                >
                  Become a Knight
                </Link>

                <Link
                  href="/events"
                  className="rounded-lg border border-white px-8 py-4 text-lg font-black text-white hover:bg-white hover:text-blue-950"
                >
                  View Meetings
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-blue-700 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Monthly Council Meeting
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Second Tuesday
              </h2>

              <p className="mt-4 text-xl">St. Mary&apos;s Hall</p>

              <div className="mt-8 grid gap-4 text-lg">
                <div className="rounded-xl bg-white/10 p-4">
                  <strong>6:30 PM</strong> — Rosary
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <strong>6:50 PM</strong> — Meal
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <strong>7:05 PM</strong> — General Membership Meeting
                </div>
              </div>

              <p className="mt-7 text-slate-200">
                Grand Knight: <strong>Gerald Nuss</strong>
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Faith in Action"
            title="Charity, unity, fraternity, and patriotism"
            subtitle="Council 12906 brings Catholic men together to support parish life, serve neighbors in need, strengthen families, and build lasting fellowship."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-2xl font-black text-blue-950">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Our Work"
              title="Serving parish, family, and neighbor"
              subtitle="The council supports St. Peter Parish, Catholic families, charitable outreach, youth programs, and community service."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                [
                  "Parish Support",
                  "Supporting clergy, parish ministries, liturgies, and Catholic life at St. Peter Parish.",
                ],
                [
                  "Community Service",
                  "Helping neighbors through charitable programs, drives, collections, and hands-on service.",
                ],
                [
                  "Brotherhood",
                  "Building fellowship among Catholic men through prayer, meals, meetings, events, and shared service.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-black text-blue-950">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}