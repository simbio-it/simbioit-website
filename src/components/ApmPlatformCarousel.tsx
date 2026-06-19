import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Slide = { name: string; src: string; caption: string };

/**
 * Áreas da plataforma como menu de abas + carrossel de dashboards.
 * Alterna sozinho a cada 5s; clicar numa aba troca a imagem e reinicia o timer.
 * Pausa enquanto o ponteiro está sobre a imagem.
 */
export function PlatformCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), 5000);
    return () => clearTimeout(t);
  }, [active, paused, n]);

  return (
    <div>
      {/* Menu de abas */}
      <div className="flex flex-wrap gap-2">
        {slides.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
              i === active
                ? "border-brand-teal/60 bg-brand-teal/10 text-brand-teal"
                : "border-border-subtle bg-bg-surface text-ink-muted hover:border-brand-teal/40 hover:text-ink",
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Palco do carrossel */}
      <div
        className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-border-subtle bg-[#0a0f13] sm:aspect-[16/9]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <img
            key={s.name}
            src={s.src}
            alt={`Tela de monitoramento — ${s.name}`}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 size-full object-contain transition-opacity duration-700 ease-in-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

        {/* leve escurecimento só na base, para a legenda */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-base via-bg-base/70 to-transparent" />

        {/* legenda */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-lime">
              {slides[active].name}
            </p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-ink sm:text-base">
              {slides[active].caption}
            </p>
          </div>
          {/* indicadores */}
          <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
            {slides.map((s, i) => (
              <button
                key={s.name}
                type="button"
                aria-label={`Ir para ${s.name}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-6 bg-brand-teal" : "w-1.5 bg-ink-faint/50 hover:bg-ink-faint",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
