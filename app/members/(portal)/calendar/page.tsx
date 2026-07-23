import MembersSectionPage from "@/components/MembersSectionPage";

const recurringEvents = [
  ["General Membership Meeting", "Second Tuesday — 6:30 PM Rosary, 6:50 PM meal, 7:05 PM meeting"],
  ["Location", "St. Mary's Hall"],
];

export default function MembersCalendarPage() {
  return (
    <MembersSectionPage eyebrow="Members Schedule" title="Council Calendar" description="Council meetings, parish activities, service projects, and member events will be maintained here.">
      <div className="grid gap-4">
        {recurringEvents.map(([title, detail]) => (
          <div key={title} className="rounded-2xl bg-slate-100 p-6">
            <h2 className="text-xl font-black text-blue-950">{title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{detail}</p>
          </div>
        ))}
      </div>
    </MembersSectionPage>
  );
}
