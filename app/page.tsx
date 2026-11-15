import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { company } from "@/data/company";
import { categories, featuredProducts } from "@/data/products";
import { sectors } from "@/data/sectors";

const principles = [
  {
    title: "Doğru ürün seçimi",
    text: "Katalog, ekiplerin gerçek çalışma koşullarına göre model karşılaştırmayı kolaylaştırır.",
  },
  {
    title: "Kurumsal bütünlük",
    text: "Renk, kesim ve işaretleme alanları aynı dilde duran bir ekip görünümü için kurgulanır.",
  },
  {
    title: "Net iletişim",
    text: "Fiyat ve sipariş ekranı yoktur. İhtiyaç netleşince görüşme kurumsal iletişim üzerinden yürür.",
  },
];

export default function Home() {
  const featured = featuredProducts();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-8">
          <div className="reveal max-w-xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-accent">
              Kurumsal iş giyim
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-semibold uppercase leading-[0.9] tracking-tight">
              İşinize değer katan profesyonel iş kıyafetleri
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/70">
              Farklı sektörlerin ihtiyaçlarına yönelik iş kıyafetleri ve kurumsal
              personel giyim çözümlerini keşfedin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/urunlerimiz" className="btn btn-primary bg-white text-navy hover:bg-accent hover:text-navy">
                Ürünlerimizi Keşfedin
              </Link>
              <Link href="/kurumsal" className="btn btn-ghost">
                Bizi Tanıyın
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[520px]">
            <div className="absolute left-[28%] top-[6%] z-20 h-[74%] w-[48%] overflow-hidden border-[6px] border-white/90 shadow-2xl">
              <Image
                src="/products/premium-polo-yaka.webp"
                alt="Polo yaka iş kıyafeti giyen model"
                fill
                priority
                sizes="280px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-[4%] left-[2%] z-30 h-[56%] w-[36%] overflow-hidden border-[6px] border-white/90 shadow-xl">
              <Image
                src="/products/servis-onlugu.webp"
                alt="Servis önlüğü giyen model"
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute right-0 top-0 z-10 h-[46%] w-[36%] overflow-hidden border-[6px] border-white/90">
              <Image
                src="/products/softshell-is-montu.webp"
                alt="Softshell iş montu giyen model"
                fill
                sizes="220px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-[12%] right-[2%] z-40 grid h-24 w-24 place-items-center bg-accent text-center text-navy">
              <div>
                <b className="block font-display text-lg leading-none">12</b>
                <small className="text-[0.58rem] font-bold uppercase tracking-[0.12em]">
                  Model
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted lg:px-8">
          <span>Üst giyim</span>
          <span>Dış giyim</span>
          <span>Teknik giyim</span>
          <span>Kurumsal katalog</span>
          <span>Sektörel kullanım</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
            01 / Kategoriler
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-none text-navy md:text-5xl">
            Koleksiyon grupları
          </h2>
          <p className="text-muted leading-7">
            Ürünler üç ana grupta düzenlenmiştir. Katalog bir vitrindir; satın alma
            veya sepet adımı içermez.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/urunlerimiz/kategori/${category.slug}`}
              className="group relative min-h-[280px] overflow-hidden bg-navy text-white"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold uppercase">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-white/75">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
                02 / Öne çıkanlar
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold uppercase text-navy md:text-5xl">
                Seçilmiş modeller
              </h2>
            </div>
            <Link href="/urunlerimiz" className="btn btn-line">
              Tüm katalog
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[360px] overflow-hidden bg-mist">
          <Image
            src="/products/reflektorlu-ikaz-yelegi.webp"
            alt="Reflektörlü iş yeleği"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center bg-navy px-8 py-12 text-white md:px-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
            03 / Kurumsal
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none md:text-5xl">
            {company.brandName} yaklaşımı
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">{company.about}</p>
          <Link href="/kurumsal" className="btn btn-ghost mt-8 w-fit">
            Kurumsal kimlik
          </Link>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
            04 / Kullanım alanları
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold uppercase text-navy md:text-5xl">
            Sektörel kullanım
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Aşağıdaki alanlar kesin müşteri portföyü değil; ürünlerin potansiyel
            kullanım örnekleridir.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.slice(0, 7).map((sector) => (
              <Link
                key={sector.slug}
                href="/sektorel-cozumler"
                className="border border-mist p-5 transition hover:border-navy"
              >
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {sector.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{sector.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
          05 / Kalite ve hizmet
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold uppercase text-navy md:text-5xl">
          Sade, ölçülü, net
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {principles.map((item, index) => (
            <article key={item.title} className="border-t border-navy pt-6">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              06 / İletişim
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase md:text-5xl">
              Katalogdan sonra konuşalım
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Ürün grubu, adet ve işaretleme ihtiyaçlarınız netleştiğinde kurumsal
              iletişim kanallarından görüşme başlatabilirsiniz.
            </p>
          </div>
          <Link href="/iletisim" className="btn bg-accent text-navy hover:bg-white">
            İletişime geçin
          </Link>
        </div>
      </section>
    </>
  );
}
