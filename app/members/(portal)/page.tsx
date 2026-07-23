import Link from "next/link";

const portalSections = [
  {
    title: "Meeting Minutes",
    href: "/members/minutes",
    description: "View monthly council meeting minutes organized by year.",
    icon: "📄",
  },
  {
    title: "Council Calendar",
    href: "/members/calendar",
    description: "See council meetings, service projects, parish events, and member activities.",
    icon: "📅",
  },
  {
    title: "Announcements",
    href: "/members/announcements",
    description: "Read current reminders, volunteer needs, and council notices.",
    icon: "📢",
  },
  {
    title: "Council Documents",
    href: "/members/documents",
    description: "Access bylaws, forms, planning documents, and council resources.",
    icon: "📂",
  },
  {
    title: "Photo Gallery",
    href: "/members/gallery",
    description: "Browse photographs from parish, charity, family, and council events.",
    icon: "📷",
  },
  {
    title: "Council Archive",
    href: "/members/archive",
    description: "Preserve the council's history, leadership, awards, and major accomplishments.",
    icon: "🏛️",
  },
];

export default function MembersPortalPage() {
  return (
    <main className="bg-slate-100">
      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            Welcome, Brother Knight
          </p>
          <h1 className="mt-4 text-5xl font-black">Council 12906 Members Portal</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-100">
            A private home for council minutes, documents, announcements, photographs,
            calendars, and the history of St. Peter Council 12906.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-600">
              Grand Knight's Message
            </p>
            <h2 className="mt-4 text-3xl font-black text-blue-950">Welcome to the Members Portal</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Brother Knights, this portal is designed to keep our council connected and
              informed. Please check back for meeting minutes, upcoming service projects,
              announcements, and other council information.
            </p>
            <p className="mt-6 font-black text-blue-950">Gerald Nuss, Grand Knight</p>
          </div>

          <div className="rounded-3xl bg-yellow-400 p-8 text-blue-950 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em]">Next General Meeting</p>
            <h2 className="mt-4 text-3xl font-black">Second Tuesday</h2>
            <p className="mt-4 text-lg font-bold">St. Mary's Hall</p>
            <div className="mt-6 grid gap-3">
              <p><strong>6:30 PM</strong> — Rosary</p>
              <p><strong>6:50 PM</strong> — Meal</p>
              <p><strong>7:05 PM</strong> — General Membership Meeting</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portalSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden="true" className="text-4xl">{section.icon}</span>
              <h2 className="mt-5 text-2xl font-black text-blue-950">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.description}</p>
              <span className="mt-5 inline-block font-black text-blue-700">Open section →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
