import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs } from "../programData";

const rosaryImage =
  "data:image/jpeg;base64,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";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="bg-blue-950 px-6 py-16 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
              {program.category} Program
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
              {program.summary}
            </p>
            <DonateButton className="mt-8" />
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {slug === "spiritual-growth" && (
              <figure className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <Image
                  src={rosaryImage}
                  alt="Council 12906 Rosary used during prayer and spiritual-growth activities"
                  width={600}
                  height={340}
                  unoptimized
                  className="h-auto w-full object-cover"
                  priority
                />
                <figcaption className="px-6 py-4 text-sm leading-6 text-slate-600">
                  Council 12906 gathers in prayer before each General Membership Meeting, continuing our commitment to faith, fraternity, and service.
                </figcaption>
              </figure>
            )}

            <h2 className="text-3xl font-black text-blue-950">About This Program</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{program.introduction}</p>

            <h2 className="mt-12 text-3xl font-black text-blue-950">How Council 12906 Serves</h2>
            <ul className="mt-6 space-y-4">
              {program.activities.map((activity) => (
                <li key={activity} className="flex gap-3 text-lg leading-7 text-slate-700">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-blue-800">Program Impact</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{program.impact}</p>
            <DonateButton className="mt-8 w-full" />
          </aside>
        </section>

        <section className="bg-slate-100 px-6 py-12">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-blue-900">Explore more ways to serve.</p>
              <p className="mt-1 text-slate-600">Return to the full Council 12906 programs list.</p>
            </div>
            <Link href="/programs" className="rounded-lg bg-blue-950 px-6 py-3 font-black text-white hover:bg-blue-900">
              All Programs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
