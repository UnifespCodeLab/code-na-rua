import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border-default bg-brand-contrast">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-primary text-sm font-bold text-brand-contrast"
            aria-hidden="true"
          >
            ML
          </span>
          <span className="text-lg font-bold text-text-inverse">MotoLab</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            href="/estabelecimentos"
            className="rounded-md px-3 py-2 text-text-inverse/90 transition-colors hover:bg-white/10"
          >
            Estabelecimentos
          </Link>
          <Link
            href="/estabelecimentos/avaliar"
            className="rounded-md bg-brand-primary px-3 py-2 font-semibold text-brand-contrast transition-colors hover:bg-brand-primary-strong"
          >
            Avaliar
          </Link>
        </nav>
      </div>
    </header>
  );
}
