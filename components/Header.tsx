"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, navItems } from "@/data/company";
import { cx } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cx("header-shell sticky top-0 z-50", scrolled && "is-scrolled")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Ana menü"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                  active ? "text-navy" : "text-muted hover:text-navy",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <Link href="/iletisim" className="btn btn-primary hidden sm:inline-flex">
            İletişim
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-navy/15 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={cx("h-px bg-navy transition", open && "translate-y-1.5 rotate-45")} />
              <span className={cx("h-px bg-navy transition", open && "opacity-0")} />
              <span className={cx("h-px bg-navy transition", open && "-translate-y-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-mist bg-paper px-5 py-5 lg:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobil menü">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-mist py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn btn-primary mt-5 w-full">
            {company.phoneDisplay}
          </Link>
        </nav>
      </div>
    </header>
  );
}
