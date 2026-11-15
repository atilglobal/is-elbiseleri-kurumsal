"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [current, setCurrent] = useState(0);
  const active = images[current] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <Image
          src={active}
          alt={`${name} görseli`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setCurrent(index)}
            className={`relative aspect-square overflow-hidden border ${
              current === index ? "border-navy" : "border-transparent"
            }`}
            aria-label={`${name} alternatif görsel ${index + 1}`}
            aria-pressed={current === index}
          >
            <Image src={src} alt="" fill className="object-cover object-top" sizes="160px" />
          </button>
        ))}
      </div>
    </div>
  );
}
