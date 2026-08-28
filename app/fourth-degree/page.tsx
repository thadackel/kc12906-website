import { createPageMetadata } from "@/app/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export const metadata = createPageMetadata(
  "Fourth Degree Knights",
  "Learn about the patriotic Fourth Degree of the Knights of Columbus and the service of Council 12906 Sir Knights.",
  "/fourth-degree",
);

export default function FourthDegreePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Patriotism"
          title="Fourth Degree Knights"
          subtitle="Sir Knights answer the call to serve God, country, the Church, and their communities through patriotic service and faithful public witness."
        />

        <figure className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg">
          <Image
            src="/images/fourth-degree/fourth-degree-knights.jpg"
            alt="Fourth Degree Knights gathered for service"
            width={1536}
            height={2048}
            priority
            className="h-auto w-full"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
          <figcaption className="px-6 py-4 text-center text-sm font-bold text-slate-600">
            Fourth Degree Knights serving with faith, honor, and patriotism.
          </figcaption>
        </figure>

        <section className="mx-auto mt-12 max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          <p>
            The Fourth Degree is the patriotic degree of the Knights of Columbus.
            It gives eligible Knights an opportunity to deepen their commitment
            to Catholic citizenship while continuing to live the principles of
            charity, unity, and fraternity.
          </p>
          <p>
            Members of the Fourth Degree are known as Sir Knights and serve through
            local assemblies. They support veterans, active-duty military members
            and their families, participate in patriotic and civic observances, and
            stand as visible witnesses to faith and responsible citizenship.
          </p>
          <p>
            Fourth Degree Knights may also serve in the Color Corps, providing
            ceremonial honor guards at liturgical celebrations, memorial services,
            civic events, and other occasions that honor the Church, the nation,
            and those who have served.
          </p>
        </section>

        <section className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-600">
              Patriotism in Action
            </p>
            <h2 className="mt-3 text-2xl font-black text-blue-950">
              Service to Church and Country
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Sir Knights put patriotism into practice through service, prayer,
              remembrance, and support for the people who protect our communities
              and nation.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-600">
              Fraternal Witness
            </p>
            <h2 className="mt-3 text-2xl font-black text-blue-950">
              Faith, Honor, and Brotherhood
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Through assembly life and public service, Fourth Degree Knights
              encourage one another to lead with courage, integrity, and devotion
              to the Catholic faith.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
