import { ArrowRight, Github, CloudCog, Gauge, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hero } from "@/lib/content";
import { Eyebrow } from "@/components/ui/primitives";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const highlightIcons: Record<string, LucideIcon> = {
  cloud: CloudCog,
  performance: Gauge,
  security: ShieldCheck,
};

export function Hero() {
  const parts = hero.title.split(hero.highlight);
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden border-b border-border-subtle pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Atmosfera: pixels da marca + grid de telemetria + glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-telemetry opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <PixelCanvas
          gap={15}
          speed={14}
          className="absolute inset-0 opacity-55 [mask-image:radial-gradient(ellipse_at_70%_25%,black,transparent_70%)]"
        />
        <div className="animate-breathe absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand-teal/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] size-[30rem] rounded-full bg-brand-lime/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="reveal is-visible flex flex-col gap-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-[3.75rem]">
              {parts[0]}
              <span className="text-gradient shimmer">{hero.highlight}</span>
              {parts[1]}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              {hero.subtitle}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-grad-brand px-5 py-3 font-medium text-bg-base shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {hero.primaryCta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-bg-surface/60 px-5 py-3 font-medium text-ink backdrop-blur transition-colors hover:border-brand-teal/50 hover:text-brand-teal"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Logo animado: o desenho do símbolo + bolinha pulando + quadrados */}
          <div className="reveal is-visible">
            <AnimatedLogo />
          </div>
        </div>

        {/* Destaques rápidos — limpos, com ícones (sem caixas) */}
        <dl className="reveal is-visible mt-14 flex flex-col gap-6 sm:flex-row sm:gap-10">
          {hero.highlights.map((h) => {
            const Icon = highlightIcons[h.icon];
            return (
              <div
                key={h.title}
                className="group flex items-center gap-3.5 sm:flex-1 sm:border-l sm:border-border-subtle sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <Icon
                  className="size-7 shrink-0 text-brand-teal transition-colors group-hover:text-brand-lime"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="font-display text-base font-medium text-ink">
                    {h.title}
                  </dt>
                  <dd className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    {h.subtitle}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>

      {/* link sutil do GitHub, presente na navegação original */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink lg:inline-flex"
      >
        <Github className="size-3.5" /> github
      </a>
    </section>
  );
}
