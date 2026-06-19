import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { Services } from "@/components/Services";
import { Pipeline } from "@/components/Pipeline";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { GradientRule } from "@/components/ui/primitives";

export function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <GradientRule className="mx-auto max-w-6xl" />
      <Pipeline />
      <Team />
      <Contact />
    </>
  );
}
