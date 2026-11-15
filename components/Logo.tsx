import Link from "next/link";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label={`${company.brandName} ana sayfa`}
    >
      <span
        className={cx(
          "grid h-11 w-11 place-items-center border text-[0.95rem] font-semibold tracking-[0.18em]",
          inverted
            ? "border-white/30 bg-white/8 text-white"
            : "border-navy bg-navy text-white",
        )}
      >
        FR
      </span>
      {compact ? null : (
        <span className="leading-tight">
          <span
            className={cx(
              "block font-display text-[1.15rem] font-semibold tracking-[0.22em]",
              inverted ? "text-white" : "text-navy",
            )}
          >
            {company.brandName}
          </span>
          <span
            className={cx(
              "block text-[0.62rem] font-medium uppercase tracking-[0.22em]",
              inverted ? "text-white/70" : "text-muted",
            )}
          >
            İş Giyim
          </span>
        </span>
      )}
    </Link>
  );
}
