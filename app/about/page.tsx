import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "About St. Peter Council 12906",
  "Learn about Knights of Columbus St. Peter Council 12906 and its service to St. Peter Parish and Covington, Louisiana.",
  "/about",
);

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="About"
          title="About St. Peter Council 12906"
          subtitle="Knights of Columbus St. Peter Council 12906 serves St. Peter Catholic Church and the Covington, Louisiana community."
        />
        <section className="mx-auto mt-10 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center shadow-sm">
          <p className="text-lg font-black text-blue-950">Knights of Columbus</p>
          <p className="mt-1 text-lg font-bold text-blue-900">St. Peter Council 12906</p>
          <address className="mt-3 not-italic leading-7 text-slate-700">
            125 East 19th Ave.<br />
            Covington, LA 70433
          </address>
        </section>
        <section className="mx-auto mt-12 max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          <p>
            Council 12906 was organized in 2001 at the request of Pastor Fr. William
            â€œFr. Billâ€ McGough. In need of assistance with a variety of projects, he
            reached out to several parishioners to contact the Fraternal Knights of
            Columbus. Born with 30 committed Catholic men, the new council was
            chartered by the Supreme Headquarters of the Knights of Columbus.
          </p>
          <p>
            The council has recently grown to more than 180 Knights, serving Fr.
            Daniel Brouillette, Pastor, and Fr. Cuong Tran, Parochial Vicar. Council
            12906 assists more than 70 ministries of St. Peter Catholic Church, as
            well as the City of Covington and the surrounding community.
          </p>
          <p>
            We deliver food to families in need through the Food Bank and contribute
            food to St. Peter&apos;s â€œLittle Pantryâ€ Ministry. We also collect coats
            locally for the Knights of Columbus Coats for Kids program, helping
            provide warm coats to people in need throughout the community.
          </p>
          <p>
            The council meeting is held on the second Tuesday of each month at St.
            Mary&apos;s Hall. The evening begins with the Rosary at 6:30 PM, followed
            by a meal at 6:50 PM and the general membership meeting at 7:05 PM.
          </p>
          <p>
            The council&apos;s work is grounded in the Knights of Columbus principles
            of Charity, Unity, Fraternity, and Patriotism.
          </p>
        </section>
        <section className="mt-14 rounded-3xl bg-blue-950 p-10 text-white">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-black">Grand Knight: Gerald Nuss</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}
