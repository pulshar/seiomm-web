import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hay un hash, dejamos que ScrollToHash se encargue
    if (hash) return;

    const timeout = setTimeout(() => {
      const lenis = (window as any).lenis;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}