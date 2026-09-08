import React from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CienciaCta() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-seiomm-darker border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* Left Column */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-seiomm-cyan-on-dark" />
              <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                INVESTIGA CON SEIOMM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white font-light leading-[1.12]"
            >
              ¿Investigas en metabolismo óseo?{' '}
              <span className="text-seiomm-cyan-on-dark">Te ayudamos a avanzar.</span>
            </motion.h2>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 max-w-md"
          >
            <p className="text-white/80 text-base leading-relaxed">
              Consulta las convocatorias abiertas de becas y premios FEIOMM/SEIOMM y presenta
              tu candidatura.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="https://seiomm.org/becas-y-premios-seiomm-feiomm-oportunidades-para-investigadores-en-metabolismo-oseo-y-mineral/"
                target="_blank"
                className="group btn-w-100 flex items-center gap-2 bg-white text-seiomm-dark text-sm px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
              >
                Ver becas y premios
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="https://socios.seiomm.org/register"
                target="_blank"
                className="link-underline group btn-w-100 flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors"
              >
                Hazte socio
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
