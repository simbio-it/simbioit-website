import {
  ArrowRight,
  TrendingDown,
  ChartPie,
  RefreshCcwDot,
  Wallet,
  Layers,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { finops } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";
import { ImageBanner } from "@/components/ui/image-banner";
import { CostAllocation } from "@/components/FinOpsVisuals";

// Ícones por capacidade (ordem do content.ts)
const capabilityIcons: LucideIcon[] = [
  ChartPie, // Análise de Custos
  RefreshCcwDot, // Otimização Contínua
  Wallet, // Budget Management
  Layers, // Cost Allocation
  TrendingUp, // ROI Tracking
  TriangleAlert, // Anomaly Detection
];

export function FinOps() {
  return (
    <Section
      id="finops"
      className="bg-bg-surface/30"
      background={
        <FloatingPaths className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
      }
    >
      <SectionHeading
        eyebrow={finops.eyebrow}
        title={finops.title}
        highlight="Inteligente"
        intro={finops.intro}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Esquerda: capacidades + métrica */}
        <div>
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {finops.capabilities.map((c, i) => {
              const Icon = capabilityIcons[i];
              return (
                <div key={c.title} className="flex gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative isolate mt-10 flex items-center gap-5 overflow-hidden rounded-2xl border border-brand-lime/25 p-6">
            {/* foto de mercado/finanças ao fundo + overlay */}
            <img
              src="/finops/trading.jpg"
              alt="Painel de mercado financeiro com gráficos"
              loading="lazy"
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg-base/90 via-bg-base/80 to-bg-base/55" />
            <TrendingDown className="size-9 shrink-0 text-brand-lime" />
            <div>
              <div className="text-gradient font-display text-4xl font-bold">
                {finops.metric.value}
              </div>
              <p className="text-sm text-ink-muted">{finops.metric.label}</p>
            </div>
            <ul className="ml-auto hidden max-w-[16rem] flex-col gap-1 text-xs text-ink-muted sm:flex">
              {finops.benefits.slice(0, 3).map((b) => (
                <li key={b} className="truncate">· {b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direita: metodologia como sequência numerada (4 etapas reais) */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-brand-teal">
            Nossa metodologia FinOps
          </p>
          <ol className="mt-6 space-y-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle">
            {finops.methodology.map((m) => (
              <li
                key={m.step}
                className="group flex gap-5 bg-bg-surface p-5 transition-colors hover:bg-bg-elevated"
              >
                <span className="font-mono text-sm font-medium text-brand-teal/70 transition-colors group-hover:text-brand-lime">
                  {m.step}
                </span>
                <div>
                  <h4 className="font-display text-base font-medium">{m.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {m.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={finops.cta.href}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-teal"
          >
            {finops.cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Visual: alocação de custos + imagem real */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <CostAllocation />
        <ImageBanner
          src="/finops/analytics.jpg"
          alt="Dashboard de analytics com gráficos de uso e métricas"
          eyebrow="Visibilidade total"
          title="Dados de custo em dashboards claros"
          height="h-full min-h-48"
        />
      </div>
    </Section>
  );
}
