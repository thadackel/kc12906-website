import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const gallery = [
  { src: "/images/events/bbq-cooking.jpg", alt: "Council 12906 Knights preparing barbecue" },
  { src: "/images/events/bbq-team.jpg", alt: "Council 12906 volunteers gathered around the barbecue smoker" },
  { src: "/api/bbq-photo/5", alt: "Chicken cooking inside the Council 12906 barbecue smoker" },
  { src: "/api/bbq-photo/6", alt: "Council 12906 volunteers working at the barbecue pit at night" },
  { src: "/api/bbq-photo/7", alt: "Council 12906 Knights preparing barbecue chicken together" },
];

export default function BbqPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/events" className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600">← Back to Events</Link>
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image src="/images/events/bbq-group.jpg" alt="Knights of Columbus Council 12906 BBQ volunteers" fill priority className="object-cover" sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">Parish Fellowship</p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">Council 12906 BBQ&apos;s</h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <p>The Knights of Columbus Council 12906 proudly prepares and serves delicious BBQ plates for members of our parish and the surrounding community.</p>
              <p>Each event brings our brother Knights together in service, fellowship, and support of parish life. Every plate is prepared with care and a spirit of hospitality.</p>
              <p>Proceeds help support the charitable and service work of our council. Event dates, menus, pickup information, and pricing will be posted here as they become available.</p>
            </div>
            <DonateButton className="mt-8" />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-black text-blue-950">BBQ Photo Gallery</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md">
                {photo.src.startsWith("/api/") ? (
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
