import Link from "next/link";
import { CRITERIOS, mediaGeral, type Estabelecimento } from "../_data/mock";
import { StarRatingDisplay } from "./StarRating";

function corDaMedia(media: number): { label: string; className: string } {
  if (media >= 4) return { label: "Bem avaliado", className: "bg-[color:var(--ml-success)]/12 text-[color:var(--ml-success)]" };
  if (media >= 3) return { label: "Avaliação média", className: "bg-[color:var(--ml-attention)]/18 text-[color:var(--ml-alert)]" };
  return { label: "Precisa melhorar", className: "bg-[color:var(--ml-error)]/12 text-[color:var(--ml-error)]" };
}

export function ReviewCard({ item }: { item: Estabelecimento }) {
  const media = mediaGeral(item.mediaPorCriterio);
  const tag = corDaMedia(media);

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border-default bg-surface-primary p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-primary text-lg font-bold text-brand-contrast"
            aria-hidden="true"
          >
            {item.nome.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-tight text-text-primary">{item.nome}</h3>
            <p className="text-sm text-text-secondary">
              {item.categoria} · {item.bairro}
            </p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${tag.className}`}>
          {tag.label}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold tabular-nums text-text-primary">{media.toFixed(1)}</span>
        <div className="flex flex-col">
          <StarRatingDisplay value={media} size="md" />
          <span className="text-sm text-text-secondary">
            {item.totalAvaliacoes} {item.totalAvaliacoes === 1 ? "avaliação" : "avaliações"}
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border-default pt-4">
        {CRITERIOS.map((c) => (
          <div key={c.id} className="flex items-center justify-between gap-2">
            <dt className="text-sm text-text-secondary">{c.rotulo}</dt>
            <dd className="flex items-center gap-1.5">
              <StarRatingDisplay value={item.mediaPorCriterio[c.id]} size="sm" />
              <span className="text-sm font-semibold tabular-nums text-text-primary">
                {item.mediaPorCriterio[c.id].toFixed(1)}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <Link
        href={`/estabelecimentos/avaliar?estabelecimento=${item.id}`}
        className="mt-1 inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-primary-strong"
      >
        Avaliar este local
      </Link>
    </article>
  );
}
