export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-title mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}
