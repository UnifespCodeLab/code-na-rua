import type { ReactNode } from "react";
import Link from "next/link";

type CardVariant = "emergency" | "occurrences" | "benefits" | "ratings";

const VARIANT_STYLES: Record<CardVariant, string> = {
  emergency:
    "border-red-300 bg-red-600 text-white shadow-[0_8px_20px_rgb(220_38_38/28%)] hover:bg-red-500 focus-visible:outline-white",
  occurrences:
    "border-orange-200 bg-orange-50 text-orange-950 shadow-sm hover:border-orange-400 hover:bg-orange-100 focus-visible:outline-orange-600",
  benefits:
    "border-yellow-300 bg-yellow-50 text-zinc-950 shadow-sm hover:border-yellow-500 hover:bg-yellow-100 focus-visible:outline-yellow-600",
  ratings:
    "border-blue-200 bg-blue-50 text-blue-950 shadow-sm hover:border-blue-400 hover:bg-blue-100 focus-visible:outline-blue-600",
};

export default function HomeFeatureCard({
  description,
  icon,
  label,
  route,
  variant,
}: {
  description: string;
  icon: ReactNode;
  label: string;
  route: string;
  variant: CardVariant;
}) {
  const featured = variant === "emergency";

  return (
    <Link
      className={
        "group flex w-full min-w-0 items-center gap-4 rounded-2xl border-2 p-4 transition-[background-color,border-color,transform,box-shadow] duration-150 focus-visible:outline-3 focus-visible:outline-offset-2 active:translate-y-0.5 " +
        (featured ? "min-h-28 " : "min-h-24 ") +
        VARIANT_STYLES[variant]
      }
      href={route}
    >
      <span
        className={
          "grid shrink-0 place-items-center rounded-full " +
          (featured
            ? "size-16 bg-white/18"
            : "size-14 bg-white shadow-sm")
        }
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={
            "block font-extrabold " + (featured ? "text-2xl" : "text-lg")
          }
        >
          {label}
        </span>
        <span
          className={
            "mt-1 block text-sm leading-snug " +
            (featured ? "text-white/90" : "text-zinc-600")
          }
        >
          {description}
        </span>
      </span>
      <span
        className="shrink-0 text-2xl font-bold transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      >
        ›
      </span>
    </Link>
  );
}
