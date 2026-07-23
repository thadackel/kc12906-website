import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { programs } from "./programData";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Faith in Action Programs",
  "Explore Council 12906 faith, family, community, youth, and life programs serving St. Peter Parish and Covington.",
  "/programs",
);

export default function Programs() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Programs"
          title="Faith, family, community, and life"
          subtitle="Council 12906 participates in programs that benefit St. Peter Parish and the surrounding community. Select a program to learn more."
        />

        <section className="mt-10 rounded-3xl bg-blue-950 p-8 text-white shadow-lg md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-400">
              Help Make These Programs Possible
            </p>
            <h2 className="mt-3 text-3xl font-black">Support Council 12906</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-100">
              Your donation helps fund charitable outreach, youth activities,
              parish support, and community service programs.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="mt-6 inline-flex shrink-0 rounded-full bg-yellow-500 px-7 py-4 font-black text-blue-950 transition hover:bg-yellow-400 md:mt-0"
          >
            Get Involved & Donate
          </Link>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => {
            const isSpiritualGrowth = program.slug === "spiritual-growth";

            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
              >
                {isSpiritualGrowth && (
                  <div className="relative aspect-[16/7] bg-slate-100">
                    <Image
                      src="/images/programs/kc-rosary.webp"
                      alt="Council 12906 members praying the Rosary"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                )}

                <div className="p-8">
                  <p className="text-sm font-black uppercase tracking-widest text-blue-700">
                    {program.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-black text-blue-950 transition group-hover:text-blue-700">
                    {program.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">{program.summary}</p>
                  <p className="mt-6 font-black text-blue-900">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
