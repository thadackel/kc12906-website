import Link from "next/link";

export default function MembersSectionPage({
  eyebrow,
  title,
  description,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[60vh] bg-slate-100 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <Link href="/members" className="font-black text-blue-700 hover:text-blue-900">
          ← Back to Members Portal
        </Link>
        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-yellow-600">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-10">{children}</div>
        </div>
      </section>
    </main>
  );
}
