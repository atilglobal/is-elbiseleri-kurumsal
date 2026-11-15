import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, navItems } from "@/data/company";
import { categories } from "@/data/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-6 text-sm leading-7 text-white/70">{company.description}</p>
          <p className="mt-4 text-xs leading-6 text-white/45">
            İletişim ve unvan alanları demo amaçlıdır; gerçek bilgiler sonradan
            güncellenecektir.
          </p>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Hızlı bağlantılar
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Ürün kategorileri
          </h2>
          <ul className="mt-5 space-y-3">
            {categories.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/urunlerimiz/kategori/${item.slug}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            İletişim
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>{company.legalName}</li>
            <li>{company.phoneDisplay}</li>
            <li>
              <a className="hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              {company.address}
              <br />
              {company.city}
            </li>
          </ul>
          <div className="mt-6 flex gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:justify-between lg:px-8">
          <p>
            © {year} {company.copyrightOwner}. Tüm hakları saklıdır.
          </p>
          <p>Kurumsal tanıtım demosu — dijital ürün kataloğu</p>
        </div>
      </div>
    </footer>
  );
}
