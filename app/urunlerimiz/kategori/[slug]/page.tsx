import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { PageHero } from "@/components/PageHero";
import { categories, categoryFromSlug, getProductsByCategory } from "@/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryFromSlug(slug);
  if (!category) return { title: "Kategori bulunamadı" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryFromSlug(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.name);

  return (
    <>
      <PageHero
        eyebrow="Ürün grubu"
        title={category.name}
        description={category.description}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <CategoryNav activeSlug={category.slug} />
        <CategorySection
          category={category}
          products={items}
          showIntro={false}
        />
      </section>
    </>
  );
}
