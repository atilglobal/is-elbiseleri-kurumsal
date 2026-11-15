import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company, mapsEmbedSrc } from "@/data/company";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${company.brandName} iletişim formu, telefon, e-posta ve harita alanı.`,
};

export default function ContactPage() {
  const map = mapsEmbedSrc();

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Görüşelim"
        description="Firma adı, telefon, e-posta ve adres alanları örnek tutulmuştur. Gerçek bilgiler data/company.ts üzerinden tek noktadan güncellenir."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <ul className="space-y-4">
            {[
              ["Firma adı", company.legalName],
              ["Telefon", company.phoneDisplay],
              ["E-posta", company.email],
              ["Adres", `${company.address}, ${company.city}`],
            ].map(([label, value]) => (
              <li key={label} className="border-b border-mist pb-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
                  {label}
                </p>
                <p className="mt-1 text-lg text-navy">{value}</p>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="btn btn-primary mt-8" />
          <p className="mt-4 text-xs leading-6 text-muted">
            WhatsApp numarası henüz tanımlanmadıysa düğme iletişim sayfasında kalır.
            Numara eklendiğinde yönlendirme otomatik açılır.
          </p>
          <div className="mt-8 min-h-[280px] overflow-hidden border border-mist bg-mist">
            {map ? (
              <iframe
                title="Firma konumu"
                src={map}
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-[280px] place-items-center px-6 text-center">
                <p className="max-w-sm text-sm leading-7 text-muted">
                  Google Maps alanı hazır. Adres kesinleştiğinde{" "}
                  <code>company.mapsQuery</code> değeri doldurulunca harita burada
                  görüntülenir.
                </p>
              </div>
            )}
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
