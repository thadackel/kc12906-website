import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonateButton from "@/components/DonateButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs } from "../programData";
import { createPageMetadata } from "@/app/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) return {};

  return createPageMetadata(
    program.title,
    program.summary,
    `/programs/${program.slug}`,
  );
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) notFound();

  const isSpiritualGrowth = program.slug === "spiritual-growth";

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

        {isSpiritualGrowth && (
          <section className="mx-auto max-w-5xl px-6 pt-12">
            <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="relative aspect-[16/9] bg-slate-100">
                <Image
                  src="/images/programs/kc-rosary.webp"
                  alt="Council 12906 members praying the Rosary"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>
              <figcaption className="px-6 py-5 text-center text-sm italic leading-6 text-slate-600">
                Council 12906 gathers in prayer before each General Membership Meeting,
                strengthening our faith through the Rosary and our devotion to Christ and His Blessed Mother.
              </figcaption>
            </figure>
          </section>
        )}

        <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
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
