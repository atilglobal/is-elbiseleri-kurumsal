"use client";

import { FormEvent, useState } from "react";
import { products } from "@/data/products";

type Status = "idle" | "demo";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("demo");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
      noValidate={false}
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-blue">
        Görüşme talebi
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-navy">Bize yazın</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        Form backend’e bağlı değildir. Gönderim denemesi demo modunda kalır; gerçek
        bir mesaj iletildiğini iddia etmez.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy">
          Ad soyad
          <input
            required
            name="name"
            minLength={2}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 min-h-12 w-full border border-mist bg-paper px-3 text-sm font-medium tracking-normal"
          />
        </label>
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy">
          Firma
          <input
            name="company"
            className="mt-2 min-h-12 w-full border border-mist bg-paper px-3 text-sm font-medium tracking-normal"
          />
        </label>
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy">
          E-posta
          <input
            required
            type="email"
            name="email"
            className="mt-2 min-h-12 w-full border border-mist bg-paper px-3 text-sm font-medium tracking-normal"
          />
        </label>
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy">
          Telefon
          <input
            required
            name="phone"
            className="mt-2 min-h-12 w-full border border-mist bg-paper px-3 text-sm font-medium tracking-normal"
          />
        </label>
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy sm:col-span-2">
          İlgilendiğiniz ürün
          <select
            name="product"
            className="mt-2 min-h-12 w-full border border-mist bg-paper px-3 text-sm font-medium tracking-normal"
            defaultValue=""
          >
            <option value="">Genel katalog talebi</option>
            {products.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-navy sm:col-span-2">
          Mesajınız
          <textarea
            required
            name="message"
            rows={5}
            className="mt-2 w-full border border-mist bg-paper px-3 py-3 text-sm font-medium tracking-normal"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-6">
        Demo olarak ilet
      </button>
      {status === "demo" ? (
        <div
          className="mt-5 border border-accent/40 bg-[#fff8ee] px-4 py-3 text-sm leading-6 text-navy"
          role="status"
        >
          <strong>Demo modu:</strong> {name || "Talebiniz"} için form içeriği bu
          tarayıcıda doğrulandı, ancak herhangi bir sunucuya veya e-posta adresine
          gönderilmedi. Canlı ortamda bu alan kurumsal iletişim kanalına bağlanacaktır.
        </div>
      ) : null}
    </form>
  );
}
