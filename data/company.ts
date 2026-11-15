export const company = {
  brandName: "FORMA",
  legalName: "[Firma unvanı eklenecek]",
  tagline: "Profesyonel iş kıyafetleri",
  description:
    "Farklı sektörlerin ihtiyaçlarına yönelik iş kıyafetleri ve kurumsal personel giyim çözümleri.",
  about:
    "FORMA, iş kıyafetleri ve kurumsal personel giyimi alanında faaliyet gösteren bir marka demosudur. Bu sitedeki unvan, iletişim ve adres alanları henüz kesinleşmemiştir; gerçek firma bilgileri tek bir yapılandırma dosyasından kolayca güncellenebilir.",
  phoneDisplay: "[Telefon numarası]",
  phoneHref: "",
  email: "info@ornek-firma.com",
  address: "[Açık adres eklenecek]",
  city: "[Şehir / İlçe]",
  whatsapp: "" as string,
  mapsQuery: "" as string,
  hours: "Hafta içi, randevu ile görüşme",
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  copyrightOwner: "FORMA",
} as const;

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/urunlerimiz", label: "Ürünlerimiz" },
  { href: "/sektorel-cozumler", label: "Sektörel Çözümler" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function whatsappUrl(text?: string) {
  if (!company.whatsapp) return "/iletisim";
  const base = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mapsEmbedSrc() {
  if (!company.mapsQuery) return "";
  return `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&output=embed`;
}
