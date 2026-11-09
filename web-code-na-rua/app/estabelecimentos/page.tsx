import type { Metadata } from "next";
import { AppHeader } from "./_components/AppHeader";
import { EstabelecimentosList } from "./_components/EstabelecimentosList";

export const metadata: Metadata = {
  title: "Estabelecimentos parceiros · MotoLab",
  description: "Veja a reputação dos estabelecimentos e ajude outros entregadores.",
};

export default function EstabelecimentosPage() {
  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Reputação de estabelecimentos
          </h1>
          <p className="max-w-2xl text-base text-text-secondary">
            Sua experiência de coleta ajuda outros entregadores. Veja as notas de tempo de
            espera, respeito, organização e estrutura antes de aceitar uma corrida.
          </p>
        </div>
        <EstabelecimentosList />
      </main>
    </>
  );
}
