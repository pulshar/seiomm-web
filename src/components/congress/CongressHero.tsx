import React from 'react';
import { motion } from 'motion/react';
import { MoveRight, Calendar, MapPin } from 'lucide-react';

export function CongressHero() {
  return (
    <section className="relative min-h-[80vh] bg-seiomm-darker pt-[75px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-darker via-seiomm-darker/80 to-transparent z-10 lg:w-2/3" />
        {/* Image background */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
            alt="Comunidad"
            className="w-full h-full object-cover opacity-40 saturate-50"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <MapPin className="w-4 h-4 text-seiomm-cyan-on-dark" />
              <span className="text-seiomm-mute">Murcia</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase">
              <Calendar className="w-4 h-4 text-seiomm-cyan-on-dark" />
              <span className="text-seiomm-mute">28-30 Octubre 2026</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8"
          >
            XXX Congreso Nacional <span className="text-seiomm-cyan-on-dark">SEIOMM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
          >
            El encuentro anual de referencia en investigación, diagnóstico y tratamiento
            de las enfermedades del metabolismo óseo y mineral.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#inscripciones"
              className="group btn-w-100 flex items-center gap-2 bg-white text-seiomm-darker px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
            >
              Inscripciones
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programa"
              className="group btn-w-100 link-underline flex items-center gap-2 font-medium transition-colors text-white/80 hover:text-white"
            >
              Ver programa
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
