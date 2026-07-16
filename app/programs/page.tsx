import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { programs } from "./programData";

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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-900"
            >
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
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
