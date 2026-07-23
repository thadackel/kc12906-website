import MembersSectionPage from "@/components/MembersSectionPage";

const archiveAreas = [
  "Council charter and founding history",
  "Past Grand Knights and officers by year",
  "Knight and Family of the Month",
  "Awards and recognitions",
  "Historic photographs",
  "Major charitable accomplishments",
];

export default function CouncilArchivePage() {
  return (
    <MembersSectionPage eyebrow="Our History" title="Council Archive" description="This section will preserve the history, leadership, awards, and accomplishments of Council 12906 for future Brother Knights.">
      <div className="grid gap-4 sm:grid-cols-2">
        {archiveAreas.map((area) => (
          <div key={area} className="rounded-2xl bg-slate-100 p-6 font-bold text-blue-950">{area}</div>
        ))}
      </div>
    </MembersSectionPage>
  );
}
