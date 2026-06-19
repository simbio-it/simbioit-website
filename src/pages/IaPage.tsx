import { ia } from "@/lib/content";
import { PageHero, CtaBanner } from "@/components/PageHero";
import { IA } from "@/components/IA";
import { AssistantChat } from "@/components/IaVisuals";

export function IaPage() {
  return (
    <>
      <PageHero
        crumb="IA & Automação"
        eyebrow={ia.hero.eyebrow}
        title={ia.hero.title}
        highlight={ia.hero.highlight}
        subtitle={ia.hero.subtitle}
        cta={{ label: "Quero aplicar IA", href: "/#contato" }}
        visual={<AssistantChat />}
      />
      <IA />
      <CtaBanner title={ia.outro.title} text={ia.outro.text} cta={ia.cta} />
    </>
  );
}
