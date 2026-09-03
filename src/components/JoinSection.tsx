import React from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function JoinSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
              <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                Únete a SEIOMM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-seiomm-dark"
            >
              Forma parte de una comunidad que hace <span className="text-seiomm-cyan">avanzar la salud ósea.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 max-w-md"
          >
            <p className="text-seiomm-body text-base leading-relaxed">
              Formación acreditada, becas y premios exclusivos, la revista ROMM y una red de más de 500 profesionales te esperan.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="https://socios.seiomm.org/register"
                target='_blank'
                className="group flex items-center gap-2 bg-seiomm-cyan text-white text-sm px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-hover transition-all duration-300"
              >
                Hazte socio
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ventajas-socio"
                className="link-underline group flex items-center gap-2 text-seiomm-dark font-medium text-sm"
              >
                Conoce las ventajas
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
