/**
 * Adaptado de background-paths.tsx (21st.dev) — ver doc/planejamento/referencias.
 * Mantém o gerador de paths original, mas anima com CSS (stroke-dashoffset) em
 * vez de framer-motion, e usa o teal da marca. Atmosfera de "fluxo contínuo".
 */

function PathLayer({ position }: { position: number }) {
  // Menos linhas e estáticas — atmosfera sutil, sem animação pesada no scroll.
  const paths = Array.from({ length: 16 }, (_, idx) => {
    const i = idx * 2; // espaça as linhas mantendo a curvatura original
    return {
      id: idx,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + idx * 0.04,
      opacity: 0.05 + idx * 0.012,
    };
  });

  return (
    <svg
      className="animate-drift absolute inset-0 h-full w-full text-brand-teal"
      style={{
        // camadas em sentidos opostos e ritmos diferentes → deriva orgânica
        animationDirection: position > 0 ? "normal" : "reverse",
        animationDuration: position > 0 ? "18s" : "24s",
      }}
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
        />
      ))}
    </svg>
  );
}

export function FloatingPaths({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <PathLayer position={1} />
      <PathLayer position={-1} />
    </div>
  );
}
