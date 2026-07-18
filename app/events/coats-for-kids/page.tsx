import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const gallery = [
  { src: "/images/events/coats-for-kids-volunteers.jpg", alt: "Council 12906 volunteers gathered beside donated coats" },
  { src: "/images/events/coats-for-kids-sorting.jpg", alt: "Council members sorting coats for children in the community" },
];

export default function CoatsForKidsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/events" className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600">← Back to Events</Link>
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image src="/images/events/coats-for-kids-hero.jpg" alt="Council 12906 volunteers at the Coats for Kids event" fill priority className="object-cover" sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">Helping Children in Need</p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">Coats for Kids</h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <p>Coats for Kids helps provide warm winter coats to children who need them in our community.</p>
              <p>Council members and volunteers collect, organize, and distribute coats while working together in the Knights&apos; tradition of charity and service.</p>
              <p>Information about future collections, volunteer opportunities, and distribution events will be posted here.</p>
            </div>
            <DonateButton className="mt-8" />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-black text-blue-950">Coats for Kids Photo Gallery</h2>
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
