import React from 'react';
import { motion } from 'motion/react';

export function CienciaHero() {
  return (
    <section className="relative top-[90px] bg-seiomm-gray py-18 md:py-24 lg:py-32 overflow-hidden border-b border-seiomm-dark/8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text Content */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              CIENCIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-seiomm-dark leading-[1.08] tracking-tight mb-8 font-light"
          >
            Investigar para transformar la{' '}
            <span className="text-seiomm-cyan">práctica clínica.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-seiomm-body text-lg leading-relaxed max-w-xl"
          >
            SEIOMM y su Fundación FEIOMM impulsan la investigación básica, clínica y
            traslacional en metabolismo óseo y mineral: proyectos, becas, premios, grupos de
            trabajo y una revista científica propia.
          </motion.p>
        </div>

        {/* Right Cyan Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[280px] md:h-[360px] bg-seiomm-cyan p-8 lg:p-12 pb-6 lg:pb-8 flex flex-col justify-end overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}>
          </div>

          <div className="relative z-10 text-white -left-[40px]">
            <h2 className="text-8xl md:text-[160px] font-serif tracking-tighter leading-none mb-4 opacity-40 font-normal">
              ROMM
            </h2>
          </div>
          <div className="relative z-10 text-white self-end">
            <p className="font-mono text-xs tracking-widest font-semibold uppercase">
              ÓRGANO CIENTÍFICO DE SEIOMM Y FEIOMM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
