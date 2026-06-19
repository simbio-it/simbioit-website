import { ArrowUpRight, Workflow, PiggyBank, Radar, BrainCircuit, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { services, serviceRoutes, type ServiceKey } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";

const icons: Record<ServiceKey, LucideIcon> = {
  devops: Workflow,
  finops: PiggyBank,
  apm: Radar,
  ia: BrainCircuit,
};

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="Nossos Serviços"
        title="Soluções especializadas para o seu negócio"
        highlight="especializadas"
        intro="DevOps, FinOps, observabilidade e Inteligência Artificial — frentes de atuação integradas para otimizar, escalar e automatizar a sua operação."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = icons[s.key];
          return (
            <Link key={s.key} to={serviceRoutes[s.key]} className="group block h-full">
              <div className="card-hover flex h-full flex-col rounded-2xl border border-border-subtle bg-bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated text-brand-teal transition-colors group-hover:bg-grad-brand group-hover:text-bg-base">
                    <Icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-teal" />
                </div>

                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-brand-lime">
                  {s.tag}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.description}
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border-subtle pt-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink">
                      <Check className="size-3.5 shrink-0 text-brand-green" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
