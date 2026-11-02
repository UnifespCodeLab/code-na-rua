import type { Parceiro } from "../types";

export default function ParceiroCard({ parceiro }: { parceiro: Parceiro }) {
  return (
    <article className="grid grid-cols-[5rem_minmax(0,1fr)] gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:grid-cols-[7rem_minmax(0,1fr)] sm:p-5">
      <div
        aria-hidden="true"
        className="flex min-h-24 items-center justify-center rounded-xl bg-yellow-400 text-2xl font-black text-zinc-950"
      >
        {parceiro.nome.charAt(0)}
      </div>

      <div className="min-w-0">
        <h2 className="text-lg font-bold leading-tight sm:text-xl">
          {parceiro.nome}
        </h2>

        <p className="mt-1 text-base leading-snug text-zinc-600 sm:text-lg">
          {parceiro.descricao}
        </p>

        <div className="mt-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 text-base text-zinc-600">
          <p className="flex min-w-0 items-start gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mt-0.5 size-4 shrink-0"
            >
              <path d="M12 2a8 8 0 0 0-8 8c0 5.2 8 12 8 12s8-6.8 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            <span>{parceiro.endereco}</span>
          </p>
          <p className="ml-auto shrink-0 whitespace-nowrap">
            <span className="sr-only">Avaliação do parceiro: </span>
            <span aria-hidden="true" className="mr-1 text-lg text-yellow-500">
              ★
            </span>
            <span>
              {parceiro.avaliacao.media.toFixed(1).replace(".", ",")} (
              {parceiro.avaliacao.quantidade})
            </span>
            <span className="sr-only"> avaliações</span>
          </p>
        </div>
      </div>
    </article>
  );
}
