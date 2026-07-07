export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">

      <h2 className="text-3xl font-bold text-blue-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-lg text-gray-600">
          {subtitle}
        </p>
      )}

    </div>
  );
}