"use client";

import { useId } from "react";

export type SortKey = "melhores" | "piores" | "mais_avaliados" | "nome";

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "melhores", label: "Melhor avaliados" },
  { value: "piores", label: "Pior avaliados" },
  { value: "mais_avaliados", label: "Mais avaliados" },
  { value: "nome", label: "Nome (A–Z)" },
];

export function SortSelect({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm font-medium text-text-secondary">
        Ordenar por
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="appearance-none rounded-md border border-border-default bg-surface-primary py-2 pl-3 pr-9 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-brand-secondary"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
