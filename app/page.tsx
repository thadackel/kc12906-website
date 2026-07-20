import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const joinUrl = "https://www.kofc.org/get-involved/join-kofc/";
const facebookUrl =
  "https://www.facebook.com/p/St-Peter-Knights-of-Columbus-covington-61568291579406/";
const principles = ["Charity", "Unity", "Fraternity", "Patriotism"];

const highlights = [
  ["Parish Support", "Supporting clergy, parish ministries, liturgies, and Catholic life at St. Peter Parish."],
  ["Community Service", "Helping neighbors through charitable programs, drives, collections, and hands-on service."],
  ["Brotherhood", "Building fellowship among Catholic men through prayer, meals, meetings, events, and shared service."],
];

const news = [
  "Council meeting: second Tuesday of each month at St. Mary's Hall.",
  "Members gather for Rosary, meal, and general membership meeting.",
  "New members are welcome to ask about joining Council 12906.",
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-blue-950 px-6 py-24 text-white md:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-[center_12%] bg-no-repeat opacity-45"
            style={{ backgroundImage: "url('/images/home/eucharist-hero.webp')" }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/65 to-blue-950/55" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-blue-950/55 via-transparent to-blue-950/25" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-yellow-400">
                St. Peter Council 12906
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight drop-shadow-lg md:text-7xl">
                Catholic men serving Covington.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-100 drop-shadow-md">
                Knights of Columbus Council 12906 serves St. Peter Parish and
                the Covington community through faith, fellowship, charity, and
                brotherhood.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href={joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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

            <aside className="rounded-3xl border border-white/25 bg-blue-950/55 p-8 shadow-2xl backdrop-blur-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Monthly Council Meeting
              </p>

              <h2 className="mt-4 text-4xl font-black">Second Tuesday</h2>
              <p className="mt-4 text-xl">St. Mary&apos;s Hall</p>

              <div className="mt-8 grid gap-4 text-lg">
                <div className="rounded-xl bg-white/10 p-4"><strong>6:30 PM</strong> — Rosary</div>
                <div className="rounded-xl bg-white/10 p-4"><strong>6:50 PM</strong> — Meal</div>
                <div className="rounded-xl bg-white/10 p-4"><strong>7:05 PM</strong> — General Membership Meeting</div>
              </div>

              <p className="mt-7 text-slate-200">Grand Knight: <strong>Gerald Nuss</strong></p>
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
              <div key={principle} className="rounded-2xl border bg-white p-8 text-center shadow-sm">
                <h3 className="text-2xl font-black text-blue-950">{principle}</h3>
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
              {highlights.map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-black text-blue-950">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-blue-950 p-10 text-white">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                From the Grand Knight
              </p>
              <h2 className="mt-4 text-4xl font-black">Welcome to Council 12906</h2>
              <p className="mt-5 leading-8 text-slate-100">
                We invite Catholic men of the parish and community to join us in
                service, prayer, fellowship, and support of those in need.
              </p>
              <p className="mt-6 font-bold text-yellow-400">Gerald Nuss, Grand Knight</p>
            </div>

            <div className="rounded-3xl border p-10 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                Latest News
              </p>
              <h2 className="mt-4 text-4xl font-black text-blue-950">Council Updates</h2>
              <div className="mt-6 grid gap-4">
                {news.map((item) => (
                  <div key={item} className="rounded-xl bg-slate-100 p-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-lg md:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-9 w-9 fill-current"
              >
                <path d="M13.7 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.5V14h2.8v8h3.4Z" />
              </svg>
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.25em] text-blue-700">
              Stay Connected
            </p>
            <h2 className="mt-3 text-4xl font-black text-blue-950">
              Follow Council 12906 on Facebook
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              See recent photos, event reminders, parish service projects, and
              council announcements from St. Peter Knights of Columbus.
            </p>
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-700 px-8 py-4 text-lg font-black text-white transition hover:bg-blue-800"
            >
              Visit Our Facebook Page
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="bg-blue-950 px-6 py-20 text-center text-white">
          <h2 className="text-4xl font-black">Ready to serve with us?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-100">
            Learn more about joining Council 12906 and becoming part of a
            brotherhood committed to faith, family, and service.
          </p>
          <Link
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 text-lg font-black text-blue-950 hover:bg-yellow-400"
          >
            Learn About Membership
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
