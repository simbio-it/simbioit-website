import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/useReveal";

/** Eyebrow monoespaçada com glifo de nó — vocabulário de telemetria. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-brand-teal",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block size-1.5 rounded-[2px] bg-grad-brand shadow-[0_0_8px_rgba(32,184,196,0.8)]"
      />
      {children}
    </span>
  );
}

/** Cabeçalho de seção: eyebrow + título display + intro opcional. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  // Permite destacar parte do título com o gradiente da marca
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : null;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
        {parts ? (
          <>
            {parts[0]}
            <span className="text-gradient">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Wrapper de seção com largura máxima e reveal no scroll.
 *  `background` renderiza uma camada atrás do conteúdo (ex.: linhas em movimento). */
export function Section({
  id,
  children,
  className,
  container = true,
  background,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  container?: boolean;
  background?: ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28",
        background && "overflow-hidden",
        className,
      )}
    >
      {background}
      <div
        ref={ref}
        className={cn(
          "relative z-10 reveal",
          visible && "is-visible",
          container && "mx-auto w-full max-w-6xl px-6",
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Divisória sutil em gradiente, no tom de telemetria. */
export function GradientRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-border-subtle to-transparent",
        className,
      )}
    />
  );
}
