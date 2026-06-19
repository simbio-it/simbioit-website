import { MessageSquare, PenTool, Code2, Rocket, Bot, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Visuais on-brand da página IA:
 * - AssistantChat: janela de um assistente de IA executando uma automação.
 * - BuildFlow: fluxo de desenvolvimento com IA (Briefing → Design → Código → Deploy).
 */

export function AssistantChat() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border-subtle bg-bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2.5 border-b border-border-subtle bg-bg-surface/60 px-4 py-3">
        <span className="inline-flex size-7 items-center justify-center rounded-lg bg-grad-brand text-bg-base">
          <Bot className="size-4" />
        </span>
        <span className="font-mono text-xs text-ink">Assistente IA</span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-brand-green">
          <span className="size-2 animate-[breathe_2s_ease-in-out_infinite] rounded-full bg-brand-green" />
          online
        </span>
      </div>

      <div className="space-y-3 p-4 text-sm">
        {/* usuário */}
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand-teal/15 px-3.5 py-2 text-ink">
            Gere o relatório de vendas do mês e envie no Slack
          </p>
        </div>

        {/* assistente */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border-subtle bg-bg-elevated px-3.5 py-2 text-ink-muted">
            <p>Claro! Consultando os dados e montando o resumo…</p>
            <div className="mt-2 space-y-1 border-t border-border-subtle pt-2 font-mono text-[11px]">
              <p className="text-brand-teal">→ query vendas · 30d</p>
              <p className="text-brand-teal">→ gerando gráfico</p>
              <p className="text-brand-lime">→ enviado em #vendas ✓</p>
            </div>
          </div>
        </div>

        {/* resposta final */}
        <div className="flex justify-start">
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm border border-border-subtle bg-bg-elevated px-3.5 py-2 text-ink">
            Pronto! Receita de <span className="font-semibold text-brand-green">+18%</span>{" "}
            vs. mês anterior. Relatório no Slack.
          </p>
        </div>

        {/* digitando */}
        <div className="flex items-center gap-1.5 pl-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-ink-faint"
              style={{ animation: `breathe 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const stages: { label: string; Icon: LucideIcon }[] = [
  { label: "Briefing", Icon: MessageSquare },
  { label: "Design", Icon: PenTool },
  { label: "Código", Icon: Code2 },
  { label: "Deploy", Icon: Rocket },
];

export function BuildFlow() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-surface/60 p-6 sm:p-8">
      <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-lime">
        <Sparkles className="size-3.5" /> Do briefing ao deploy com IA
      </p>
      <div className="relative flex items-center justify-between gap-2">
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
