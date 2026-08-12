import MembersSectionPage from "@/components/MembersSectionPage";

export default function MembersAnnouncementsPage() {
  return (
    <MembersSectionPage eyebrow="Council Communications" title="Member Announcements" description="Volunteer needs, prayer requests, reminders, and important council notices will be posted here.">
      <div className="rounded-2xl bg-slate-100 p-6 text-slate-600">
        There are no current member announcements.
      </div>
    </MembersSectionPage>
  );
}
