"use client";

import { useEffect, useState } from "react";

type Base64PhotoProps = {
  source: string;
  alt: string;
  fit?: "cover" | "contain";
};

export default function Base64Photo({ source, alt, fit = "cover" }: Base64PhotoProps) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let active = true;

    fetch(source)
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${source}`);
        return response.text();
      })
      .then((data) => {
        if (active) setSrc(`data:image/webp;base64,${data.trim()}`);
      })
      .catch(() => {
        if (active) setSrc("");
      });

    return () => {
      active = false;
    };
  }, [source]);

  if (!src) {
    return <div className="h-full w-full animate-pulse bg-slate-200" aria-label={`Loading ${alt}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
      loading="lazy"
    />
  );
}
