import Image from "next/image";

export function SplashBrand() {
  return (
    <header className="absolute 
                      top-[10%] 
                      left-1/2 
                      z-1 
                      grid 
                      w-full 
                      -translate-x-1/2 
                      justify-items-center 
                      px-[6cqw] 
                      text-center 
                      [@media(max-height:700px)]:[padding-block:14px_8px]">
      <div className="grid 
                      justify-items-center">
        <div className="relative 
                      aspect-[19/18] 
                      w-[clamp(156px,48cqw,230px)] 
                      overflow-hidden 
                      rounded-full 
                      shadow-[0_0_48px_rgb(255_221_0/18%)] 
                      [@media(max-height:700px)]:w-[clamp(126px,28svh,180px)] 
                      max-[359px]:w-[45cqw]">
          <Image
            className="object-cover"
            src="/images/motolab-symbol-transparent.png"
            alt="Símbolo do capacete MotoLab"
            fill
            priority
            sizes="(max-width: 500px) 48vw, 230px"
          />
        </div>
        <h1
          className="-mt-0.5 flex text-[clamp(72px,13cqw,74px)] leading-none font-extrabold tracking-[-0.075em] [@media(max-height:700px)]:text-[clamp(36px,10svh,54px)] max-[359px]:text-[12cqw]"
          aria-label="MotoLab"
        >
          <span className="text-white">Moto</span>
          <span className="text-[#ffdd00]">Lab</span>
        </h1>
      </div>
      <p className="mt-[clamp(6px,2.8svh,6px)] max-w-[88cqw] text-[clamp(14px,4.2cqw,16px)] leading-[1.2] font-normal text-balance max-[359px]:text-[5.2cqw]">
        Pesquisa feita com quem vive o corre
      </p>
    </header>
  );
}
