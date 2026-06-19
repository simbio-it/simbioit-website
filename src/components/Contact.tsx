import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Mail, Github, Loader2, AlertCircle } from "lucide-react";
import { contact } from "@/lib/content";
import { Section } from "@/components/ui/primitives";

const inputClass =
  "w-full rounded-lg border border-border-subtle bg-bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 transition-colors focus:border-brand-teal focus:outline-none focus:ring-0 disabled:opacity-60";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      nome: String(data.get("nome") ?? ""),
      email: String(data.get("email") ?? ""),
      servico: String(data.get("servico") ?? "") || "Interesse Geral",
      mensagem: String(data.get("mensagem") ?? ""),
      hp: String(data.get("empresa_site") ?? ""), // honeypot (deve ficar vazio)
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível enviar agora.");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erro inesperado.");
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <Section id="contato">
      <div className="grid gap-12 rounded-3xl border border-border-subtle bg-bg-surface/40 p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
        {/* Lado esquerdo: convite */}
        <div className="flex flex-col">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand-teal">
            {contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            {contact.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="mailto:contato@simbioit.com.br"
              className="inline-flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal">
                <Mail className="size-4" />
              </span>
              contato@simbioit.com.br
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-brand-teal">
                <Github className="size-4" />
              </span>
              github.com/simbioit
            </a>
          </div>
        </div>

        {/* Lado direito: formulário */}
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-green/30 bg-bg-base/40 p-8 text-center">
            <CheckCircle2 className="size-12 text-brand-green" />
            <h3 className="font-display text-xl font-semibold">Mensagem enviada!</h3>
            <p className="max-w-xs text-sm text-ink-muted">
              Recebemos seu contato e nossa equipe responde em breve. Obrigado!
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 font-mono text-xs uppercase tracking-wider text-brand-teal hover:underline"
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* honeypot anti-spam (oculto para humanos) */}
            <input
              type="text"
              name="empresa_site"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nome" className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Nome completo *
              </label>
              <input id="nome" name="nome" required disabled={sending} className={inputClass} placeholder="Seu nome" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={sending}
                className={inputClass}
                placeholder="voce@empresa.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="servico" className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Serviço de interesse
              </label>
              <select id="servico" name="servico" disabled={sending} className={inputClass} defaultValue="">
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {contact.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensagem" className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                disabled={sending}
                className={`${inputClass} resize-none`}
                placeholder="Conte sobre seu desafio..."
              />
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                <AlertCircle className="size-4 shrink-0" />
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-grad-brand px-5 py-3 font-medium text-bg-base transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {sending ? (
                <>
                  Enviando…
                  <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
