import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function PacientesHero() {
  return (
    <section className="bg-seiomm-gray pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+75px)] md:pt-[calc(6rem+75px)] lg:pt-[calc(8rem+75px)] border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text Content */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seiomm-green" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Área de pacientes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-seiomm-dark leading-[1.08] tracking-tight mb-8 font-light"
          >
            Información fiable para tu{' '}
            <span className="text-seiomm-green">salud ósea.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-seiomm-body text-lg leading-relaxed max-w-xl"
          >
            Encuentra guías prácticas, recomendaciones validadas por especialistas y respuestas
            claras a tus dudas sobre osteoporosis y enfermedades metabólicas óseas.
          </motion.p>
        </div>

        {/* Right Green Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[280px] md:h-[360px] bg-seiomm-green p-8 lg:p-12 pb-6 lg:pb-8 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />

          {/* Icon top-right */}
          <div className="relative z-10 self-end">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 text-white">
            <p className="font-serif text-3xl md:text-4xl font-light leading-snug mb-2">
              Tu salud,<br />nuestra misión.
            </p>
            <p className="font-mono text-xs tracking-widest font-semibold uppercase opacity-70">
              SEIOMM — ÁREA DE PACIENTES
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
