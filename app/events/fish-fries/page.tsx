import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function FishFriesPage() {
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
              src="/images/events/fish-fries-placeholder.svg"
              alt="Knights of Columbus parish fish fry event"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
              Parish Tradition
            </p>
            <h1 className="mt-3 text-4xl font-black text-blue-950 md:text-5xl">
              Council 12906 Fish Fries
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Information about upcoming fish fries, menus, pricing, and pickup times will be posted here. A final event photo can be added when it becomes available.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
