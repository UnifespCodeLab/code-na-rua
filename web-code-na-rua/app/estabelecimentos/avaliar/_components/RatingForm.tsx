"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import {
  CRITERIOS,
  ESTABELECIMENTOS,
  type CriterioId,
  type NotasPorCriterio,
} from "../../_data/mock";
import { StarRatingInput, StarRatingDisplay } from "../../_components/StarRating";

const NOTAS_INICIAIS: NotasPorCriterio = {
  tempo: 0,
  respeito: 0,
  organizacao: 0,
  estrutura: 0,
};

const LIMITE_COMENTARIO = 300;

export function RatingForm({ estabelecimentoInicial }: { estabelecimentoInicial?: string }) {
  const selectId = useId();
  const comentarioId = useId();

  const [estabelecimentoId, setEstabelecimentoId] = useState(
    estabelecimentoInicial && ESTABELECIMENTOS.some((e) => e.id === estabelecimentoInicial)
      ? estabelecimentoInicial
      : "",
  );
  const [notas, setNotas] = useState<NotasPorCriterio>(NOTAS_INICIAIS);
  const [comentario, setComentario] = useState("");
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const estabelecimento = ESTABELECIMENTOS.find((e) => e.id === estabelecimentoId);

  const preenchidas = (Object.values(notas) as number[]).filter((n) => n > 0).length;
  const media = useMemo(() => {
    const vals = Object.values(notas) as number[];
    const ativos = vals.filter((v) => v > 0);
    if (ativos.length === 0) return 0;
    return ativos.reduce((a, b) => a + b, 0) / ativos.length;
  }, [notas]);

  const faltaLocal = !estabelecimentoId;
  const faltaNotas = preenchidas < CRITERIOS.length;
  const podeEnviar = !faltaLocal && !faltaNotas;

  function setNota(id: CriterioId, valor: number) {
    setNotas((prev) => ({ ...prev, [id]: valor }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTentouEnviar(true);
    if (!podeEnviar) return;
    // Mock: sem backend. Apenas simula o envio.
    setEnviado(true);
  }

  function resetar() {
    setNotas(NOTAS_INICIAIS);
    setComentario("");
    setTentouEnviar(false);
    setEnviado(false);
  }

  if (enviado) {
    return (
      <div className="rounded-lg border border-border-default bg-surface-primary p-8 text-center shadow-sm">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ml-success)]/15 text-[color:var(--ml-success)]"
          aria-hidden="true"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-text-primary">Avaliação registrada</h2>
        <p className="mx-auto mt-2 max-w-md text-text-secondary">
          Obrigado por avaliar <strong>{estabelecimento?.nome}</strong>. Sua experiência ajuda
          outros entregadores a se planejarem melhor.
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <StarRatingDisplay value={media} size="md" showValue />
        </div>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={resetar}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-default bg-surface-primary px-4 text-sm font-semibold text-text-primary transition-colors hover:bg-background-secondary"
          >
            Avaliar outro local
          </button>
          <Link
            href="/estabelecimentos"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-4 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-primary-strong"
          >
            Voltar para a lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* 1. Seleção do estabelecimento */}
      <section className="rounded-lg border border-border-default bg-surface-primary p-5 shadow-sm">
        <label htmlFor={selectId} className="block text-sm font-semibold text-text-primary">
          Qual estabelecimento você quer avaliar?
        </label>
        <div className="relative mt-2">
          <select
            id={selectId}
            value={estabelecimentoId}
            onChange={(e) => setEstabelecimentoId(e.target.value)}
            aria-invalid={tentouEnviar && faltaLocal}
            className="min-h-12 w-full appearance-none rounded-md border border-border-default bg-surface-primary px-3 pr-10 text-base text-text-primary"
          >
            <option value="" disabled>
              Selecione o local da coleta
            </option>
            {ESTABELECIMENTOS.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nome} — {e.bairro}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {tentouEnviar && faltaLocal && (
          <p className="mt-2 text-sm font-medium text-[color:var(--ml-error)]">
            Escolha um estabelecimento para continuar.
          </p>
        )}
        {estabelecimento && (
          <p className="mt-2 text-sm text-text-secondary">
            {estabelecimento.categoria} · {estabelecimento.bairro}, {estabelecimento.cidade}
          </p>
        )}
      </section>

      {/* 2. Notas por critério (1 a 5) */}
      <section className="rounded-lg border border-border-default bg-surface-primary p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="text-base font-semibold text-text-primary">Dê sua nota</h2>
          <span className="text-sm text-text-secondary tabular-nums">
            {preenchidas}/{CRITERIOS.length}
          </span>
        </div>
        <ul className="flex flex-col divide-y divide-border-default">
          {CRITERIOS.map((c) => {
            const legendId = `crit-${c.id}`;
            const faltando = tentouEnviar && notas[c.id] === 0;
            return (
              <li key={c.id} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
                <div>
                  <span id={legendId} className="block text-base font-medium text-text-primary">
                    {c.rotulo}
                  </span>
                  <span className="block text-sm text-text-secondary">{c.descricao}</span>
                </div>
                <StarRatingInput
                  name={c.id}
                  legendId={legendId}
                  value={notas[c.id]}
                  onChange={(v) => setNota(c.id, v)}
                />
                {faltando && (
                  <span className="text-sm font-medium text-[color:var(--ml-error)]">
                    Dê uma nota de 1 a 5 estrelas.
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* 3. Comentário opcional */}
      <section className="rounded-lg border border-border-default bg-surface-primary p-5 shadow-sm">
        <label htmlFor={comentarioId} className="flex items-center gap-2 text-sm font-semibold text-text-primary">
          Comentário
          <span className="rounded-full bg-background-secondary px-2 py-0.5 text-xs font-medium text-text-secondary">
            opcional
          </span>
        </label>
        <textarea
          id={comentarioId}
          value={comentario}
          onChange={(e) => setComentario(e.target.value.slice(0, LIMITE_COMENTARIO))}
          rows={4}
          placeholder="Conte como foi a coleta: espera, atendimento, estrutura..."
          className="mt-2 w-full resize-y rounded-md border border-border-default bg-surface-primary p-3 text-base text-text-primary placeholder:text-text-secondary"
        />
        <div className="mt-1 text-right text-xs text-text-secondary tabular-nums">
          {comentario.length}/{LIMITE_COMENTARIO}
        </div>
      </section>

      {/* Ações */}
      <div className="sticky bottom-0 -mx-4 flex flex-col gap-3 border-t border-border-default bg-background-primary/95 px-4 py-4 backdrop-blur sm:static sm:mx-0 sm:flex-row sm:items-center sm:justify-between sm:rounded-lg sm:border sm:bg-surface-primary sm:p-5 sm:shadow-sm">
        <p className="text-sm text-text-secondary">
          {podeEnviar
            ? "Tudo pronto para enviar."
            : "Avalie os 4 critérios para enviar."}
        </p>
        <button
          type="submit"
          aria-disabled={!podeEnviar}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-primary px-6 text-base font-semibold text-brand-contrast transition-colors hover:bg-brand-primary-strong aria-disabled:cursor-not-allowed aria-disabled:bg-disabled aria-disabled:text-text-inverse"
        >
          Enviar avaliação
        </button>
      </div>
    </form>
  );
}
