import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutHero() {
  return (
    <section className="relative top-[90px] bg-seiomm-gray py-18 md:py-24 lg:py-32 overflow-hidden border-b border-seiomm-dark/8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Conoce Seiomm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-seiomm-dark leading-[1.08] tracking-tight mb-8"
          >
            Una sociedad con vocación de <span className="text-seiomm-cyan">comunidad.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-seiomm-body text-lg leading-relaxed mb-8 max-w-xl"
          >
            La Sociedad Española de Investigación Ósea y del Metabolismo Mineral (SEIOMM) es una asociación científica sin ánimo de lucro dedicada a promover la investigación básica y clínica, así como la docencia, en el ámbito de las enfermedades del metabolismo óseo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="https://seiomm.org/wp-content/uploads/2025/06/Estatutos-SEIOMM-2024.pdf" target='_blank' className="inline-flex items-center gap-2 text-seiomm-dark font-medium link-underline group">
              Descarga los estatutos
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
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

          <div className="relative z-10 text-white">
            <h2 className="relative -left-[10px] text-8xl md:text-[160px] font-serif tracking-tighter leading-none mb-4 opacity-40 font-normal">
              1985
            </h2>
            <p className="font-mono text-xs tracking-widest font-semibold uppercase">
              Sociedad Científica
            </p>
            <p className="font-mono text-xs opacity-60">
              CIF G88213036
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
