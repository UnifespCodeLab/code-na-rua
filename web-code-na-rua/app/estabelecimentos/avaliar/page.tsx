import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader } from "../_components/AppHeader";
import { RatingForm } from "./_components/RatingForm";

export const metadata: Metadata = {
  title: "Avaliar estabelecimento · MotoLab",
  description: "Avalie tempo de espera, respeito, organização e estrutura da coleta.",
};

export default async function AvaliarPage(props: PageProps<"/estabelecimentos/avaliar">) {
  const { estabelecimento } = await props.searchParams;
  const inicial = Array.isArray(estabelecimento) ? estabelecimento[0] : estabelecimento;

  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
        <nav aria-label="Navegação" className="mb-4">
          <Link
            href="/estabelecimentos"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-secondary hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar para estabelecimentos
          </Link>
        </nav>

        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">Avaliar coleta</h1>
          <p className="text-base text-text-secondary">
            Avalie de 1 a 5 estrelas cada critério. Sua nota é anônima para o estabelecimento e
            ajuda outros entregadores.
          </p>
        </div>

        <RatingForm estabelecimentoInicial={inicial} />
      </main>
    </>
  );
}
