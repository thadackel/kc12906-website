import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Contact"
          title="Contact Council 12906"
          subtitle="We welcome questions about membership, service projects, meetings, and council activities."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <section className="rounded-2xl border p-8 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">Meeting Information</h2>
            <p className="mt-4"><strong>Location:</strong> St. Mary's Hall</p>
            <p className="mt-2"><strong>When:</strong> Second Tuesday of each month</p>
            <ul className="mt-4 space-y-2">
              <li>6:30 PM — Rosary</li>
              <li>6:50 PM — Meal</li>
              <li>7:05 PM — General Membership Meeting</li>
            </ul>
          </section>

          <section className="rounded-2xl border p-8 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">Council Contact</h2>
            <p className="mt-4"><strong>Grand Knight:</strong> Gerald Nuss</p>
            <p className="mt-4 text-slate-600">
              Contact email and phone number can be added here once confirmed.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
