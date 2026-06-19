import type { CSSProperties } from "react";

/**
 * Logo animado do hero — recria o espírito da tela principal do site antigo:
 * o desenho do símbolo SimbioIT, uma bolinha pulando e vários quadrados (tiles)
 * piscando, ecoando os blocos do próprio logo. Movimento todo em transform/opacity.
 */

type Tile = {
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
};

// Quadrados decorativos espalhados (cores do logo: teal predominante + verde/lime)
const tiles: Tile[] = [
  { top: "6%", left: "14%", size: 22, color: "var(--color-brand-teal)", delay: 0 },
  { top: "16%", left: "78%", size: 16, color: "var(--color-brand-lime)", delay: 0.6 },
  { top: "70%", left: "8%", size: 18, color: "var(--color-brand-green)", delay: 1.1 },
  { top: "82%", left: "62%", size: 24, color: "var(--color-brand-teal)", delay: 0.3 },
  { top: "40%", left: "90%", size: 12, color: "var(--color-brand-teal)", delay: 1.5 },
  { top: "88%", left: "30%", size: 12, color: "var(--color-brand-lime)", delay: 0.9 },
  { top: "2%", left: "46%", size: 14, color: "var(--color-brand-green)", delay: 1.8 },
];

export function AnimatedLogo() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* halo */}
      <div className="animate-breathe absolute inset-[12%] rounded-full bg-brand-teal/15 blur-[60px]" />

      {/* quadrados que piscam, ecoando os tiles do logo */}
      {tiles.map((t, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute block rounded-[28%]"
          style={
            {
              top: t.top,
              left: t.left,
              width: t.size,
              height: t.size,
              backgroundColor: t.color,
              animation: `tile-pulse ${3.2 + (i % 3) * 0.6}s ease-in-out ${t.delay}s infinite`,
              boxShadow: `0 0 14px -2px ${t.color}`,
            } as CSSProperties
          }
        />
      ))}

      {/* bolinha pulando sobre o logo */}
      <div
        className="absolute left-[14%] top-[10%]"
        style={
          {
            "--ball-span": "230px",
            animation: "ball-x 2.8s ease-in-out infinite alternate",
          } as CSSProperties
        }
      >
        <div
          style={
            {
              "--ball-jump": "-56px",
              animation:
                "ball-y 0.7s ease-in-out infinite alternate, ball-squash 0.7s ease-in-out infinite",
            } as CSSProperties
          }
        >
          <span className="bg-grad-brand block size-4 rounded-full shadow-[0_0_16px_-2px_var(--color-brand-teal)]" />
        </div>
      </div>

      {/* o desenho do logo (símbolo) */}
      <img
        src="/logos/logo-reduzido.png"
        alt="Símbolo SimbioIT"
        className="animate-[logo-float_6s_ease-in-out_infinite] absolute inset-[16%] size-[68%] object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
