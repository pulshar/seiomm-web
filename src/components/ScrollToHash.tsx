import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Esperamos a que React haya renderizado la página destino
    requestAnimationFrame(() => {
      const element = document.querySelector(hash);

      if (!element) return;

      const lenis = (window as any).lenis;

      if (lenis) {
        lenis.scrollTo(element, {
          offset: -75,
        });
      } else {
        element.scrollIntoView();
      }
    });
  }, [pathname, hash]);

  return null;
}