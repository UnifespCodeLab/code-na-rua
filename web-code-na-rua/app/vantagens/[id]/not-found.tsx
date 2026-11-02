import Link from "next/link";

export default function ParceiroNaoEncontrado() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 text-zinc-950">
      <h1 className="text-2xl font-bold">Parceiro não encontrado</h1>
      <Link href="/vantagens" className="mt-4 inline-flex min-h-11 items-center text-blue-700 underline">
        Voltar aos parceiros
      </Link>
    </main>
  );
}
