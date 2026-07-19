"use client";

import { useEffect, useRef, useState } from "react";

const selectedPhotoFiles = [
  "001",
  "013",
  "016",
  "024",
  "026",
  "030",
  "033",
  "035",
  "038",
  "043",
  "046",
  "051",
  "056",
  "071",
  "074",
  "076",
  "080",
  "085",
  "091",
  "099",
  "101",
  "103",
  "107",
  "111",
  "115",
];

const photos = selectedPhotoFiles.map((file, index) => ({
  src: `/images/events/bbq-slideshow/${file}.jpg`,
  alt: `Council 12906 Chicken BBQ highlight ${index + 1}`,
}));

export default function BbqSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const showPhoto = (index: number) => {
    setCurrent((index + photos.length) % photos.length);
  };

  useEffect(() => {
    if (paused || lightboxOpen) return;

    const timer = window.setInterval(() => {
      setCurrent((photo) => (photo + 1) % photos.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [paused, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") showPhoto(current - 1);
      if (event.key === "ArrowRight") showPhoto(current + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, lightboxOpen]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;

    if (Math.abs(distance) > 50) {
      showPhoto(distance > 0 ? current - 1 : current + 1);
    }

    touchStartX.current = null;
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
            25 selected highlights from Council 12906&apos;s Chicken BBQ.
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
        className="relative mt-6 aspect-[16/9] touch-pan-y overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Open BBQ photo ${index + 1} full screen`}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index < 2 ? "eager" : "lazy"}
              className={`h-full w-full object-contain transition-transform duration-[4000ms] ease-linear ${
                index === current ? "scale-105" : "scale-100"
              }`}
            />
          </button>
        ))}

        <button
          type="button"
          onClick={() => showPhoto(current - 1)}
          aria-label="Previous BBQ photo"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-950/80 px-4 py-3 text-2xl font-black text-white shadow-lg transition hover:bg-blue-950"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => showPhoto(current + 1)}
          aria-label="Next BBQ photo"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-950/80 px-4 py-3 text-2xl font-black text-white shadow-lg transition hover:bg-blue-950"
        >
          ›
        </button>

        <div className="absolute bottom-4 right-4 z-10 rounded-full bg-blue-950/85 px-4 py-2 text-sm font-black text-white">
          {current + 1} / {photos.length}
        </div>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2" aria-label="Choose a BBQ photo">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => showPhoto(index)}
            aria-label={`Show BBQ photo ${index + 1}`}
            className={`relative h-16 w-24 flex-none overflow-hidden rounded-lg border-2 transition ${
              index === current
                ? "scale-105 border-yellow-500"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={photo.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen BBQ photo"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close full-screen photo"
            className="absolute right-5 top-5 z-20 rounded-full bg-white/15 px-4 py-2 text-3xl font-bold text-white hover:bg-white/25"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPhoto(current - 1);
            }}
            aria-label="Previous full-screen photo"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-3xl font-bold text-white hover:bg-white/25"
          >
            ‹
          </button>

          <img
            src={photos[current].src}
            alt={photos[current].alt}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPhoto(current + 1);
            }}
            aria-label="Next full-screen photo"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 px-4 py-3 text-3xl font-bold text-white hover:bg-white/25"
          >
            ›
          </button>

          <div className="absolute bottom-5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
            {current + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
