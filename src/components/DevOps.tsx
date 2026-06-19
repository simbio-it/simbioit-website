import {
  Infinity as InfinityIcon,
  FileCode2,
  Activity,
  ShieldCheck,
  Container,
  DatabaseBackup,
  ArrowRight,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { devops } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";
import { ImageBanner } from "@/components/ui/image-banner";
import { PipelineFlow } from "@/components/DevOpsVisuals";

// Ícones específicos por solução (ordem do content.ts)
const solutionIcons: LucideIcon[] = [
  InfinityIcon, // CI/CD Pipelines
  FileCode2, // Infrastructure as Code
  Activity, // Monitoring & Alerting
  ShieldCheck, // Security & Compliance
  Container, // Container Orchestration
  DatabaseBackup, // Disaster Recovery
];

export function DevOps() {
  return (
    <Section
      id="devops"
      background={
        <FloatingPaths className="opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
      }
    >
      <SectionHeading
        eyebrow={devops.eyebrow}
        title={devops.title}
        highlight="Completas"
        intro={devops.intro}
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
        {devops.solutions.map((s, i) => {
          const Icon = solutionIcons[i];
          return (
            <div
              key={s.title}
              className="group bg-bg-surface p-6 transition-colors hover:bg-bg-elevated"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal transition-all group-hover:border-brand-teal/40 group-hover:text-brand-lime">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Visual do pipeline CI/CD */}
      <div className="mt-6">
        <PipelineFlow />
      </div>

      {/* Imagem: infraestrutura global */}
      <ImageBanner
        className="mt-6"
        src="/devops/global-network.jpg"
        alt="Rede global de infraestrutura iluminada à noite vista do espaço"
        eyebrow="Infraestrutura distribuída"
        title="Alta disponibilidade em qualquer região, sempre monitorada"
      />

      {/* Resultados + métrica em destaque */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border-subtle bg-bg-surface p-7">
          <p className="font-mono text-xs uppercase tracking-wider text-brand-lime">
            Resultados comprovados
          </p>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {devops.results.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-green" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-teal/30 p-7">
          {/* foto de servidores ao fundo + overlay para leitura */}
          <img
            src="/devops/server-racks.jpg"
            alt="Racks de servidores em data center"
            loading="lazy"
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg-base/85 via-bg-base/80 to-bg-base/60" />
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            SLA médio
          </p>
          <div>
            <div className="text-gradient font-display text-6xl font-bold tracking-tight">
              {devops.metric.value}
            </div>
            <p className="mt-1 text-sm text-ink-muted">{devops.metric.label}</p>
          </div>
          <a
            href={devops.cta.href}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-teal"
          >
            {devops.cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </Section>
  );
}
