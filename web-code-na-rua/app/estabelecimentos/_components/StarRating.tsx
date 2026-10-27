"use client";

import { useId, useState } from "react";

type Size = "sm" | "md" | "lg";

const PX: Record<Size, number> = { sm: 16, md: 20, lg: 32 };

function Star({
  fill,
  size,
  color,
  emptyColor,
  gradientId,
}: {
  fill: number; // 0 a 1
  size: number;
  color: string;
  emptyColor: string;
  gradientId: string;
}) {
  const clamped = Math.max(0, Math.min(1, fill));
  const pct = `${clamped * 100}%`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={pct} stopColor={color} />
          <stop offset={pct} stopColor={emptyColor} />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"
        fill={`url(#${gradientId})`}
        stroke={emptyColor}
        strokeWidth="0.5"
      />
    </svg>
  );
}

const STAR_ON = "var(--ml-star-on)";
const STAR_OFF = "var(--ml-star-off)";

export function StarRatingDisplay({
  value,
  size = "sm",
  showValue = false,
  className = "",
}: {
  value: number;
  size?: Size;
  showValue?: boolean;
  className?: string;
}) {
  const px = PX[size];
  const baseId = useId();
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span
        className="inline-flex items-center gap-0.5"
        role="img"
        aria-label={`${value.toFixed(1)} de 5 estrelas`}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            size={px}
            color={STAR_ON}
            emptyColor={STAR_OFF}
            fill={value - i}
            gradientId={`${baseId}-${i}`}
          />
        ))}
      </span>
      {showValue && (
        <span className="text-sm font-semibold text-text-primary tabular-nums">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}

const LABELS = ["Muito ruim", "Ruim", "Regular", "Bom", "Excelente"];

export function StarRatingInput({
  name,
  value,
  onChange,
  legendId,
}: {
  name: string;
  value: number;
  onChange: (v: number) => void;
  legendId?: string;
}) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  const px = PX.lg;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className="inline-flex items-center gap-1"
        role="radiogroup"
        aria-labelledby={legendId}
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`${n} ${n === 1 ? "estrela" : "estrelas"} — ${LABELS[n - 1]}`}
              className="rounded-md p-1 transition-transform hover:scale-110"
              onMouseEnter={() => setHover(n)}
              onFocus={() => setHover(n)}
              onBlur={() => setHover(0)}
              onClick={() => onChange(n)}
            >
              <Star
                size={px}
                color="var(--ml-star-on)"
                emptyColor="var(--ml-star-off)"
                fill={active >= n ? 1 : 0}
                gradientId={`${name}-${n}`}
              />
            </button>
          );
        })}
      </div>
      <span className="min-w-20 text-sm font-medium text-text-secondary">
        {active ? LABELS[active - 1] : "Toque nas estrelas"}
      </span>
    </div>
  );
}
