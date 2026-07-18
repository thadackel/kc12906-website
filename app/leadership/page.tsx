import Base64Photo from "@/components/Base64Photo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";

export default function Page() {
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
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="aspect-[4/5] w-full bg-slate-100">
              <Base64Photo
                source="/images/leadership/gerald-nuss.b64"
                alt="Gerald Nuss, Grand Knight of Knights of Columbus Council 12906"
              />
            </div>
            <div className="p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                Grand Knight
              </p>
              <h2 className="mt-3 text-3xl font-black text-blue-950">Gerald Nuss</h2>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">Officers</p>
            <h2 className="mt-3 text-3xl font-black text-blue-950">Additional Officers</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Add Deputy Grand Knight, Chancellor, Recorder, Treasurer, Advocate, Warden, Guards, Trustees, and program personnel here when confirmed.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
