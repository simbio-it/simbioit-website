import { apm } from "@/lib/content";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { APM } from "@/components/APM";
import { ObservabilityPanel } from "@/components/ApmVisuals";

export function ApmPage() {
  return (
    <>
      <PageHero
        crumb="APM"
        eyebrow={apm.hero.eyebrow}
        title={apm.hero.title}
        highlight={apm.hero.highlight}
        subtitle={apm.hero.subtitle}
        cta={{ label: "Solicitar consultoria", href: "/#contato" }}
        secondary={{ label: "Explorar plataforma", href: "#apm" }}
        visual={<ObservabilityPanel />}
      />
      <APM />
      <CtaBanner title={apm.outro.title} text={apm.outro.text} cta={apm.cta} />
    </>
  );
}
