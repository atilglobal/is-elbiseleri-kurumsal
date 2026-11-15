import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company } from "@/data/company";
import { categorySlugFromName, getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Ürün bulunamadı" };
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const categorySlug = categorySlugFromName(product.category);
  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const message = `Merhaba, ${company.brandName} kataloğundan ${product.name} (${product.code}) hakkında görüşmek istiyorum.`;

  return (
    <article>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <ProductGallery name={product.name} images={product.gallery} />
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-blue">
            <Link
              href={categorySlug ? `/urunlerimiz/kategori/${categorySlug}` : "/urunlerimiz"}
              className="hover:text-navy"
            >
              {product.category}
            </Link>
            {" · "}
            {product.code}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-none text-navy md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            {product.description}
          </p>
          <dl className="mt-8 grid gap-4 border-y border-mist py-6 sm:grid-cols-2">
            <div>
              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                Model
              </dt>
              <dd className="mt-1 text-navy">{product.model}</dd>
            </div>
            {product.fabric ? (
              <div>
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                  Kumaş
                </dt>
                <dd className="mt-1 text-navy">{product.fabric}</dd>
              </div>
            ) : null}
          </dl>
          <div className="mt-6">
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
              Teknik özellikler
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-navy">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
              Renk seçenekleri
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={`border px-3 py-2 text-sm ${
                    color === product.color
                      ? "border-navy bg-navy text-white"
                      : "border-mist bg-white text-navy"
                  }`}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
              Beden bilgileri
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="min-w-11 border border-mist bg-white px-3 py-2 text-center text-sm">
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/iletisim" className="btn btn-primary">
              İletişime geç
            </Link>
            <WhatsAppButton message={message} className="btn btn-line" />
          </div>
        </div>
      </section>
      {related.length > 0 ? (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold uppercase text-navy">
                Aynı gruptan modeller
              </h2>
              {categorySlug ? (
                <Link
                  href={`/urunlerimiz/kategori/${categorySlug}`}
                  className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy"
                >
                  Tüm {product.category.toLowerCase()}
                </Link>
              ) : null}
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
