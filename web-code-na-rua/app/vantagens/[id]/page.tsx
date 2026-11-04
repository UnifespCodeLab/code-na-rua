import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Parceiro } from "../types";

async function DetalhesParceiro({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^(0|[1-9]\d*)$/.test(id)) notFound();

  const apiURL = process.env.API_URL;
  if (!apiURL) throw new Error("Configure API_URL");

  const response = await fetch(`${apiURL}/vantagens/${id}`, { cache: "no-store" });
  if (response.status === 404) notFound();
  if (!response.ok) throw new Error("Não foi possível carregar o parceiro");

  const parceiro = (await response.json()) as Parceiro;
  const { latitude, longitude } = parceiro.localizacao;
  const possuiLocalizacao = Number.isFinite(latitude) && Number.isFinite(longitude)
    && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180;

  return (
    <main className="mx-auto max-w-3xl px-4 pb-10 pt-7 sm:px-6">
      <p className="text-sm text-zinc-600">Parceiro fictício para demonstração</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
        {parceiro.nome}
      </h1>
      <p className="mt-2 text-lg text-zinc-600">{parceiro.descricao}</p>
      <p className="mt-2 text-zinc-600">{parceiro.categoria}</p>

      <section className="mt-7 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Benefícios</h2>
        {parceiro.beneficios.length === 0 ? (
          <p className="mt-3 text-zinc-600">Nenhum benefício disponível no momento.</p>
        ) : (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
            {parceiro.beneficios.map((beneficio) => (
              <li key={beneficio.id}>{beneficio.descricao}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Localização</h2>
        <p className="mt-3 text-zinc-700">{parceiro.endereco}</p>
        {possuiLocalizacao && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-yellow-400 px-4 font-semibold text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Abrir no mapa
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        )}
      </section>

      <p className="mt-5 text-sm text-zinc-600">
        Avaliação do parceiro: {parceiro.avaliacao.media.toFixed(1).replace(".", ",")} de 5
        ({parceiro.avaliacao.quantidade} avaliações)
      </p>
    </main>
  );
}

export default function ParceiroPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="bg-zinc-950 text-white">
        <div className="mx-auto flex min-h-24 max-w-3xl items-center px-4 py-4 sm:px-6">
          <Link
            href="/vantagens"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-2 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar para parceiros
          </Link>
        </div>
      </header>
      <Suspense fallback={<p className="mx-auto max-w-3xl px-4 py-8" role="status">Carregando parceiro...</p>}>
        <DetalhesParceiro params={params} />
      </Suspense>
    </div>
  );
}
