export default function BbqSlideshow() {
  return (
    <section className="mt-10" aria-label="Chicken BBQ photo slideshow">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-600">
          April 19, 2026
        </p>
        <h2 className="mt-2 text-3xl font-black text-blue-950">BBQ Photo Slideshow</h2>
        <p className="mt-2 text-slate-600">
          Twenty-five varied highlights from Council 12906&apos;s Chicken BBQ, rotating every 2.5 seconds.
        </p>
      </div>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
        <img
          src="/api/bbq-slideshow"
          alt="Slideshow of Council 12906 Knights preparing and serving chicken barbecue"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-blue-950/85 px-4 py-2 text-sm font-black text-white">
          25 Photos
        </div>
      </div>
    </section>
  );
}
