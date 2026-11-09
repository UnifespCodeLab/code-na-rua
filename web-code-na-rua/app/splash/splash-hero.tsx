import Image from "next/image";

export function SplashHero() {
  return (
    <figure className="relative z-0 col-start-1 row-start-1 m-0 grid h-full w-full place-items-center overflow-hidden bg-[#090805] after:pointer-events-none after:absolute after:inset-0 after:z-1 after:bg-[linear-gradient(180deg,rgb(0_0_0/88%)_0%,transparent_16%),linear-gradient(0deg,rgb(0_0_0/88%)_0%,transparent_16%)] after:content-['']">
      <Image
        className="h-full w-full object-cover object-center"
        src="/images/motolab-splash-alterado.png"
        alt=""
        width={941}
        height={1672}
        priority
        sizes="(max-width: 480px) 100vw, 480px"
      />
    </figure>
  );
}
