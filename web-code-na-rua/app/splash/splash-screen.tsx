import { SplashBrand } from "@/app/splash/splash-brand";
import { SplashHero } from "@/app/splash/splash-hero";

export function SplashScreen() {
  return (
    <main className="relative isolate mx-auto grid h-svh min-h-[568px] w-[min(100%,calc(100svh*9/16),480px)] overflow-hidden bg-[#050606] py-[50px] text-white shadow-[0_0_64px_rgb(0_0_0/45%)] [container-type:inline-size]">
      <SplashHero />
      <div className="pointer-events-none relative z-2 col-start-1 row-start-1">
        <SplashBrand />
      </div>
    </main>
  );
}
