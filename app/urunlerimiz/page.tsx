import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { PageHero } from "@/components/PageHero";
import { categories, categoryFromSlug, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünlerimiz",
  description:
    "Üst giyim, dış giyim ve teknik giyim gruplarında profesyonel iş kıyafeti kataloğu.",
};

export default async function UrunlerPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const selected = categoryFromSlug(kategori);
  if (selected) {
    redirect(`/urunlerimiz/kategori/${selected.slug}`);
  }

  return (
    <>
      <PageHero
        eyebrow="Dijital katalog"
        title="Ürünlerimiz"
        description="Modeller üç ana giyim grubunda düzenlenmiştir. Bu bölüm bir e-ticaret mağazası değildir; fiyat ve sepet bulunmaz."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <CategoryNav />
        <div className="space-y-20">
          {categories.map((category) => (
            <CategorySection
              key={category.slug}
              category={category}
              products={getProductsByCategory(category.name)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
