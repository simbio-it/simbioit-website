import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/primitives";
import { FloatingPaths } from "@/components/ui/floating-paths";

/** Hero das páginas internas (DevOps / FinOps / APM). */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  crumb,
  cta = { label: "Solicitar consultoria", href: "/#contato" },
  secondary,
  visual,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  crumb: string;
  cta?: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: ReactNode;
}) {
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : null;
  return (
    <section className="relative isolate overflow-hidden border-b border-border-subtle pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-telemetry opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <FloatingPaths className="opacity-50 [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_75%)]" />
        <div className="absolute -top-32 right-[-5%] size-[36rem] rounded-full bg-brand-teal/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 font-mono text-xs text-ink-muted">
          <Link to="/" className="transition-colors hover:text-brand-teal">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-ink">{crumb}</span>
        </nav>

        <div
          className={cn(
            "grid items-center gap-10",
            visual && "lg:grid-cols-[1.1fr_0.9fr] lg:gap-12",
          )}
        >
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              {parts ? (
                <>
                  {parts[0]}
                  <span className="text-gradient">{highlight}</span>
                  {parts[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="text-lg leading-relaxed text-ink-muted">{subtitle}</p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={cta.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-grad-brand px-5 py-3 font-medium text-bg-base shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {cta.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {secondary && (
                <a
                  href={secondary.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-bg-surface/60 px-5 py-3 font-medium text-ink backdrop-blur transition-colors hover:border-brand-teal/50 hover:text-brand-teal"
                >
                  {secondary.label}
                </a>
              )}
            </div>
          </div>

          {visual && <div className="flex justify-center lg:justify-end">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

/** Faixa de chamada para ação no fim das páginas internas. */
export function CtaBanner({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand-teal/30 bg-bg-surface p-10 text-center sm:p-14">
          <div className="absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand-teal/15 blur-3xl" />
          <h2 className="relative font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            {text}
          </p>
          <a
            href={cta.href}
            className="group relative mt-8 inline-flex items-center gap-2 rounded-xl bg-grad-brand px-6 py-3 font-medium text-bg-base shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
