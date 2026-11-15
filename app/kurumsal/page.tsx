import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Kurumsal",
  description: `${company.brandName} kurumsal tanıtım, vizyon, misyon ve çalışma prensipleri.`,
};

const values = [
  {
    title: "Dürüst temsil",
    text: "Doğrulanmamış kapasite, sertifika veya ihracat iddiası kullanılmaz. Bilgi, hazır olduğunda eklenir.",
  },
  {
    title: "Ölçülü tasarım",
    text: "Görsel dil sakin, endüstriyel ve kurumsal durur. Renkler kontrollü, tipografi nettir.",
  },
  {
    title: "Kullanım odaklı katalog",
    text: "Site bir vitrindir. Karar, ürünü incelemek ve ardından iletişime geçmek üzerine kuruludur.",
  },
  {
    title: "Ekip görünümü",
    text: "Amaç, farklı görevlerdeki ekiplerin aynı dilde, düzenli ve güven veren bir kıyafet setine sahip olmasıdır.",
  },
];

export default function KurumsalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Firma kimliği"
        description="Bu sayfa, henüz kesinleşmemiş unvan ve iletişim bilgilerinin sonradan eklenebileceği sade bir kurumsal çerçeve sunar."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-blue">
            Tanıtım
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase text-navy">
            {company.brandName}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{company.about}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
            Faaliyet alanı; üst giyim, dış giyim ve teknik giyim gruplarında iş
            kıyafetleri ile kurumsal personel giyimidir. Kuruluş yılı, üretim
            ölçeği veya tesis bilgisi bu demoda yer almaz.
          </p>
        </div>
        <aside className="h-fit bg-navy p-8 text-white">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-accent">Not</p>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Gerçek unvan, adres ve yetkili iletişim bilgileri{" "}
            <code className="text-accent">data/company.ts</code> dosyasından
            yönetilir.
          </p>
        </aside>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:px-8">
          <article className="border-t-2 border-navy pt-6">
            <h2 className="font-display text-3xl font-semibold uppercase text-navy">
              Vizyonumuz
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              İş kıyafetini yalnızca bir koruma katmanı olarak değil, kurumun saha
              dilinin parçası olarak konumlandırmak. Ekiplerin her ortamda düzenli
              ve tanınır durmasını sağlamak.
            </p>
          </article>
          <article className="border-t-2 border-navy pt-6">
            <h2 className="font-display text-3xl font-semibold uppercase text-navy">
              Misyonumuz
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Farklı sektörlerin kullanım senaryolarına uygun, sade ve seçilebilir
              bir ürün vitrini sunmak; karar sürecini katalog ve kurumsal görüşmeyle
              netleştirmek.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-4xl font-semibold uppercase text-navy">
          Kalite anlayışımız
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
          Kalite, abartılı vaatlerle değil kumaş-kesim-kullanım uyumuyla anlatılır.
          Ürün kartlarında mevcut teknik bilgiler paylaşılır; belgelenemeyen iddia
          eklenmez. Canlı ortamda kumaş, gramaj ve bakım bilgileri ürün bazında
          genişletilebilir.
        </p>
        <div className="mt-12">
          <h3 className="font-display text-3xl font-semibold uppercase text-navy">
            Çalışma prensiplerimiz
          </h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "İhtiyacı dinlemek ve doğru ürün grubunu işaretlemek.",
              "Katalogda şeffaf olmak; fiyat ve stok göstermemek.",
              "Görüşmeyi kurumsal iletişim üzerinden sürdürmek.",
            ].map((item, index) => (
              <li key={item} className="bg-white p-6">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm leading-7 text-navy">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-4xl font-semibold uppercase">
            Kurumsal değerlerimiz
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="border-t border-white/15 pt-5">
                <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
