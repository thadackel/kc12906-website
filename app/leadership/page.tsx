import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Leadership() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Leadership"
          title="Council Leadership"
          subtitle="Council officers and program leaders help organize meetings, service projects, parish support, and fraternal life."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
              Grand Knight
            </p>
            <h2 className="mt-3 text-3xl font-black text-blue-950">Gerald Nuss</h2>
          </div>

          <div className="rounded-xl border p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
              Officers
            </p>
            <h2 className="mt-3 text-3xl font-black text-blue-950">Additional Officers</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Add Deputy Grand Knight, Chancellor, Recorder, Treasurer,
              Advocate, Warden, Guards, Trustees, and program personnel here
              when confirmed.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
