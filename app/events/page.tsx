import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function Events() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Events"
          title="Events & Meetings"
          subtitle="Stay connected with Council 12906 meetings, parish support, service projects, and fellowship."
        />

        <section className="mx-auto mt-12 max-w-4xl rounded-3xl border p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
            Monthly General Membership Meeting
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950">
            Second Tuesday of Each Month
          </h2>
          <p className="mt-3 text-lg text-slate-600">Location: St. Mary's Hall</p>

          <div className="mt-8 grid gap-4">
            {[
              ["6:30 PM", "Rosary"],
              ["6:50 PM", "Meal"],
              ["7:05 PM", "General Membership Meeting"],
            ].map(([time, item]) => (
              <div key={time} className="flex items-center justify-between rounded-lg bg-slate-100 p-4">
                <span className="font-black text-blue-950">{time}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-4xl rounded-3xl bg-blue-950 p-8 text-white">
          <h2 className="text-2xl font-black text-yellow-400">Officers Meeting</h2>
          <p className="mt-4 text-slate-100">First Tuesday of each month 6:30 PM</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
