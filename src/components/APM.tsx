import {
  ArrowRight,
  Check,
  Sparkles,
  Radar,
  Gauge,
  ScrollText,
  BellRing,
  Waypoints,
  Siren,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { apm } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";
import { GoldenSignals } from "@/components/ApmVisuals";
import { PlatformCarousel } from "@/components/ApmPlatformCarousel";

// Imagem + legenda de cada área da plataforma (carrossel)
const platformMedia: Record<string, { src: string; caption: string }> = {
  "Service Dashboard": {
    src: "/apm/service-dashboard.png",
    caption: "Visão geral de saúde, throughput e latência de cada serviço em um só painel.",
  },
  "Distributed Tracing": {
    src: "/apm/distributed-tracing.png",
    caption: "Rastreie cada requisição ponta a ponta e encontre o gargalo na cadeia de serviços.",
  },
  "Service Topology": {
    src: "/apm/service-topology.png",
    caption: "Mapa em tempo real das dependências entre serviços e seus fluxos.",
  },
  "eBPF Profiling": {
    src: "/apm/ebpf-profiling.png",
    caption: "Perfis de CPU, memória e rede no kernel, sem instrumentar a aplicação.",
  },
  "Service Mesh": {
    src: "/apm/service-mesh.png",
    caption: "Métricas de tráfego, mTLS e políticas entre os serviços do seu mesh.",
  },
  Kubernetes: {
    src: "/apm/kubernetes.png",
    caption: "Saúde de nós, pods e workloads do cluster, com alertas automáticos.",
  },
  Database: {
    src: "/apm/database.png",
    caption: "Consultas lentas, conexões e desempenho do banco sob observação contínua.",
  },
  "Linux Monitoring": {
    src: "/apm/linux-monitoring.png",
    caption: "Métricas de sistema — CPU, memória, disco e rede — host a host.",
  },
};

const platformSlides = apm.platform.map((name) => ({
  name,
  src: platformMedia[name].src,
  caption: platformMedia[name].caption,
}));

// Ícones por recurso (ordem do content.ts)
const featureIcons: LucideIcon[] = [
  Radar, // Observabilidade 360°
  Gauge, // Performance Analytics
  ScrollText, // Log Management
  BellRing, // Real-time Alerting
  Waypoints, // Distributed Tracing
  Siren, // Incident Management
];

export function APM() {
  return (
    <Section
      id="apm"
      background={
        <FloatingPaths className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
      }
    >
      <SectionHeading
        eyebrow={apm.eyebrow}
        title={apm.title}
        highlight="Inteligente"
        intro={apm.intro}
      />

      {/* Áreas da plataforma — menu de abas + carrossel de dashboards */}
      <div className="mt-8">
        <PlatformCarousel slides={platformSlides} />
      </div>

      {/* Sinais de ouro (visual) */}
      <div className="mt-8">
        <GoldenSignals />
      </div>

      {/* Recursos */}
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
        {apm.features.map((f, i) => {
          const Icon = featureIcons[i];
          return (
            <div
              key={f.title}
              className="group bg-bg-surface p-6 transition-colors hover:bg-bg-elevated"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal transition-colors group-hover:text-brand-lime">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-base font-medium text-brand-teal">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Ecossistemas suportados */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-border-subtle bg-bg-surface/50 px-6 py-4">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
          Arquitetura aberta:
        </span>
        {apm.ecosystems.map((e) => (
          <span key={e} className="text-sm text-ink">
            {e}
          </span>
        ))}
      </div>

      {/* Planos */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Planos flexíveis e transparentes"
          title="Escale conforme suas necessidades crescem"
          highlight="conforme"
          align="center"
        />
        <p className="mx-auto mt-3 max-w-xl text-center font-mono text-xs text-ink-muted">
          Baseado em tráfego ($14/GB) e armazenamento ($0.20/GB)
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {apm.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6",
                plan.popular
                  ? "border-brand-teal/60 bg-bg-elevated shadow-glow"
                  : "border-border-subtle bg-bg-surface",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-grad-brand px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-bg-base">
                  <Sparkles className="size-3" /> Mais popular
                </span>
              )}
              <h4 className="font-display text-lg font-semibold">{plan.name}</h4>
              <p className="mt-1 text-xs text-ink-muted">{plan.audience}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-ink">
                  {plan.price}
                </span>
                <span className="font-mono text-sm text-ink-muted">{plan.cadence}</span>
              </div>
              <p className="mt-1.5 font-mono text-[0.7rem] text-brand-lime">
                {plan.capacity}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-border-subtle pt-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={cn(
                  "mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                  plan.popular
                    ? "bg-grad-brand text-bg-base hover:-translate-y-0.5"
                    : "border border-border-subtle text-ink hover:border-brand-teal/50 hover:text-brand-teal",
                )}
              >
                {plan.name === "Personalizado" ? "Fale conosco" : "Começar agora"}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={apm.cta.href}
            className="group inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-teal/50 hover:text-brand-teal"
          >
            {apm.cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Section>
  );
}
