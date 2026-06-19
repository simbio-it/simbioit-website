/**
 * Visuais on-brand da página APM:
 * - ObservabilityPanel: painel "ao vivo" com gráfico de latência e métricas.
 * - GoldenSignals: os 4 sinais de ouro (latência, tráfego, erros, saturação).
 */

// área de latência (path SVG suave) — estático, com ponto pulsando no fim
const AREA =
  "M0,38 C20,30 30,44 50,34 C70,24 80,40 100,30 C120,20 135,36 155,26 C175,18 190,30 210,22 C230,16 245,26 260,20";

export function ObservabilityPanel() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border-subtle bg-bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/60 px-4 py-3">
        <span className="font-mono text-xs text-ink-faint">apm · observability</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand-green">
          <span className="size-2 animate-[breathe_2s_ease-in-out_infinite] rounded-full bg-brand-green" />
          healthy
        </span>
      </div>
      <div className="p-5">
        {/* métricas */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "p99 latency", v: "142ms" },
            { k: "throughput", v: "18k/s" },
            { k: "error rate", v: "0.02%" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-lg font-semibold text-ink">{s.v}</p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                {s.k}
              </p>
            </div>
          ))}
        </div>

        {/* gráfico de latência */}
        <div className="relative mt-5">
          <svg viewBox="0 0 260 60" className="h-24 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="apmFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand-teal)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-brand-teal)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${AREA} L260,60 L0,60 Z`} fill="url(#apmFill)" />
            <path
              d={AREA}
              fill="none"
              stroke="var(--color-brand-teal)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="absolute right-0 top-[33%] size-2 -translate-y-1/2 animate-[breathe_2s_ease-in-out_infinite] rounded-full bg-brand-lime shadow-[0_0_10px_var(--color-brand-lime)]" />
        </div>

        {/* serviços */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border-subtle pt-4">
          {["api-gateway", "auth-svc", "payments", "db"].map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-md bg-bg-elevated px-2 py-1 font-mono text-[10px] text-ink-muted"
            >
              <span className="size-1.5 rounded-full bg-brand-green" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const sparks: Record<string, number[]> = {
  Latência: [8, 12, 9, 14, 10, 7, 11],
  Tráfego: [4, 7, 6, 9, 12, 11, 14],
  Erros: [2, 1, 3, 1, 2, 1, 1],
  Saturação: [6, 8, 7, 9, 8, 10, 9],
};

function Spark({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const pts = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${28 - (v / max) * 24}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 28" className="h-7 w-full" preserveAspectRatio="none">
      <polyline
        points={pts}
        fill="none"
        stroke="var(--color-brand-teal)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function GoldenSignals() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-4">
      {Object.entries(sparks).map(([label, data]) => (
        <div key={label} className="bg-bg-surface p-5">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
            {label}
          </p>
          <div className="mt-3">
            <Spark data={data} />
          </div>
        </div>
      ))}
    </div>
  );
}
