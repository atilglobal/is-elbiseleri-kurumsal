import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl font-semibold uppercase text-navy">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4 text-muted">Aradığınız bağlantı katalogda yer almıyor.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
