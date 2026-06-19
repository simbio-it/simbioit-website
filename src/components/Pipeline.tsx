import { RefreshCw } from "lucide-react";
import { pipeline } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";

export function Pipeline() {
  return (
    <Section className="relative overflow-hidden bg-bg-surface/30">
      <FloatingPaths className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <SectionHeading
          eyebrow={pipeline.eyebrow}
          title={pipeline.title}
          highlight="Excelência"
          intro={pipeline.intro}
          align="center"
        />
      </div>

      {/* Pipeline: 6 fases conectadas — sequência real, daí a numeração */}
      <div className="relative z-10 mt-14">
        {/* trilho conectando as fases (desktop) */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent lg:block"
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {pipeline.phases.map((p) => (
            <li key={p.step} className="group relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated font-mono text-sm font-semibold text-brand-teal transition-all duration-300 group-hover:border-brand-teal/60 group-hover:bg-grad-brand group-hover:text-bg-base">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-4 py-2 font-mono text-xs text-ink-muted">
          <RefreshCw className="size-3.5 animate-[spin-slow_8s_linear_infinite] text-brand-teal" />
          Ciclo contínuo de melhoria — cada fase alimenta a próxima
        </span>
      </div>
    </Section>
  );
}
