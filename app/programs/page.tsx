import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const programs = [
  ["Baby Bottle Collection", "Support for life-affirming charitable outreach."],
  ["Student Contests", "Youth activities and contests sponsored by the council."],
  ["Coats for Kids", "Providing coats and winter support to children in need."],
  ["Basketball Free Throw Contest", "A youth sports program for students in the community."],
  ["Mothers and Fathers Day Recognition", "Honoring family life and the vocation of parents."],
  ["Seminarian Support", "Supporting seminarians and vocations to the priesthood."],
  ["Special Olympics Support", "Service and support for Special Olympics activities."],
  ["Spiritual Growth", "Daily Rosary, quarterly communion, and Catholic formation opportunities."],
];

export default function Programs() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          eyebrow="Programs"
          title="Faith, family, community, and life"
          subtitle="Council 12906 participates in programs that benefit St. Peter Parish and the surrounding community."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map(([title, text]) => (
            <div key={title} className="rounded-2xl border p-8 shadow-sm">
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
