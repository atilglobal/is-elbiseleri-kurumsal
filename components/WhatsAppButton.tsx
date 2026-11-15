import Link from "next/link";
import { company, whatsappUrl } from "@/data/company";

export function WhatsAppButton({
  message,
  className = "btn btn-primary",
  label = "WhatsApp ile iletişim",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  const href = whatsappUrl(message);
  const external = Boolean(company.whatsapp);

  return (
    <Link
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}

export function WhatsAppFab() {
  return (
    <Link
      href={whatsappUrl()}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      aria-label="WhatsApp iletişim"
      target={company.whatsapp ? "_blank" : undefined}
      rel={company.whatsapp ? "noopener noreferrer" : undefined}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.5 2 2 6.37 2 11.76c0 1.72.46 3.4 1.34 4.88L2 22l5.54-1.45a10.3 10.3 0 0 0 4.5 1.05h.04c5.54 0 10.04-4.37 10.04-9.76C22.12 6.37 17.58 2 12.04 2Zm5.83 13.86c-.25.7-1.45 1.28-2.02 1.36-.52.07-1.18.1-1.9-.12-.44-.13-1-.32-1.73-.63-3.05-1.32-5.04-4.38-5.19-4.58-.16-.21-1.26-1.67-1.26-3.19 0-1.51.79-2.26 1.07-2.57.28-.3.61-.38.81-.38h.58c.18 0 .43-.07.67.51.25.6.85 2.07.92 2.22.08.15.13.32.02.52-.1.21-.16.33-.31.51-.16.18-.33.4-.47.54-.16.16-.32.33-.14.64.18.32.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.5 1.53.32.16.5.13.69-.08.18-.21.79-.92 1-.24.21.21 1.33.63 1.56.84.23.21.38.24.43.38.06.13-.06.7-.31 1.4Z" />
      </svg>
    </Link>
  );
}
