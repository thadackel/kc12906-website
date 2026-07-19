"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = Array.from({ length: 25 }, (_, index) => ({
  src: `/images/events/bbq-slideshow/${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Council 12906 Chicken BBQ highlight ${index + 1}`,
}));

export default function BbqSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setCurrent((photo) => (photo + 1) % photos.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const showPhoto = (index: number) => {
    setCurrent((index + photos.length) % photos.length);
  };

  return (
    <section className="mt-10" aria-label="Chicken BBQ photo slideshow">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-600">
            April 19, 2026
          </p>
          <h2 className="mt-2 text-3xl font-black text-blue-950">
            BBQ Photo Slideshow
          </h2>
          <p className="mt-2 text-slate-600">
            Twenty-five varied highlights from Council 12906&apos;s Chicken BBQ.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="rounded-lg border-2 border-blue-950 px-5 py-2 font-black text-blue-950 transition hover:bg-blue-950 hover:text-white"
        >
          {paused ? "Resume Slideshow" : "Pause Slideshow"}
        </button>
      </div>

      <div
        className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className={`object-contain transition-opacity duration-700 ${
              index === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            priority={index === 0}
          />
        ))}

        <button
          type="button"
          onClick={() => showPhoto(current - 1)}
          aria-label="Previous BBQ photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-950/80 px-4 py-3 text-2xl font-black text-white shadow-lg transition hover:bg-blue-950"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => showPhoto(current + 1)}
          aria-label="Next BBQ photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-950/80 px-4 py-3 text-2xl font-black text-white shadow-lg transition hover:bg-blue-950"
        >
          ›
        </button>

        <div className="absolute bottom-4 right-4 rounded-full bg-blue-950/85 px-4 py-2 text-sm font-black text-white">
          {current + 1} / {photos.length}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Choose a BBQ photo">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => showPhoto(index)}
            aria-label={`Show BBQ photo ${index + 1}`}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "scale-125 bg-yellow-500" : "bg-blue-200 hover:bg-blue-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
