export type ProductCategory = "Üst Giyim" | "Dış Giyim" | "Teknik Giyim";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  code: string;
  model: string;
  color: string;
  summary: string;
  description: string;
  fabric?: string;
  features: string[];
  colors: string[];
  sizes: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
};

export const categories: {
  slug: string;
  name: ProductCategory;
  description: string;
  image: string;
}[] = [
  {
    slug: "ust-giyim",
    name: "Üst Giyim",
    description: "Polo, tişört, sweatshirt ve gabardin gömlek grupları.",
    image: "/products/premium-polo-yaka.webp",
  },
  {
    slug: "dis-giyim",
    name: "Dış Giyim",
    description: "Polar ceket, softshell mont ve polar yelek modelleri.",
    image: "/products/softshell-is-montu.webp",
  },
  {
    slug: "teknik-giyim",
    name: "Teknik Giyim",
    description: "İş pantolonu, reflektörlü yelek, tulum ve servis önlüğü.",
    image: "/products/is-tulumu.webp",
  },
];

export const products: Product[] = [
  {
    id: "premium-polo-yaka",
    name: "Premium Polo Yaka Tişört",
    category: "Üst Giyim",
    code: "WW-001",
    model: "Polo / Kısa kol",
    color: "Lacivert",
    summary: "Modern kesimli, kurumsal görünümü destekleyen polo yaka tişört.",
    description:
      "Kurumsal ekipler için sade ve düzenli bir siluet sunan kısa kollu polo yaka tişört. Günlük saha ve ofis kullanımında rahat bir duruş sağlar; logo nakışı veya baskı uygulamalarına uygundur.",
    fabric: "Pique dokulu pamuk karışımı",
    features: [
      "Düğmeli polo yaka",
      "Nefes alabilir yapı",
      "Kurumsal nakış ve baskıya uygun göğüs alanı",
      "Sık yıkamaya dayanıklı görünüm",
    ],
    colors: ["Lacivert", "Siyah", "Beyaz", "Gri"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    image: "/products/premium-polo-yaka.webp",
    gallery: [
      "/products/premium-polo-yaka.webp",
      "/products/uzun-kollu-polo.webp",
      "/products/bisiklet-yaka-tisort.webp",
    ],
    featured: true,
  },
  {
    id: "bisiklet-yaka-tisort",
    name: "Bisiklet Yaka Tişört",
    category: "Üst Giyim",
    code: "WW-002",
    model: "Bisiklet yaka",
    color: "Beyaz",
    summary: "Günlük kullanım için sade ve rahat tişört modeli.",
    description:
      "Sade bisiklet yaka formuyla iç giyim veya yazlık ekip kıyafeti olarak kullanılabilen temel tişört. Temiz yüzey alanı, kurumsal işaretleme için uygun bir zemin sunar.",
    fabric: "Pamuk karışımlı jersey",
    features: [
      "Yuvarlak yaka",
      "Hafif ve rahat kalıp",
      "Günlük ve katmanlı kullanıma uygun",
    ],
    colors: ["Beyaz", "Siyah", "Lacivert", "Gri"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/bisiklet-yaka-tisort.webp",
    gallery: [
      "/products/bisiklet-yaka-tisort.webp",
      "/products/premium-polo-yaka.webp",
      "/products/sardonlu-sweatshirt.webp",
    ],
  },
  {
    id: "uzun-kollu-polo",
    name: "Uzun Kollu Polo",
    category: "Üst Giyim",
    code: "WW-003",
    model: "Polo / Uzun kol",
    color: "Gri",
    summary: "Mevsim geçişlerinde kurumsal stile eşlik eden uzun kollu polo.",
    description:
      "Kısa kollu polo çizgisini serin mevsimlere taşıyan uzun kollu model. Saha ekipleri ve müşteri yüzü personel için düzenli, kurumsal bir görünüm sağlar.",
    fabric: "Pique dokulu pamuk karışımı",
    features: [
      "Uzun kol",
      "Polo yaka detayı",
      "Mevsim geçişine uygun ağırlık",
    ],
    colors: ["Gri", "Lacivert", "Siyah"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/uzun-kollu-polo.webp",
    gallery: [
      "/products/uzun-kollu-polo.webp",
      "/products/premium-polo-yaka.webp",
      "/products/gabardin-is-gomlegi.webp",
    ],
  },
  {
    id: "sardonlu-sweatshirt",
    name: "Şardonlu Sweatshirt",
    category: "Üst Giyim",
    code: "WW-009",
    model: "Bisiklet yaka / Sweatshirt",
    color: "Bej",
    summary: "Kışlık ekip kıyafetlerinde sade bir alternatif.",
    description:
      "İç yüzeyi yumuşak tutulan sweatshirt modeli. Depo, lojistik ve saha ekiplerinde polar altına veya üzerine katman olarak kullanılabilir.",
    fabric: "Şardonlu pamuk karışımı",
    features: [
      "Bisiklet yaka",
      "Yumuşak iç yüzey",
      "Katmanlı giyime uygun",
    ],
    colors: ["Bej", "Antrasit", "Lacivert"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/sardonlu-sweatshirt.webp",
    gallery: [
      "/products/sardonlu-sweatshirt.webp",
      "/products/fermuarli-polar-ceket.webp",
      "/products/bisiklet-yaka-tisort.webp",
    ],
  },
  {
    id: "gabardin-is-gomlegi",
    name: "Gabardin İş Gömleği",
    category: "Üst Giyim",
    code: "WW-012",
    model: "İş gömleği / Uzun kol",
    color: "Mavi",
    summary: "Kurumsal saha ekiplerine uygun klasik iş gömleği.",
    description:
      "Klasik yaka ve göğüs cep düzenine sahip gabardin iş gömleği. Teknik servis, üretim ve saha ekiplerinde düzenli bir kurumsal görünüm için tercih edilir.",
    fabric: "Gabardin dokuma",
    features: [
      "Uzun kol, düğmeli kapama",
      "Göğüs cep uygulamasına uygun kesim",
      "Dayanıklı dokuma yüzeyi",
    ],
    colors: ["Mavi", "Lacivert", "Bej"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/gabardin-is-gomlegi.webp",
    gallery: [
      "/products/gabardin-is-gomlegi.webp",
      "/products/uzun-kollu-polo.webp",
      "/products/is-tulumu.webp",
    ],
    featured: true,
  },
  {
    id: "fermuarli-polar-ceket",
    name: "Fermuarlı Polar Ceket",
    category: "Dış Giyim",
    code: "WW-004",
    model: "Polar / Fermuarlı",
    color: "Antrasit",
    summary: "Serin çalışma ortamları için rahat polar ceket modeli.",
    description:
      "Tam fermuarlı polar ceket, serin depo ve saha koşullarında ara katman olarak kullanılır. Hareketi kısıtlamayan kalıbı günlük iş temposuna uyum sağlar.",
    fabric: "Polar örme",
    features: [
      "Tam boy fermuar",
      "Isı tutan polar yapı",
      "Cep detaylı sade kesim",
    ],
    colors: ["Antrasit", "Lacivert", "Siyah"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/fermuarli-polar-ceket.webp",
    gallery: [
      "/products/fermuarli-polar-ceket.webp",
      "/products/polar-is-yelegi.webp",
      "/products/softshell-is-montu.webp",
    ],
  },
  {
    id: "softshell-is-montu",
    name: "Softshell İş Montu",
    category: "Dış Giyim",
    code: "WW-005",
    model: "Softshell / Kapüşonlu",
    color: "Lacivert",
    summary: "Teknik iş kıyafeti koleksiyonuna uygun dış giyim modeli.",
    description:
      "Rüzgar ve hafif yağışa karşı koruma sağlayan softshell mont. Lojistik, saha servisi ve açık alan ekiplerinde dış katman olarak kullanılmak üzere tasarlanmıştır.",
    fabric: "Softshell teknik kumaş",
    features: [
      "Kapüşonlu yapı",
      "Rüzgara dayanıklı dış yüzey",
      "Fermuarlı cep düzeni",
    ],
    colors: ["Lacivert", "Siyah", "Antrasit"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/softshell-is-montu.webp",
    gallery: [
      "/products/softshell-is-montu.webp",
      "/products/fermuarli-polar-ceket.webp",
      "/products/polar-is-yelegi.webp",
    ],
    featured: true,
  },
  {
    id: "polar-is-yelegi",
    name: "Polar İş Yeleği",
    category: "Dış Giyim",
    code: "WW-010",
    model: "Kolsuz / Fermuarlı",
    color: "Siyah",
    summary: "Hareket özgürlüğünü koruyan katmanlı giyim seçeneği.",
    description:
      "Kolsuz polar yelek, gövdeyi sıcak tutarken kol hareketini serbest bırakır. Depo, saha ve servis ekiplerinde ara katman olarak tercih edilir.",
    fabric: "Polar örme",
    features: [
      "Kolsuz kesim",
      "Fermuarlı kapama",
      "Katmanlı kombinasyona uygun",
    ],
    colors: ["Siyah", "Antrasit", "Lacivert"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/polar-is-yelegi.webp",
    gallery: [
      "/products/polar-is-yelegi.webp",
      "/products/fermuarli-polar-ceket.webp",
      "/products/reflektorlu-ikaz-yelegi.webp",
    ],
  },
  {
    id: "cok-cepli-is-pantolonu",
    name: "Çok Cepli İş Pantolonu",
    category: "Teknik Giyim",
    code: "WW-006",
    model: "Kargo / Çok cepli",
    color: "Antrasit",
    summary: "Çok cepli, pratik kullanım odaklı iş pantolonu.",
    description:
      "Araç ve malzeme taşımayı kolaylaştıran kargo cep düzenine sahip iş pantolonu. Üretim, inşaat destek ekipleri ve teknik servis kullanımına uygun pratik bir alt giyim seçeneğidir.",
    fabric: "Dayanıklı pamuk-polyester karışımı",
    features: [
      "Çoklu kargo cep",
      "Hareket rahatlığı sağlayan kalıp",
      "Saha kullanımına uygun dokuma",
    ],
    colors: ["Antrasit", "Lacivert", "Bej"],
    sizes: ["38", "40", "42", "44", "46", "48", "50"],
    image: "/products/cok-cepli-is-pantolonu.webp",
    gallery: [
      "/products/cok-cepli-is-pantolonu.webp",
      "/products/is-tulumu.webp",
      "/products/softshell-is-montu.webp",
    ],
  },
  {
    id: "reflektorlu-ikaz-yelegi",
    name: "Reflektörlü İkaz Yeleği",
    category: "Teknik Giyim",
    code: "WW-007",
    model: "İkaz / Reflektörlü",
    color: "Sarı",
    summary: "Görünürlüğü artırmaya yönelik reflektörlü iş yeleği örneği.",
    description:
      "Açık alan ve düşük ışık koşullarında görünürlüğü desteklemek üzere tasarlanmış ikaz yeleği. İnşaat, lojistik sahası ve teknik ekiplerde üst giyimin üzerine giyilebilir.",
    fabric: "File / dokuma karışımı, reflektör şeritli",
    features: [
      "Yüksek görünürlük rengi",
      "Reflektör şerit uygulaması",
      "Hafif ve üst giyim üzerine uygun",
    ],
    colors: ["Sarı", "Turuncu"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/reflektorlu-ikaz-yelegi.webp",
    gallery: [
      "/products/reflektorlu-ikaz-yelegi.webp",
      "/products/is-tulumu.webp",
      "/products/polar-is-yelegi.webp",
    ],
    featured: true,
  },
  {
    id: "is-tulumu",
    name: "Reflektörlü İş Tulumu",
    category: "Teknik Giyim",
    code: "WW-008",
    model: "Tulum / Reflektörlü",
    color: "Mavi",
    summary: "Tek parça teknik iş giyimi için tulum modeli.",
    description:
      "Tek parça tulum formu, üretim ve bakım alanlarında pratik bir koruma katmanı sunar. Reflektör detayları saha görünürlüğünü destekler.",
    fabric: "Dayanıklı teknik dokuma",
    features: [
      "Tek parça tulum kesimi",
      "Reflektör detayları",
      "Fermuarlı kapama",
    ],
    colors: ["Mavi", "Lacivert", "Antrasit"],
    sizes: ["S", "M", "L", "XL", "2XL"],
    image: "/products/is-tulumu.webp",
    gallery: [
      "/products/is-tulumu.webp",
      "/products/cok-cepli-is-pantolonu.webp",
      "/products/reflektorlu-ikaz-yelegi.webp",
    ],
    featured: true,
  },
  {
    id: "servis-onlugu",
    name: "Profesyonel Servis Önlüğü",
    category: "Teknik Giyim",
    code: "WW-011",
    model: "Önlük / Cepli",
    color: "Bej",
    summary: "Servis, mutfak ve hizmet alanları için önlük modeli.",
    description:
      "Restoran, otel servisi ve satış noktalarında kurumsal görünümü tamamlayan cepli servis önlüğü. Üst giyimin üzerine pratikçe giyilir.",
    fabric: "Sık dokuma pamuk karışımı",
    features: [
      "Boyun askılı kesim",
      "Ön cep düzeni",
      "Hizmet sektörü kullanımına uygun sade form",
    ],
    colors: ["Bej", "Siyah", "Lacivert"],
    sizes: ["Standart"],
    image: "/products/servis-onlugu.webp",
    gallery: [
      "/products/servis-onlugu.webp",
      "/products/premium-polo-yaka.webp",
      "/products/gabardin-is-gomlegi.webp",
    ],
    featured: true,
  },
];

export function getProduct(id: string) {
  return products.find((item) => item.id === id);
}

export function getProductsByCategory(name: ProductCategory) {
  return products.filter((item) => item.category === name);
}

export function featuredProducts() {
  return products.filter((item) => item.featured);
}

export function categoryFromSlug(slug?: string) {
  if (!slug) return undefined;
  return categories.find((item) => item.slug === slug);
}

export function categorySlugFromName(name: ProductCategory) {
  return categories.find((item) => item.name === name)?.slug;
}
