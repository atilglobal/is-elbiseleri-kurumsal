import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="product-card group flex h-full flex-col bg-white shadow-[var(--shadow-card)]">
      <Link
        href={`/urunlerimiz/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden bg-mist"
      >
        <Image
          src={product.image}
          alt={`${product.name} ürün fotoğrafı`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
          priority={priority}
        />
        <span className="absolute left-4 top-4 bg-white px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy">
          {product.code}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{product.summary}</p>
        <Link
          href={`/urunlerimiz/${product.id}`}
          className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy"
        >
          Ürün detayını incele
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full border border-mist transition-colors group-hover:border-accent group-hover:bg-accent"
          >
            ↗
          </span>
        </Link>
      </div>
    </article>
  );
}
