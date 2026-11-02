import Link from "next/link";
import ParceiroCard from "./_components/parceiro-card";
import type { Parceiro } from "./types";

export default async function VantagensPage() {
  const parceiros = await buscarParceiros();

  async function buscarParceiros(): Promise<Parceiro[]> {
    const apiURL = process.env.API_URL;
    if (!apiURL) throw new Error("Configure API_URL");

    const response = await fetch(`${apiURL}/vantagens`, { cache: "no-store" });
    if (!response.ok) throw new Error("Não foi possível carregar os parceiros");

    return (await response.json()) as Parceiro[];
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="bg-zinc-950 text-white">
        <div className="relative mx-auto flex min-h-24 max-w-3xl items-center justify-center px-16 py-4">
          <Link
            href="/"
            aria-label="Voltar ao início"
            className="absolute left-4 flex min-h-11 min-w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
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
          </Link>
          <div className="text-center">
            <p className="text-2xl font-black tracking-tight">
              Moto<span className="text-yellow-400">Lab</span>
            </p>
            <p className="text-[10px] leading-tight text-zinc-200 sm:text-xs">
              Pesquisa feita com quem vive o corre
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-10 pt-7 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Clube de vantagens
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Parceiros fictícios para demonstração.
        </p>

        {parceiros.length === 0 ? (
          <p className="mt-7 rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-700">
            Nenhum parceiro disponível no momento.
          </p>
        ) : (
          <ul className="mt-7 space-y-4">
            {parceiros.map((parceiro) => (
              <li key={parceiro.id}>
                <Link
                  href={`/vantagens/${parceiro.id}`}
                  className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                >
                  <ParceiroCard parceiro={parceiro} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
