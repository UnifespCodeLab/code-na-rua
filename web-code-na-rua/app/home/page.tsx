import AppTemplate from "@/components/AppTemplate";
import HomeFeatureCard from "@/components/HomeFeatureCard";
import {
  BadgePercentIcon,
  SirenIcon,
  StarIcon,
  TriangleAlertIcon,
} from "@/components/icons/navigation-icons";

export default function Home() {
  return (
    <AppTemplate>
      <section aria-labelledby="home-title">
        <h1 id="home-title" className="text-3xl font-extrabold tracking-tight">
          O que você precisa?
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Acesse rapidamente os recursos do MotoLab.
        </p>

        <div className="mt-6 grid gap-4">
          <HomeFeatureCard
            description="Acione ajuda rapidamente em uma situação de risco."
            icon={<SirenIcon className="size-9" />}
            label="Emergência"
            route="/emergencia"
            variant="emergency"
          />
          <HomeFeatureCard
            description="Registre panes, acidentes e outras situações."
            icon={<TriangleAlertIcon className="size-8 text-orange-600" />}
            label="Ocorrências"
            route="/ocorrencias"
            variant="occurrences"
          />
          <HomeFeatureCard
            description="Encontre parceiros e benefícios para o seu dia a dia."
            icon={<BadgePercentIcon className="size-8 text-yellow-700" />}
            label="Clube de vantagens"
            route="/vantagens"
            variant="benefits"
          />
          <HomeFeatureCard
            description="Consulte e avalie a experiência nos estabelecimentos."
            icon={<StarIcon className="size-8 text-blue-700" />}
            label="Estabelecimentos"
            route="/estabelecimentos"
            variant="ratings"
          />
        </div>
      </section>
    </AppTemplate>
  );
}
