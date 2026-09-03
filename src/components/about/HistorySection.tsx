import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const historyTimeline = [
  {
    year: '1985',
    text: 'Nace SEIOMM como sociedad científica dedicada a la investigación ósea y el metabolismo mineral.'
  },
  {
    year: '1993',
    text: 'La Revista Española de Enfermedades Metabólicas Óseas (REEMO) se convierte en la publicación de la Sociedad.'
  },
  {
    year: '2009',
    text: 'Nace la Revista de Osteoporosis y Metabolismo Mineral (ROMM), con proyección internacional.'
  },
  {
    year: '2026',
    text: 'Murcia acoge el XXX Congreso Nacional SEIOMM: cuarenta ediciones de ciencia compartida.'
  }
];

export function HistorySection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-t border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Nuestra historia"
          title={<>Cuatro décadas <span className="text-seiomm-cyan">de ciencia e investigación.</span></>}
        />

        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col border-t border-seiomm-10">
            {historyTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 md:py-12 border-b border-seiomm-10 group"
              >
                <div className="md:w-1/5 flex-shrink-0">
                  <span className="font-serif text-3xl font-light tracking-tight text-seiomm-cyan md:col-span-3 md:text-4xl">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-4/5 flex items-center">
                  <p className="max-w-2xl text-base leading-relaxed md:col-span-9">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Link to="https://seiomm.org/wp-content/uploads/2025/06/Estatutos-SEIOMM-2024.pdf" target='_blank' className="inline-flex items-center gap-2 text-seiomm-dark text-sm font-medium link-underline group">
              Descarga la historia completa de SEIOMM (PDF)
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
