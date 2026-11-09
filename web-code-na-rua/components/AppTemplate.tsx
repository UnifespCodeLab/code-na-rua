import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AppTemplate({ children }: { children?: ReactNode }) {
  return (
    <div className="relative isolate mx-auto grid h-svh min-h-[568px] w-[min(100%,calc(100svh*9/16),480px)] overflow-hidden bg-[#050606] text-white shadow-[0_0_64px_rgb(0_0_0/45%)] [container-type:inline-size]">
      <div className="flex min-h-svh flex-col bg-zinc-50 text-zinc-950">
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto bg-zinc-50 px-4 pt-7 pb-10 text-zinc-950 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
