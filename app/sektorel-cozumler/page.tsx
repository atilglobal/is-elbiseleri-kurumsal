import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Sektörel Çözümler",
  description:
    "Sanayi, inşaat, lojistik, otelcilik, hizmet, teknik servis ve sağlık alanlarında potansiyel iş giyim kullanımları.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kullanım alanları"
        title="Sektörel çözümler"
        description="Bu başlıklar firmanın kesin müşteri portföyü değildir. Ürünlerin farklı iş alanlarında nasıl değerlendirilebileceğine dair örneklerdir."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8">
          {sectors.map((sector, index) => (
            <article
              key={sector.slug}
              className="grid overflow-hidden bg-white shadow-[var(--shadow-card)] md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[260px]">
                <Image
                  src={sector.image}
                  alt={`${sector.name} kullanım görseli`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold uppercase text-navy">
                  {sector.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{sector.description}</p>
                <Link href="/urunlerimiz" className="btn btn-line mt-7 w-fit">
                  Katalogu incele
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
