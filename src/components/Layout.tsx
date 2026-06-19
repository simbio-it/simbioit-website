import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/**
 * Ao trocar de rota: rola para o topo; se houver hash (#contato), rola até a
 * âncora correspondente após o conteúdo montar.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // pequeno atraso para garantir que a seção já está no DOM
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
