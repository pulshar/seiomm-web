import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoveRight, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zIndex: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  }
};

const slides = [
  <SlideOne />,
  <SlideTwo />,
  // <SlideThree />,
  // <SlideFour />
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap calculation for array of 4 slides
  const imageIndex =
    page >= 0
      ? page % slides.length
      : (slides.length + (page % slides.length)) % slides.length;

  const paginate = useCallback((newDirection: number) => {
    setPage(([currentPage]) => [
      currentPage + newDirection,
      newDirection
    ]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative min-h-screen bg-seiomm-dark overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full active:cursor-grabbing"
        >
          {slides[imageIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-4">
        {/* <button onClick={() => paginate(-1)} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-white hover:text-seiomm-dark transition-colors z-30">
          <ChevronLeft className="w-5 h-5" />
        </button> */}
        <div className="flex items-center gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newDirection = i > imageIndex ? 1 : -1;
                setPage(([currentPage]) => [
                  currentPage + (i - imageIndex),
                  newDirection
                ]);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${imageIndex === i
                ? 'w-6 bg-seiomm-cyan-on-dark'
                : 'w-2 bg-white/40 hover:bg-white'
                }`}
              aria-label={`Ir a la diapositiva ${i + 1}`}
            />
          ))}
        </div>
        {/* <button onClick={() => paginate(1)} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:bg-white hover:text-seiomm-dark transition-colors z-30">
          <ChevronRight className="w-5 h-5" />
        </button> */}
      </div>
    </section>
  );
}

function SlideOne() {
  return (
    <div className="relative w-full h-full flex items-center pt-8 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-darker via-seiomm-darker to-transparent z-10 lg:w-2/3" />
        <div className="absolute inset-y-0 right-0 w-full h-full">
          <img
            src="/images/hero-bg.webp"
            alt="Estructura ósea"
            className="w-full h-full object-cover object-center lg:object-right"
            draggable={false}
          />
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24 lg:py-32 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan-on-dark" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Conoce Seiomm
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 select-none">
            Impulsamos la ciencia<br />
            para cuidar la<br />
            <span className="text-seiomm-cyan-on-dark relative">
              salud ósea.
            </span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light select-none">
            SEIOMM reúne a profesionales comprometidos con la investigación, la
            formación y la práctica clínica en el ámbito del metabolismo óseo y mineral.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/quienes-somos"
              className="group btn-w-100 flex items-center gap-2 bg-white text-seiomm-darker px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
            >
              Conoce SEIOMM
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="https://socios.seiomm.org/register"
              target="_blank"
              className="group btn-w-100 link-underline flex items-center gap-2 font-medium transition-colors text-white/80 hover:text-white"
            >
              Hazte socio
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideTwo() {
  return (
    <div className="relative w-full h-full flex items-center pt-8 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-darker via-seiomm-darker/80 to-transparent z-10 lg:w-2/3" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full">
          <img
            src="/images/congreso.webp"
            alt="Comunidad"
            className="w-full h-full object-cover opacity-40 saturate-50"
            draggable={false}
          />
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <MapPin className="w-4 h-4 text-seiomm-cyan-on-dark" />
              <span className="text-white/80">Murcia</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <Calendar className="w-4 h-4 text-seiomm-cyan-on-dark" />
              <span className="text-white/80">28-30 Octubre, 2026</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 select-none">
            XXX Congreso Nacional <span className="text-seiomm-cyan-on-dark">SEIOMM</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light select-none">
            El encuentro anual de referencia en investigación, diagnóstico y tratamiento
            de las enfermedades del metabolismo óseo y mineral.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/congreso#inscripciones"
              className="group btn-w-100 flex items-center gap-2 bg-white text-seiomm-darker px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
            >
              Inscripciones
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/congreso#programa"
              className="group btn-w-100 link-underline flex items-center gap-2 font-medium transition-colors text-white/80 hover:text-white"
            >
              Ver programa
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function SlideThree() {
  return (
    <div className="relative w-full h-full flex items-center pt-8 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-gray via-seiomm-gray to-transparent z-10 lg:w-2/3" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full">
          <img
            src="/images/osteoporosis_main.webp"
            alt="Estructura ósea"
            className="w-full h-full object-cover object-center lg:object-right"
            draggable={false}
          />
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24 lg:py-32 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Conoce Seiomm
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-seiomm-dark mb-8 select-none">
            Impulsamos la ciencia<br />
            para cuidar la<br />
            <span className="text-seiomm-cyan relative">
              salud ósea.
            </span>
          </h1>
          <p className="text-seiomm-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light select-none">
            SEIOMM reúne a profesionales comprometidos con la investigación, la
            formación y la práctica clínica en el ámbito del metabolismo óseo y mineral.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/quienes-somos"
              className="group flex items-center gap-2 bg-seiomm-cyan text-white px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-hover transition-all duration-300"
            >
              Conoce SEIOMM
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="https://socios.seiomm.org/register"
              target="_blank"
              className="group link-underline flex items-center gap-2 font-medium transition-colors text-seiomm-body hover:text-seiomm-dark"
            >
              Hazte socio
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlideFour() {
  return (
    <div className="relative w-full h-full flex items-center pt-8 md:pt-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-gray via-seiomm-gray to-transparent z-10 lg:w-2/3" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full">
          <img
            src="/images/poster-congreso.webp"
            alt="Comunidad"
            className="w-full h-full object-cover object-center lg:object-right"
            draggable={false}
          />
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <MapPin className="w-4 h-4 text-seiomm-cyan" />
              <span className="text-seiomm-mute">Murcia</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <Calendar className="w-4 h-4 text-seiomm-cyan" />
              <span className="text-seiomm-mute">28-30 Octubre, 2026</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-seiomm-dark mb-8 select-none">
            XXX Congreso Nacional <span className="text-seiomm-cyan">SEIOMM</span>
          </h1>

          <p className="text-seiomm-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light select-none">
            El encuentro anual de referencia en investigación, diagnóstico y tratamiento
            de las enfermedades del metabolismo óseo y mineral.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/congreso#inscripciones"
              className="group flex items-center gap-2 bg-seiomm-cyan text-white px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-hover transition-all duration-300"
            >
              Inscripciones
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/congreso#programa"
              className="group link-underline flex items-center gap-2 font-medium transition-colors text-seiomm-body hover:text-seiomm-dark"
            >
              Ver programa
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}