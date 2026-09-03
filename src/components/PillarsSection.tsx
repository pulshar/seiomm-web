import React from 'react';
import { SectionHeader } from './SectionHeader';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    number: '01',
    title: 'Ciencia',
    description: 'Investigación, proyectos, grupos, becas, premios y ROMM.',
    linkText: 'Explorar ciencia',
    url: '/ciencia'
  },
  {
    number: '02',
    title: 'Formación',
    description: 'Cursos, congresos, ponencias y recursos para profesionales.',
    linkText: 'Ver formación',
    url: '/formacion'
  },
  {
    number: '03',
    title: 'Recursos',
    description: 'Guías clínicas, documentos, herramientas y publicaciones.',
    linkText: 'Ver recursos',
    url: '/recursos'
  }
];

export function PillarsSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-y border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Investigación y ciencia"
          title={
            <>Conocimiento para <span className="text-seiomm-cyan">avanzar.</span></>
          }
          description="Impulsamos la investigación, compartimos conocimiento y ofrecemos formación especializada para contribuir al avance de la salud ósea y del metabolismo mineral."
        />

        <div className="mt-16 grid grid-cols-1 border-y border-seiomm-10 md:grid-cols-3 md:divide-x md:divide-seiomm-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group border-b border-seiomm-10 last:border-b-0 md:border-b-0"
            >
              <div className="flex h-full flex-col px-2 py-12 transition-colors duration-500 group-hover:bg-white md:px-10 md:py-16">
                <span className="mb-6 font-serif text-6xl font-light text-seiomm-mute/30 transition-colors duration-500 group-hover:text-seiomm-cyan-on-dark/60 md:text-7xl">
                  {pillar.number}
                </span>
                <h3 className="text-3xl font-serif font-normal text-seiomm-dark mb-4">
                  {pillar.title}
                </h3>
                <p className="text-seiomm-body mb-8 flex-grow leading-relaxed">
                  {pillar.description}
                </p>
                <Link
                  to={pillar.url}
                  className="link-underline group flex items-center gap-2 text-seiomm-dark font-medium text-sm w-fit"
                >
                  {pillar.linkText}
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
