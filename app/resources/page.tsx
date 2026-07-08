import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const resources = [
  ["Knights of Columbus Supreme", "Link to the national Knights of Columbus website."],
  ["St. Peter Parish", "Parish resources, schedules, and parish life information."],
  ["Dues & Forms", "Add dues, forms, newsletters, and downloadable documents here."],
];

export default function Resources() {
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
          {resources.map(([title, text]) => (
            <div key={title} className="rounded-xl border p-8 shadow-sm">
              <h2 className="text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
