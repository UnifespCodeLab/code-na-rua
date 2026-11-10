import type { ReactNode } from "react";
import { ViewTransition } from "react";
import Image from "next/image";

export default function AuthPageTemplate({
  children,
  prompt,
}: {
  children: ReactNode;
  prompt: string;
}) {
  return (
    <ViewTransition
      name="app-screen"
      share="splash-login"
      default="none"
    >
      <main className="relative isolate mx-auto h-svh min-h-[568px] w-full max-w-[min(calc(100svh*9/16),480px)] overflow-y-auto overflow-x-hidden bg-white text-zinc-950 shadow-[0_0_64px_rgb(0_0_0/45%)] [container-type:inline-size]">
        <div
          className="pointer-events-none absolute -top-[32cqw] -left-[90cqw] h-[72cqw] w-[120cqw] -rotate-12 rounded-[70%] bg-[#ffdd00]"
          aria-hidden="true"
        />

        <div className="relative z-1 flex min-h-full min-w-0 max-w-full flex-col px-4 pt-[clamp(28px,6svh,986px)] min-[390px]:px-5">
          <header className="text-center">
            <Image
              className="mx-auto h-auto w-[clamp(88px,25cqw,120px)]"
              src="/images/motolab-symbol-transparent.png"
              alt="MotoLab"
              width={380}
              height={360}
              priority
              sizes="(max-width: 480px) 25vw, 120px"
            />
            <h1
              className="-mt-1 text-[clamp(42px,13cqw,62px)] leading-none font-extrabold tracking-[-0.065em]"
              aria-label="MotoLab"
            >
              <span className="text-zinc-950">Moto</span>
              <span className="text-[#e8c900]">Lab</span>
            </h1>
            <p className="mt-2 text-[clamp(13px,3.6cqw,16px)] font-medium text-zinc-800">
              Pesquisa feita com quem vive o corre
            </p>
          </header>

          <section className="relative z-2 mt-[clamp(8px,2svh,18px)] min-w-0 max-w-full">
            <p className="mt-2 text-[clamp(18px,5cqw,24px)] font-semibold text-slate-500">
              {prompt}
            </p>
            {children}
          </section>

          <div className="relative mt-auto h-[clamp(120px,24svh,220px)] min-h-28 overflow-hidden">
            <div className="absolute inset-x-[-20px] bottom-0 h-[70%] bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <Image
              className="absolute inset-x-[-20px] bottom-0 h-full w-[calc(100%+40px)] object-cover object-center opacity-95"
              src="/images/footer_login.png"
              alt="Motoboy percorrendo uma via urbana"
              width={941}
              height={650}
              sizes="(max-width: 480px) 100vw, 480px"
            />
          </div>
        </div>
      </main>
    </ViewTransition>
  );
}
