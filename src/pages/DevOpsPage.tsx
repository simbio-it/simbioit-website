import { devops } from "@/lib/content";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { DevOps } from "@/components/DevOps";
import { DeployTerminal } from "@/components/DevOpsVisuals";

export function DevOpsPage() {
  return (
    <>
      <PageHero
        crumb="DevOps & SRE"
        eyebrow={devops.hero.eyebrow}
        title={devops.hero.title}
        highlight={devops.hero.highlight}
        subtitle={devops.hero.subtitle}
        cta={{ label: "Solicitar consultoria", href: "/#contato" }}
        visual={<DeployTerminal />}
      />
      <DevOps />
      <CtaBanner
        title={devops.outro.title}
        text={devops.outro.text}
        cta={devops.cta}
      />
    </>
  );
}
