import BbqSlideshow from "@/components/BbqSlideshow";
import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata(
  "Council BBQ Events",
  "See Council 12906 barbecue fellowship, service, and photo highlights from St. Peter Parish in Covington.",
  "/events/bbq",
);

export default function BbqPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/events" className="text-sm font-black uppercase tracking-wider text-blue-900 hover:text-yellow-600">
          â† Back to Events
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
          <div className="relative aspect-[16/8] bg-slate-100">
            <Image
              src="/images/events/bbq-group.jpg"
              alt="Knights of Columbus Council 12906 BBQ volunteers"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
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

        <BbqSlideshow />
      </main>
      <Footer />
    </>
  );
}
