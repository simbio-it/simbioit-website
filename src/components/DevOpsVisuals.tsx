import { GitCommitHorizontal, Boxes, CircleCheck, Rocket, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Visuais on-brand para a página DevOps (mockups, não fotos de banco):
 * - DeployTerminal: janela de terminal com log de um deploy CI/CD.
 * - PipelineFlow: o pipeline Commit → Build → Test → Deploy → Monitor.
 */

export function DeployTerminal() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border-subtle bg-[#0b1216] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      {/* barra de título */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-surface/60 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-ink-faint">simbioit — deploy</span>
      </div>
      {/* log */}
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        <p>
          <span className="text-brand-teal">$</span>{" "}
          <span className="text-ink">git push origin main</span>
        </p>
        <p className="text-brand-green">✓ Pipeline #1284 triggered</p>
        <p className="text-ink-muted">
          → build <span className="text-ink-faint">docker image…</span>{" "}
          <span className="text-brand-lime">done 12s</span>
        </p>
        <p className="text-ink-muted">
          → test <span className="text-ink-faint">unit + e2e…</span>{" "}
          <span className="text-brand-lime">passed</span>
        </p>
        <p className="text-ink-muted">
          → scan <span className="text-ink-faint">trivy security…</span>{" "}
          <span className="text-brand-lime">0 high</span>
        </p>
        <p className="text-ink-muted">
          → deploy <span className="text-ink-faint">kubectl rollout…</span>{" "}
          <span className="text-brand-lime">3/3 ready</span>
        </p>
        <p className="text-brand-green">
          ✓ Deploy concluído · 99.9% uptime
          <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-[blink_1s_step-end_infinite] bg-brand-teal" />
        </p>
      </div>
    </div>
  );
}

const stages: { label: string; Icon: LucideIcon }[] = [
  { label: "Commit", Icon: GitCommitHorizontal },
  { label: "Build", Icon: Boxes },
  { label: "Test", Icon: CircleCheck },
  { label: "Deploy", Icon: Rocket },
  { label: "Monitor", Icon: Activity },
];

export function PipelineFlow() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-surface/60 p-6 sm:p-8">
      <p className="mb-6 font-mono text-xs uppercase tracking-wider text-brand-lime">
        Pipeline contínuo
      </p>
      <div className="relative flex items-center justify-between gap-2">
        {/* trilho + ponto percorrendo */}
        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-brand-teal/30 via-brand-teal/40 to-brand-lime/40">
          <span className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-brand-lime shadow-[0_0_10px_var(--color-brand-lime)] animate-[travel-x_4s_linear_infinite]" />
        </div>
        {stages.map(({ label, Icon }) => (
          <div key={label} className="relative z-10 flex flex-1 flex-col items-center gap-2">
            <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated text-brand-teal">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wide text-ink-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
