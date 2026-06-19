import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { footer, nav, services, serviceRoutes } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-surface/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logos/logo-reduzido-2.png"
              alt=""
              aria-hidden
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Simbio<span className="text-brand-teal">IT</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {footer.tagline}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Serviços
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.key}>
                <Link
                  to={serviceRoutes[s.key]}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-teal"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Navegação
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-sm text-ink-muted transition-colors hover:text-brand-teal"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-brand-teal"
              >
                <Github className="size-3.5" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {footer.year} SimbioIT. Todos os direitos reservados.</p>
          <p className="font-mono">Cloud Solutions · DevOps · FinOps · APM</p>
        </div>
      </div>
    </footer>
  );
}
