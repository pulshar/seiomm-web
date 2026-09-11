import React from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedNumber } from './AnimatedNumber';

export function CommunitySection() {
  return (
    <section className="relative py-18 md:py-24 lg:py-32 bg-seiomm-darker overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-darker/80 via-seiomm-darker/80 to-transparent z-10" />
        <img
          src="/images/congreso.webp"
          alt="Comunidad"
          className="w-full h-full object-cover opacity-40 saturate-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan-on-dark" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Comunidad SEIOMM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8"
          >
            Una comunidad que comparte conocimiento y hace <span className="text-seiomm-cyan-on-dark">avanzar la ciencia.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg max-w-xl font-light leading-relaxed"
          >
            Profesionales de distintas disciplinas unidos por un objetivo común:
            mejorar el conocimiento, la prevención y el tratamiento de las
            enfermedades del metabolismo óseo y mineral.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <span className="text-6xl md:text-7xl font-serif text-white font-light"><AnimatedNumber value={500} prefix="+" /></span>
            <span className="text-white/60 text-xs font-mono font-bold tracking-[0.2em] uppercase">Profesionales</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-2"
          >
            <span className="text-6xl md:text-7xl font-serif text-white font-light"><AnimatedNumber value={1985} /></span>
            <span className="text-white/60 text-xs font-mono font-bold tracking-[0.2em] uppercase">Hasta la actualidad</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-3xl font-serif font-light text-white/90 leading-snug pb-2"
          >
            Investigación · Formación · Colaboración
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/quienes-somos"
            className="group btn-w-100 inline-flex items-center gap-2 bg-white text-seiomm-dark px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
          >
            Conoce SEIOMM
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
