import Image from "next/image";
import Link from "next/link";
import {
  LogOutIcon,
  SirenIcon,
} from "@/components/icons/navigation-icons";

export default function Header() {
  return (
    <header className="min-h-20 shrink-0 bg-zinc-950 py-2 text-white">
      <div className="mx-auto flex h-16 max-w-3xl items-center gap-2 px-3">
        <Image
          className="h-14 w-auto shrink-0"
          src="/images/motolab-symbol-transparent.png"
          alt="Símbolo do capacete MotoLab"
          width={380}
          height={360}
          priority
          sizes="56px"
        />

        <div className="min-w-0 flex-1 text-center">
          <p className="text-3xl leading-none font-black tracking-tight">
            Moto<span className="text-yellow-400">Lab</span>
          </p>
          <p className="mt-1 hidden text-[12px] leading-tight text-zinc-200 min-[390px]:block">
            Pesquisa feita com quem vive o corre
          </p>
        </div>

        <Link
          className="flex size-14 shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border border-red-300/70 bg-red-600 text-white shadow-[0_5px_12px_rgb(0_0_0/55%)] transition-[color,background-color,transform,box-shadow] duration-150 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0.5 active:border-red-700 active:bg-white active:text-red-700 active:shadow-[0_2px_5px_rgb(0_0_0/40%)]"
          href="/emergencia"
          aria-label="Acionar emergência"
        >
          <SirenIcon className="size-8" />
          <span className="text-[9px] leading-none font-black">SOS</span>
        </Link>

        <Link
          className="group grid size-12 shrink-0 cursor-pointer place-items-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
          href="/login"
          aria-label="Sair"
        >
          <span className="grid h-12 w-9 place-items-center rounded-xl bg-zinc-800 shadow-[0_5px_12px_rgb(0_0_0/55%)] transition-[color,background-color,transform,box-shadow] duration-150 group-hover:bg-zinc-700 group-hover:text-yellow-400 group-active:translate-y-0.5 group-active:bg-yellow-400 group-active:text-zinc-950 group-active:shadow-[0_2px_5px_rgb(0_0_0/40%)]">
            <LogOutIcon className="size-7" />
          </span>
        </Link>
      </div>
    </header>
  );
}
