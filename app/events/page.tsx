import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const featuredEvents = [
  {
    title: "BBQ's",
    description:
      "Learn more about our parish BBQ plate events and the fellowship behind every meal.",
    href: "/events/bbq",
    image: "/images/events/bbq-group.jpg",
    imageAlt:
      "Knights of Columbus Council 12906 members serving at a parish barbecue",
  },
  {
    title: "Fish Fries",
    description:
      "See Council 12906 members preparing and serving fish fry meals for our parish community.",
    href: "/events/fish-fries",
    image: "/images/events/fish-fry-hero.jpg",
    imageAlt: "Council 12906 members serving food at a parish fish fry",
  },
  {
    title: "Free Throw Contest",
    description:
      "Celebrating youth participation, sportsmanship, and community fellowship through basketball.",
    href: "/events/free-throw-contest",
    image: "/images/events/free-throw-hero.jpg",
    imageAlt: "Basketball passing through the hoop at the free throw contest",
  },
  {
    title: "Coats for Kids",
    description:
      "Council members and volunteers collect and distribute warm coats to children in need.",
    href: "/events/coats-for-kids",
    image: "/images/events/coats-for-kids-hero.jpg",
    imageAlt: "Council 12906 volunteers at the Coats for Kids event",
  },
];

export default function Events() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Events"
          title="Events & Meetings"
          subtitle="Stay connected with Council 12906 meetings, parish support, service projects, and fellowship."
        />

        <section className="mx-auto mt-10 max-w-5xl rounded-3xl bg-blue-950 p-8 text-white shadow-lg md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">
              Support Our Events
            </p>
            <h2 className="mt-3 text-3xl font-black">Help Council 12906 Serve</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-100">
              Donations help us continue parish gatherings, youth events, and
              charitable service throughout the Covington community.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="mt-6 inline-flex shrink-0 rounded-full bg-yellow-500 px-7 py-4 font-black text-blue-950 transition hover:bg-yellow-400 md:mt-0"
          >
            Get Involved & Donate
          </Link>
        </section>

        <section className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {featuredEvents.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 480px, 100vw"
                />
              </div>
              <div className="p-7">
                <h2 className="text-3xl font-black text-blue-950">
                  {event.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {event.description}
                </p>
                <span className="mt-6 inline-flex rounded-full bg-blue-950 px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition group-hover:bg-yellow-500 group-hover:text-blue-950">
                  View {event.title}
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="mx-auto mt-12 max-w-5xl rounded-3xl border p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
            Monthly General Membership Meeting
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Second Tuesday of Each Month
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Location: St. Mary&apos;s Hall
          </p>

          <div className="mt-8 grid gap-4">
            {[
              ["6:30 PM", "Rosary"],
              ["6:50 PM", "Meal"],
              ["7:05 PM", "General Membership Meeting"],
            ].map(([time, item]) => (
              <div
                key={time}
                className="flex items-center justify-between rounded-lg bg-slate-100 p-4"
              >
                <span className="font-black text-blue-950">{time}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-2xl font-black text-yellow-400">
            Officers Meeting
          </h2>
          <p className="mt-4 text-slate-100">
            First Tuesday of each month at 6:30 PM
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
