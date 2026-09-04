import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface GuiaLink {
  label: string;
  href: string;
}

interface Guia {
  tag: string;
  tagColor?: 'cyan' | 'mute';
  title: string;
  links: GuiaLink[];
}

const guias: Guia[] = [
  {
    tag: '2022',
    tagColor: 'mute',
    title:
      'Guías de práctica clínica en la osteoporosis postmenopáusica, glucocorticoidea y del varón',
    links: [
      { label: 'PDF en castellano', href: 'https://seiomm.org/guias-clinicas/' },
      { label: 'PDF in English', href: 'https://seiomm.org/guias-clinicas/' },
    ],
  },
  {
    tag: '2022',
    tagColor: 'mute',
    title: 'Resumen ejecutivo de las guías de práctica clínica (actualizadas 2022)',
    links: [
      { label: 'PDF en castellano', href: 'https://seiomm.org/guias-clinicas/' },
      { label: 'PDF in English', href: 'https://seiomm.org/guias-clinicas/' },
    ],
  },
  {
    tag: 'SNS',
    tagColor: 'cyan',
    title:
      'Guía de Práctica Clínica sobre Osteoporosis y Prevención de Fractura por Fragilidad',
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
  {
    tag: 'INT',
    tagColor: 'cyan',
    title:
      'European guidance for the diagnosis and management of osteoporosis in postmenopausal women',
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
  {
    tag: 'INT',
    tagColor: 'cyan',
    title: "Clinician's Guide to Prevention and Treatment of Osteoporosis",
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
  {
    tag: '2014',
    tagColor: 'mute',
    title: 'Guía Clínica SEIOMM 2014',
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
  {
    tag: '2008',
    tagColor: 'mute',
    title: 'Guía Clínica SEIOMM 2008',
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
  {
    tag: '2003',
    tagColor: 'mute',
    title: 'Guía Clínica SEIOMM 2003',
    links: [{ label: 'Descargar PDF', href: 'https://seiomm.org/guias-clinicas/' }],
  },
];

export function GuiasClinicasSection() {
  return (
    <section className="bg-white pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+90px)] md:pt-[calc(6rem+90px)] lg:pt-[calc(8rem+90px)] border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="GUÍAS CLÍNICAS"
          title={
            <>
              Evidencia que se usa{' '}
              <span className="text-seiomm-cyan">en consulta.</span>
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="divide-y divide-seiomm-10 border-t border-b border-seiomm-10"
        >
          {guias.map((guia, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr_auto] gap-x-6 md:gap-x-8 items-center group/guia hover:bg-seiomm-gray/50 px-2 transition-colors duration-200"
            >
              <span
                className={`md:w-32 text-2xl font-serif shrink-0 ${guia.tagColor === 'cyan'
                  ? 'text-seiomm-cyan'
                  : 'text-seiomm-muted'
                  }`}
              >
                {guia.tag}
              </span>

              <p className="text-seiomm-body text-sm md:text-base font-normal leading-snug group-hover/guia:text-seiomm-cyan transition-colors duration-200">
                {guia.title}
              </p>

              <div className="col-start-2 md:col-start-auto flex flex-wrap items-center gap-x-6 gap-y-4 mt-6 md:mt-0">
                {guia.links.map((link, id) => (
                  <a
                    key={id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-seiomm-dark font-medium text-sm link-underline group/enlace"
                  >
                    {link.label}

                    <ArrowUpRight
                      className="w-4 h-4 transition-transform group-hover/enlace:translate-x-0.5 group-hover/enlace:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
