import { useEffect, useRef, useState } from "react";

/**
 * Revela um elemento quando entra na viewport (uma única vez).
 * Aplica a classe `is-visible` usada pela animação .reveal em index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      // Pré-carrega: revela um pouco antes de entrar na viewport, evitando
      // que o topo de seções altas fique em branco até rolar.
      { threshold: 0, rootMargin: "0px 0px 240px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible } as const;
}
