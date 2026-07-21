"use client";

import { useEffect, useState } from "react";

type Base64ImageProps = {
  source: string;
  alt: string;
  className?: string;
};

export default function Base64Image({ source, alt, className = "" }: Base64ImageProps) {
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    let active = true;

    fetch(source, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${source}`);
        return response.text();
      })
      .then((base64) => {
        if (active) setSrc(`data:image/jpeg;base64,${base64.trim()}`);
      })
      .catch(() => {
        if (active) setSrc("");
      });

    return () => {
      active = false;
    };
  }, [source]);

  if (!src) {
    return <div className={`bg-slate-100 ${className}`} aria-hidden="true" />;
  }

  return <img src={src} alt={alt} className={className} />;
}
