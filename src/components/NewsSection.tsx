import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const newsItems = [
  {
    category: 'Noticia',
    date: 'Jul 2026',
    title: 'Convocatoria abierta para la selección de una agencia de comunicación',
    href: 'https://seiomm.org/convocatoria-abierta-para-la-seleccion-de-una-agencia-de-comunicacion/'


  },
  {
    category: 'Noticia',
    date: 'Abr 2026',
    title: 'La salud ósea en el espacio: claves tras la misión Artemis II',
    href: 'https://seiomm.org/la-salud-osea-en-el-espacio-claves-tras-la-mision-artemis-ii/'
  },
  {
    category: 'Noticia',
    date: 'Dic 2025',
    title: 'La ROMM: un referente científico en salud ósea',
    href: 'https://seiomm.org/la-romm-un-referente-cientifico-en-salud-osea/'
  },
  {
    category: 'Entrevista',
    date: 'Jul 2026',
    title: 'Entrevistas SEIOMM · Mitos y realidades sobre la vitamina D',
    href: 'https://seiomm.org/entrevistas-seiomm-%c2%b7-mitos-y-realidades-sobre-la-vitamina-d/'
  }
];

export function NewsSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-white border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Actualidad SEIOMM"
          title={
            <>Lo que merece la pena <span className="text-seiomm-cyan">conocer.</span></>
          }
          description="Una selección de publicaciones, noticias y contenidos de actualidad para mantenerse al día en el ámbito del metabolismo óseo y mineral."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Featured ROMM Card */}
          <MotionLink
            to="https://www.revistadeosteoporosisymetabolismomineral.com/magazines/181/show"
            target='_blank'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden min-h-[300px] lg:min-h-[660px] flex flex-col justify-between p-8 bg-gray-100"
          >
            <div className="absolute inset-0">
              <img
                src="/images/revista-romm.webp"
                alt="ROMM"
                className="w-full h-full object-cover image-scale-hover opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-seiomm-darker/90 lg:via-seiomm-darker/10 to-seiomm-darker/30" />

            <div className="relative z-10 flex justify-between items-center w-full text-white/90 uppercase">
              <span className="font-light font-serif text-2xl md:text-3xl">ROMM</span>
              <span className="text-xs font-mono font-semibold tracking-wider">Vol 18 · Núm 2 · 2026</span>
            </div>

            <div className="relative z-10 w-full">
              <span className="inline-block font-mono text-seiomm-cyan-on-dark text-xs font-bold tracking-wider uppercase mb-3">
                Último número publicado
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                Abril-junio 2026 · Enfermedad ósea y hepatopatía
              </h3>
              <div className="link-underline inline-flex items-center gap-2 text-white text-sm font-medium">
                Leer el último número
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </MotionLink>

          {/* News List */}
          <div className="flex flex-col">
            <div className="flex flex-col border-t border-seiomm-10">
              {newsItems.map((item, index) => (
                <MotionLink
                  key={index}
                  to="/actualidad/noticia-ejemplo"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center justify-between gap-6 py-8 border-b border-seiomm-10 transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-seiomm-mute text-xs font-mono font-semibold tracking-wider uppercase">
                      <span className={item.category === "Entrevista" ? "text-seiomm-mute" : ""}>
                        {item.category}
                      </span>
                      {" · "}
                      {item.date}
                    </span>
                    <h4 className="text-2xl font-serif font-normal text-seiomm-dark leading-snug group-hover:text-seiomm-cyan transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-seiomm-dark group-hover:text-white group-hover:bg-seiomm-dark transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </MotionLink>
              ))}
            </div>

            <MotionLink
              to="/actualidad"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="link-underline group flex items-center gap-2 text-seiomm-dark font-medium text-sm mt-8 w-fit"
            >
              Ver toda la actualidad
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MotionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
