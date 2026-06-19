import { TrendingDown } from "lucide-react";

/**
 * Visuais on-brand da página FinOps:
 * - CostDashboard: painel de gasto mensal de nuvem caindo + economia.
 * - CostAllocation: barra de alocação de custos por categoria.
 */

const months = [
  { m: "Jan", h: 92 },
  { m: "Fev", h: 88 },
  { m: "Mar", h: 76 },
  { m: "Abr", h: 64 },
  { m: "Mai", h: 55 },
  { m: "Jun", h: 48 },
];

export function CostDashboard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border-subtle bg-bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-surface/60 px-4 py-3">
        <span className="font-mono text-xs text-ink-faint">finops · cloud cost</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-lime/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-brand-lime">
          <TrendingDown className="size-3" /> -40%
        </span>
      </div>
      <div className="p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          Gasto mensal de nuvem
        </p>
        {/* track de altura fixa: as barras (filhas diretas) usam height % */}
        <div className="mt-4 flex h-32 items-end gap-2.5">
          {months.map((d, i) => (
            <div
              key={d.m}
              className="flex-1 rounded-t-md"
              style={{
                height: `${d.h}%`,
                background:
                  i >= months.length - 2
                    ? "var(--color-brand-lime)"
                    : "color-mix(in srgb, var(--color-brand-teal) 70%, transparent)",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex gap-2.5">
          {months.map((d) => (
            <span
              key={d.m}
              className="flex-1 text-center font-mono text-[10px] text-ink-faint"
            >
              {d.m}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-baseline justify-between border-t border-border-subtle pt-4">
          <span className="text-sm text-ink-muted">Economia acumulada</span>
          <span className="text-gradient font-display text-2xl font-bold">R$ 1,2M</span>
        </div>
      </div>
    </div>
  );
}

const allocation = [
  { label: "Compute", pct: 46, color: "var(--color-brand-teal)" },
  { label: "Storage", pct: 24, color: "var(--color-brand-green)" },
  { label: "Network", pct: 18, color: "var(--color-brand-lime)" },
  { label: "Ocioso", pct: 12, color: "color-mix(in srgb, var(--color-ink-faint) 60%, transparent)" },
];

export function CostAllocation() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-surface/60 p-6 sm:p-7">
      <p className="font-mono text-xs uppercase tracking-wider text-brand-lime">
        Alocação de custos
      </p>
      <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full">
        {allocation.map((a) => (
          <div key={a.label} style={{ width: `${a.pct}%`, background: a.color }} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {allocation.map((a) => (
          <div key={a.label} className="flex items-center gap-2 text-sm">
            <span className="size-2.5 rounded-[3px]" style={{ background: a.color }} />
            <span className="text-ink">{a.label}</span>
            <span className="font-mono text-xs text-ink-faint">{a.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
