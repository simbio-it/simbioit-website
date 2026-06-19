import { finops } from "@/lib/content";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { FinOps } from "@/components/FinOps";
import { CostDashboard } from "@/components/FinOpsVisuals";

export function FinOpsPage() {
  return (
    <>
      <PageHero
        crumb="FinOps"
        eyebrow={finops.hero.eyebrow}
        title={finops.hero.title}
        highlight={finops.hero.highlight}
        subtitle={finops.hero.subtitle}
        cta={{ label: "Solicitar consultoria", href: "/#contato" }}
        visual={<CostDashboard />}
      />
      <FinOps />
      <CtaBanner
        title={finops.outro.title}
        text={finops.outro.text}
        cta={finops.cta}
      />
    </>
  );
}
