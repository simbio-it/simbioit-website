import {
  Bot,
  Workflow,
  MessagesSquare,
  LayoutTemplate,
  Blocks,
  Plug,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ia } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";
import { BuildFlow } from "@/components/IaVisuals";

// Ícones por oferta (ordem do content.ts)
const offeringIcons: LucideIcon[] = [
  Bot, // Agentes de IA & Copilots
  Workflow, // Automação de Processos
  MessagesSquare, // Chatbots & Atendimento
  LayoutTemplate, // Sites & Landing Pages
  Blocks, // Sistemas sob medida
  Plug, // Integração de LLMs & RAG
];

export function IA() {
  return (
    <Section
      id="ia"
      background={
        <FloatingPaths className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
      }
    >
      <SectionHeading
        eyebrow={ia.eyebrow}
        title={ia.title}
        highlight="IA"
        intro={ia.intro}
      />

      {/* Três pilares */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {ia.pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border-subtle bg-bg-surface p-6"
          >
            <h3 className="font-display text-lg font-semibold text-brand-teal">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Fluxo de desenvolvimento com IA */}
      <div className="mt-6">
        <BuildFlow />
      </div>

      {/* Ofertas */}
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
        {ia.offerings.map((o, i) => {
          const Icon = offeringIcons[i];
          return (
            <div
              key={o.title}
              className="group bg-bg-surface p-6 transition-colors hover:bg-bg-elevated"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal transition-all group-hover:border-brand-teal/40 group-hover:text-brand-lime">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{o.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Processo + métricas */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-border-subtle bg-bg-surface p-7">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-lime">
            Como entregamos
          </p>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2">
            {ia.steps.map((s) => (
              <li key={s.step} className="flex gap-3.5">
                <span className="font-mono text-sm font-medium text-brand-teal/70">
                  {s.step}
                </span>
                <div>
                  <h4 className="font-display text-base font-medium">{s.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-brand-teal/30 bg-bg-surface p-7">
          <div className="absolute -right-10 -top-10 size-40 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="relative grid grid-cols-3 gap-4">
            {ia.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-gradient font-display text-3xl font-bold">
                  {m.value}
                </div>
                <p className="mt-1 text-xs leading-snug text-ink-muted">{m.label}</p>
              </div>
            ))}
          </div>
          <a
            href={ia.cta.href}
            className="group relative inline-flex items-center gap-2 text-sm font-medium text-brand-teal"
          >
            {ia.cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Section>
  );
}
