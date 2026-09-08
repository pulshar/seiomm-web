import React from 'react';
import { motion } from 'motion/react';

export function MissionVision() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
          <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            Misión y visión
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Vertical divider on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-seiomm-dark/10 -translate-x-1/2"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-serif font-normal text-seiomm-dark mb-6">Nuestra misión</h3>
            <p className="text-seiomm-body text-lg leading-relaxed">
              Fomentar el estudio y la investigación en el campo del metabolismo mineral y de sus alteraciones, en especial la osteoporosis, agrupando a los profesionales de la salud con interés en la materia, e impulsando actividades formativas y de divulgación para mejorar el abordaje de estas patologías en beneficio de los pacientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-serif font-normal  text-seiomm-dark mb-6">Nuestra visión</h3>
            <p className="text-seiomm-body text-lg leading-relaxed">
              Ser la sociedad científica de referencia en España e Iberoamérica para todos los aspectos relacionados con la salud ósea y el metabolismo mineral, reconocida por su rigor científico, su capacidad integradora y su impacto real en la calidad de vida de las personas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
