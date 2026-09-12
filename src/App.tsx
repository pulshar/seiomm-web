import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { Navbar } from './components/NavbarMegamenu';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToHash } from './components/ScrollToHash';

// Route-level code splitting: loads chunks on-demand, reducing initial bundle size
// const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Congress = lazy(() => import('./pages/Congress').then((m) => ({ default: m.Congress })));
const VentajasSocio = lazy(() => import('./pages/VentajasSocio').then((m) => ({ default: m.VentajasSocio })));
const Ciencia = lazy(() => import('./pages/Ciencia').then((m) => ({ default: m.Ciencia })));
const Formacion = lazy(() => import('./pages/Formacion').then((m) => ({ default: m.Formacion })));
const Recursos = lazy(() => import('./pages/Recursos').then((m) => ({ default: m.Recursos })));
const Actualidad = lazy(() => import('./pages/Actualidad').then((m) => ({ default: m.Actualidad })));
const Pacientes = lazy(() => import('./pages/Pacientes').then((m) => ({ default: m.Pacientes })));
const NoticiaSingle = lazy(() => import('./components/Actualidad/NoticiaSingle').then((m) => ({ default: m.NoticiaSingle })));

// Typed window interface using Omit to cleanly override the ambient lenis definition
type WindowWithLenis = Omit<Window, 'lenis'> & {
  lenis?: Lenis;
};

/**
 * Lightweight fallback loader rendered while route chunks are fetched.
 * Minimizes CLS and visual jarring with a sleek spinner.
 */
function PageLoader() {
  return (
    <div
      className="flex-grow flex items-center justify-center min-h-[60vh]"
      role="status"
      aria-label="Cargando contenido"
    >
      <div className="w-8 h-8 rounded-full border-2 border-seiomm-10 border-t-seiomm-cyan animate-spin" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: {
        offset: -75,
      },
    });

    (window as unknown as WindowWithLenis).lenis = lenis;

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

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as WindowWithLenis).lenis;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/congreso" element={<Congress />} />
            <Route path="/ventajas-socio" element={<VentajasSocio />} />
            <Route path="/ciencia" element={<Ciencia />} />
            <Route path="/formacion" element={<Formacion />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/actualidad" element={<Actualidad />} />
            <Route path="/actualidad/noticia-ejemplo" element={<NoticiaSingle />} />
            <Route path="/pacientes" element={<Pacientes />} />
          </Routes>


        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

