import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const duesUrl =
  "https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/4DW52T2RH3TWFENKNKMDJKXQ";

const resources = [
  {
    title: "Knights of Columbus Supreme",
    text: "Visit the national Knights of Columbus website for news, programs, and member information.",
    href: "https://www.kofc.org/",
    linkText: "Visit Supreme Council",
  },
  {
    title: "St. Peter Parish",
    text: "Find parish resources, Mass schedules, ministries, and parish life information.",
    href: "https://stpeterparish.com/",
    linkText: "Visit St. Peter Parish",
  },
  {
    title: "Dues & Forms",
    text: "Pay your Council 12906 annual dues securely through Square. Additional council forms and documents will be added here.",
    href: duesUrl,
    linkText: "Pay Your Dues",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Resources"
          title="Council Resources"
          subtitle="Useful links, forms, newsletters, and documents for council members and visitors."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="flex flex-col rounded-2xl border p-8 shadow-sm"
            >
              <h2 className="text-2xl font-black text-blue-950">
                {resource.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {resource.text}
              </p>
              <Link
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-yellow-500 px-5 py-3 text-center font-black text-blue-950 transition-colors hover:bg-yellow-400"
              >
                {resource.linkText}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
