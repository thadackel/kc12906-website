import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Council Photo Gallery",
  "View photos from Council 12906 events, charitable work, parish service, and fellowship.",
  "/gallery",
);

const albums = [
  {
    title: "Council BBQ's",
    href: "/events/bbq",
    description: "Council members preparing and serving barbecue for the parish community.",
    photos: [
      {
        src: "/images/events/bbq-group.jpg",
        alt: "Knights of Columbus Council 12906 barbecue volunteers",
      },
      {
        src: "/images/events/bbq-cooking.jpg",
        alt: "Council 12906 members cooking barbecue",
      },
      {
        src: "/images/events/bbq-team.jpg",
        alt: "Council 12906 volunteers gathered around the barbecue smoker",
      },
    ],
  },
  {
    title: "Fish Fries",
    href: "/events/fish-fries",
    description: "Knights working together to prepare and serve fish fry meals.",
    photos: [
      {
        src: "/images/events/fish-fry-hero.jpg",
        alt: "Council 12906 members serving food at a parish fish fry",
      },
      {
        src: "/images/events/fish-fry-cooking.jpg",
        alt: "Council 12906 members cooking food for a parish fish fry",
      },
      {
        src: "/images/events/fish-fry-food.jpg",
        alt: "Freshly prepared fried fish ready to be served",
      },
    ],
  },
  {
    title: "Free Throw Contest",
    href: "/events/free-throw-contest",
    description: "Youth participation, sportsmanship, and community fellowship through basketball.",
    photos: [
      {
        src: "/images/events/free-throw-hero.jpg",
        alt: "Basketball passing through the hoop at the free throw contest",
      },
      {
        src: "/images/events/free-throw-coach.jpg",
        alt: "A volunteer holding a basketball during the free throw contest",
      },
      {
        src: "/images/events/free-throw-fun.jpg",
        alt: "A smiling participant enjoying the free throw contest gathering",
      },
    ],
  },
  {
    title: "Coats for Kids",
    href: "/events/coats-for-kids",
    description: "Council members and volunteers helping provide warm coats to children in need.",
    photos: [
      {
        src: "/images/events/coats-for-kids-hero.jpg",
        alt: "Council 12906 volunteers at the Coats for Kids event",
      },
      {
        src: "/images/events/coats-for-kids-volunteers.jpg",
        alt: "Council 12906 volunteers gathered beside donated coats",
      },
      {
        src: "/images/events/coats-for-kids-sorting.jpg",
        alt: "Council members sorting coats for children in the community",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Gallery"
          title="Council 12906 Photo Gallery"
          subtitle="Photos from our council events, charitable work, parish service, and fellowship."
        />

        <div className="mt-14 space-y-16">
          {albums.map((album) => (
            <section key={album.title}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-black text-blue-950 md:text-4xl">
                    {album.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                    {album.description}
                  </p>
                </div>
                <Link
                  href={album.href}
                  className="rounded-full bg-blue-950 px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-yellow-500 hover:text-blue-950"
                >
                  View Event
                </Link>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {album.photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-md"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
