import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
=======
const bbqPhotos = [
  {
    src: "/images/events/bbq-cooking.jpg",
    alt: "Council 12906 Knights preparing barbecue at the grill",
  },
  {
    src: "/images/events/bbq-team.jpg",
    alt: "Council 12906 BBQ volunteers gathered near the cooking area",
  },
];

>>>>>>> 5a55947 (Add BBQ event page and photos)
export default function BbqPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/events"
          className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600"
        >
          ← Back to Events
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image
<<<<<<< HEAD
              src="/images/events/bbq-placeholder.svg"
              alt="Knights of Columbus parish barbecue plate event"
=======
              src="/images/events/bbq-group.jpg"
              alt="Knights of Columbus Council 12906 members at a parish barbecue event"
>>>>>>> 5a55947 (Add BBQ event page and photos)
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
              Parish Fellowship
            </p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">
<<<<<<< HEAD
              Council 12906 BBQ's
=======
              Council 12906 BBQ&apos;s
>>>>>>> 5a55947 (Add BBQ event page and photos)
            </h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              <p>
                The Knights of Columbus Council 12906 proudly prepares and serves delicious BBQ plates for members of our parish and the surrounding community. Each event brings our brother Knights together in service, fellowship, and support of parish life.
              </p>
              <p>
                From carefully seasoned meats to classic sides, every plate is prepared with care and a spirit of hospitality. These BBQ events are a wonderful opportunity for parishioners, families, and friends to enjoy a great meal while supporting the charitable and service work of our council.
              </p>
              <p>
                Event dates, plate details, pickup information, and pricing will be posted here as they become available. We look forward to serving you at our next parish BBQ.
              </p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {bbqPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          ))}
        </section>
>>>>>>> 5a55947 (Add BBQ event page and photos)
      </main>
      <Footer />
    </>
  );
}
