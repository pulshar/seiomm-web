import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';

const becas = [
  {
    metric: '6 × 8.000 €',
    title: 'Becas de investigación',
    description:
      'Para proyectos de investigación básica o clínica, y cuando de forma prioritaria los de carácter traslacional. Compromiso de publicación de resultados en la ROMM.',
    requirement: 'REQUISITO: SER SOCIO DE SEIOMM DESDE AL MENOS 1 AÑO',
  },
  {
    metric: '5–6 semanas',
    title: 'Becas de movilidad',
    description:
      'Estancias en centros de investigación nacionales o internacionales, con apoyo económico adicional para ayudas formativas y estancia en nuevos centros y departamentos.',
    requirement: 'NACIONALES E INTERNACIONALES',
  },
  {
    metric: '10 becas',
    title: 'Becas de congreso',
    description:
      'Cinco para investigadores clínicos y cinco para investigadores básicos, destinadas a cubrir la inscripción al Congreso Nacional SEIOMM.',
    requirement: 'PRIORIDAD A PRIMER FIRMANTE Y SOCIOS MENORES DE 35',
  },
];

export function BecasSection() {
  return (
    <section className="bg-seiomm-gray py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="BECAS FEIOMM"
          title={
            <>
              Impulso real a <span className="text-seiomm-cyan">la investigación.</span>
            </>
          }
        />

        {/* 3 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 border border-seiomm-10 md:grid-cols-3 md:divide-x md:divide-seiomm-10">

          {becas.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-between border-b border-seiomm-10 last:border-b-0 md:border-b-0 hover:bg-seiomm-gray/50 transition-colors duration-300"
            >
              <div>
                {/* Metric / Highlight */}
                <div className="text-3xl md:text-4xl font-serif text-seiomm-cyan font-normal tracking-tight mb-6">
                  {item.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-seiomm-body text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Requirement Footer */}
              <div className="border-t border-seiomm-10 pt-6 mt-8">
                <span className="font-mono text-[10px] uppercase tracking-wider text-seiomm-mute font-semibold block">
                  {item.requirement}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
