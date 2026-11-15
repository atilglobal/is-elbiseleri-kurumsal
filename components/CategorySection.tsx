import { ProductCard } from "@/components/ProductCard";
import type { categories } from "@/data/products";
import type { Product } from "@/data/products";

type Category = (typeof categories)[number];

export function CategorySection({
  category,
  products,
  showIntro = true,
}: {
  category: Category;
  products: Product[];
  showIntro?: boolean;
}) {
  return (
    <section id={category.slug} className="scroll-mt-32">
      {showIntro ? (
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-mist pb-6">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
              Katalog grubu
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight text-navy md:text-4xl">
              {category.name}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              {category.description}
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            {products.length} model
          </p>
        </div>
      ) : (
        <p className="mb-6 text-xs uppercase tracking-[0.16em] text-muted">
          {products.length} model
        </p>
      )}
      <div className={`${showIntro ? "mt-8" : ""} grid gap-6 sm:grid-cols-2 xl:grid-cols-3`}>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}
