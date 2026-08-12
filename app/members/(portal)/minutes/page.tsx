import MembersSectionPage from "@/components/MembersSectionPage";

const minuteYears = [
  {
    year: 2026,
    months: [] as { month: string; href: string }[],
  },
];

export default function MeetingMinutesPage() {
  return (
    <MembersSectionPage
      eyebrow="Council Records"
      title="Meeting Minutes"
      description="Monthly council minutes will be organized here by year. New PDF files can be added as they are approved."
    >
      <div className="grid gap-6">
        {minuteYears.map((group) => (
          <section key={group.year} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-black text-blue-950">{group.year}</h2>
            {group.months.length ? (
              <div className="mt-5 grid gap-3">
                {group.months.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-xl bg-slate-100 p-4 font-black text-blue-700 hover:bg-yellow-100">
                    {item.month} {group.year} Minutes
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-4 rounded-xl bg-slate-100 p-5 text-slate-600">
                No approved minutes have been uploaded yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </MembersSectionPage>
  );
}
