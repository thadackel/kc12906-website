import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const albums = [
  ["Council Photos", "Photos of council members, meetings, and fellowship.", "public/images/council"],
  ["Service Events", "Photos from charitable work and community service.", "public/images/service"],
  ["Parish Activities", "Photos from parish events and faith activities.", "public/images/parish"],
];

export default function Gallery() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Gallery"
          title="Photo Gallery"
          subtitle="A place to share council service, parish events, and fellowship."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {albums.map(([title, text, folder]) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex h-52 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                Photos Coming Soon
              </div>
              <h2 className="mt-5 text-2xl font-black text-blue-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <p className="mt-4 rounded bg-slate-100 p-3 text-sm text-slate-500">
                Add images in: {folder}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
