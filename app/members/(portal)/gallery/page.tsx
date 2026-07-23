import MembersSectionPage from "@/components/MembersSectionPage";

const albums = ["Charity", "Parish Events", "Family Events", "Council Meetings", "Degrees", "Youth Activities", "Special Events"];

export default function MembersGalleryPage() {
  return (
    <MembersSectionPage eyebrow="Council Life" title="Members Photo Gallery" description="Private council photographs can be organized into albums for members to view.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <div key={album} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-black text-blue-950">{album}</h2>
            <p className="mt-2 text-slate-600">No photographs uploaded yet.</p>
          </div>
        ))}
      </div>
    </MembersSectionPage>
  );
}
