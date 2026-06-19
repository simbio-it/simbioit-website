import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-lg px-3.5 py-2 text-sm transition-colors",
      isActive ? "text-brand-teal" : "text-ink-muted hover:text-ink",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border-subtle bg-bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="SimbioIT — início">
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

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass} end={item.to === "/"}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/#contato"
          className="hidden rounded-lg border border-border-subtle bg-bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-teal/60 hover:text-brand-teal md:inline-block"
        >
          Fale conosco
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-bg-base/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block py-2.5 transition-colors",
                      isActive ? "text-brand-teal" : "text-ink-muted hover:text-ink",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/#contato"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-grad-brand px-4 py-2.5 text-center font-medium text-bg-base"
              >
                Fale conosco
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
