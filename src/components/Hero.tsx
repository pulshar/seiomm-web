import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-seiomm-darker overflow-hidden">
      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-seiomm-darker via-seiomm-darker to-transparent z-10 lg:w-2/3" />
        {/* Image background */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-y-0 right-0 w-full h-full"
        >
          <img
            src="/hero-bg.jpg"
            alt="Estructura ósea"
            className="w-full h-full object-cover object-center lg:object-right"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-18 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-seiomm-cyan-on-dark" />
            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
              Conoce Seiomm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8"
          >
            Impulsamos la ciencia<br />
            para cuidar la<br />
            <span className="text-seiomm-cyan-on-dark relative">
              salud ósea.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
          >
            SEIOMM reúne a profesionales comprometidos con la investigación, la
            formación y la práctica clínica en el ámbito del metabolismo óseo y mineral.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              to="/quienes-somos"
              className="group flex items-center gap-2 bg-white text-seiomm-dark px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
            >
              Conoce SEIOMM
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="https://socios.seiomm.org/register"
              target='_blank'
              className="group link-underline flex items-center gap-2 font-medium transition-colors text-white/80 hover:text-white"
            >
              Hazte socio
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
