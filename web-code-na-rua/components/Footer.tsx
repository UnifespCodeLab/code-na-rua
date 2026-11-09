import type { ReactNode } from "react";
import Link from "next/link";
import {
  BadgePercentIcon,
  HouseIcon,
  StarIcon,
  TriangleAlertIcon,
  UserIcon,
} from "@/components/icons/navigation-icons";

function FooterButton({
  icon,
  label,
  route,
}: {
  icon: ReactNode;
  label: string;
  route: string;
}) {
  return (
    <li className="min-w-0 flex-1">
      <Link
        className="group flex min-h-16 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-zinc-800 px-1 text-zinc-200 shadow-[0_5px_12px_rgb(0_0_0/45%)] transition-[color,background-color,transform,box-shadow] duration-150 hover:bg-zinc-700 hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 active:translate-y-0.5 active:bg-yellow-400 active:text-zinc-950 active:shadow-[0_2px_5px_rgb(0_0_0/35%)]"
        href={route}
      >
        {icon}
        <span className="max-w-full truncate text-[10px] leading-none font-semibold">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto shrink-0 rounded-t-2xl bg-zinc-950 text-white">
      <nav
        className="mx-auto max-w-3xl px-3 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]"
        aria-label="Navegação principal"
      >
        <ul className="flex items-stretch justify-between gap-2">
          <FooterButton
            icon={<HouseIcon className="size-8" />}
            label="Início"
            route="/home"
          />
          <FooterButton
            icon={<StarIcon className="size-8" />}
            label="Avaliações"
            route="/avaliacoes"
          />
          <FooterButton
            icon={<BadgePercentIcon className="size-8" />}
            label="Vantagens"
            route="/vantagens"
          />
          <FooterButton
            icon={<TriangleAlertIcon className="size-8" />}
            label="Ocorrências"
            route="/ocorrencias"
          />
          <FooterButton
            icon={<UserIcon className="size-8" />}
            label="Configurações"
            route="/configuracoes"
          />
        </ul>
      </nav>
    </footer>
  );
}
