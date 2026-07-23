import MembersSectionPage from "@/components/MembersSectionPage";

export default function MembersDocumentsPage() {
  return (
    <MembersSectionPage eyebrow="Council Resources" title="Council Documents" description="Council bylaws, approved forms, planning documents, and other member resources will be organized here.">
      <div className="rounded-2xl bg-slate-100 p-6 text-slate-600">
        No council documents have been uploaded yet.
      </div>
    </MembersSectionPage>
  );
}
