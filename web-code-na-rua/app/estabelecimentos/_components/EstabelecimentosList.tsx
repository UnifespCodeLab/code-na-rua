"use client";

import { useMemo, useState } from "react";
import { ESTABELECIMENTOS, mediaGeral } from "../_data/mock";
import { ReviewCard } from "./ReviewCard";
import { SortSelect, type SortKey } from "./SortSelect";

export function EstabelecimentosList() {
  const [busca, setBusca] = useState("");
  const [ordem, setOrdem] = useState<SortKey>("melhores");

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const filtrados = ESTABELECIMENTOS.filter((e) => {
      if (!termo) return true;
      return (
        e.nome.toLowerCase().includes(termo) ||
        e.categoria.toLowerCase().includes(termo) ||
        e.bairro.toLowerCase().includes(termo)
      );
    });

    const ordenados = [...filtrados];
    ordenados.sort((a, b) => {
      switch (ordem) {
        case "melhores":
          return mediaGeral(b.mediaPorCriterio) - mediaGeral(a.mediaPorCriterio);
        case "piores":
          return mediaGeral(a.mediaPorCriterio) - mediaGeral(b.mediaPorCriterio);
        case "mais_avaliados":
          return b.totalAvaliacoes - a.totalAvaliacoes;
        case "nome":
          return a.nome.localeCompare(b.nome, "pt-BR");
        default:
          return 0;
      }
    });
    return ordenados;
  }, [busca, ordem]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-lg border border-border-default bg-surface-primary p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-icon-default"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, categoria ou bairro"
            aria-label="Buscar estabelecimento"
            className="min-h-11 w-full rounded-md border border-border-default bg-surface-primary pl-10 pr-3 text-sm text-text-primary placeholder:text-text-secondary"
          />
        </div>
        <SortSelect value={ordem} onChange={setOrdem} />
      </div>

      <p className="text-sm text-text-secondary">
        {lista.length} {lista.length === 1 ? "estabelecimento" : "estabelecimentos"}
      </p>

      {lista.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lista.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border-default bg-surface-primary p-10 text-center">
          <p className="text-base font-medium text-text-primary">Nenhum estabelecimento encontrado</p>
          <p className="mt-1 text-sm text-text-secondary">Tente buscar por outro nome ou bairro.</p>
        </div>
      )}
    </div>
  );
}
