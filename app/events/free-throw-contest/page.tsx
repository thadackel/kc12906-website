import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const gallery = [
  { src: "/images/events/free-throw-coach.jpg", alt: "A volunteer holding a basketball during the free throw contest" },
  { src: "/images/events/free-throw-fun.jpg", alt: "A smiling participant enjoying the free throw contest gathering" },
];

export default function FreeThrowContestPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/events" className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600">← Back to Events</Link>
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image src="/images/events/free-throw-hero.jpg" alt="Basketball passing through the hoop at the free throw contest" fill priority className="object-cover" sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">Youth & Community</p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">Free Throw Contest</h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <p>The Free Throw Contest gives young participants an opportunity to demonstrate their basketball skills in a welcoming community setting.</p>
              <p>Council members support the event by helping with registration, scoring, encouragement, and event coordination.</p>
              <p>Future contest dates, eligibility information, and registration details will be posted here when available.</p>
            </div>
            <DonateButton className="mt-8" />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-black text-blue-950">Free Throw Contest Photo Gallery</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
