import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Congress } from './pages/Congress';
import { VentajasSocio } from './pages/VentajasSocio';
import { ScrollToHash } from './components/ScrollToHash';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: {
        offset: -90,
      },
    });

    (window as any).lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Evita que href="#" lleve al principio de la página
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>("a[href='#']");

      if (link) {
        event.preventDefault();
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/congreso" element={<Congress />} />
          <Route path="/ventajas-socio" element={<VentajasSocio />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
