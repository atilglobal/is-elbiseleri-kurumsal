"use client";

import Link from "next/link";
import { categories } from "@/data/products";
import { cx } from "@/lib/utils";

export function CategoryNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav
      className="sticky top-[4.25rem] z-30 -mx-5 mb-12 border-y border-mist bg-paper/95 px-5 py-3 backdrop-blur lg:-mx-0 lg:px-0"
      aria-label="Ürün kategorileri"
    >
      <div className="flex flex-wrap gap-2">
        <Link
          href="/urunlerimiz"
          className={cx(
            "rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors",
            !activeSlug
              ? "border-navy bg-navy text-white"
              : "border-mist bg-white text-navy hover:border-navy",
          )}
          aria-current={!activeSlug ? "page" : undefined}
        >
          Tüm gruplar
        </Link>
        {categories.map((category) => {
          const active = activeSlug === category.slug;
          return (
            <Link
              key={category.slug}
              href={`/urunlerimiz/kategori/${category.slug}`}
              className={cx(
                "rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors",
                active
                  ? "border-navy bg-navy text-white"
                  : "border-mist bg-white text-navy hover:border-navy",
              )}
              aria-current={active ? "page" : undefined}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
