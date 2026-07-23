import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Council Fish Fries",
  "Learn about Council 12906 fish fries and view photos of Knights serving the St. Peter Parish community.",
  "/events/fish-fries",
);

const gallery = [
  { src: "/images/events/fish-fry-cooking.jpg", alt: "Council 12906 members cooking food for a parish fish fry" },
  { src: "/images/events/fish-fry-food.jpg", alt: "Freshly prepared fried fish ready to be served" },
];

export default function FishFriesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/events" className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600">← Back to Events</Link>
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image src="/images/events/fish-fry-hero.jpg" alt="Council 12906 members serving food at a parish fish fry" fill priority className="object-cover" sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">Parish Tradition</p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">Council 12906 Fish Fries</h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <p>Council 12906 fish fries bring our Knights together to prepare and serve meals for parishioners, families, and friends.</p>
              <p>These events are rooted in service, fellowship, and hospitality. Members work side by side cooking, serving, and welcoming the community.</p>
              <p>Future dates, menus, pricing, and pickup information will be posted here as they become available.</p>
            </div>
            <DonateButton className="mt-8" />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-black text-blue-950">Fish Fry Photo Gallery</h2>
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
