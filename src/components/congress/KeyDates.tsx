import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';

const keyDates = [
  {
    date: "15 MAR 2026",
    title: "Apertura de inscripciones",
    description: "Tarifa reducida para socios SEIOMM",
    highlight: false
  },
  {
    date: "01 JUN 2026",
    title: "Envío de comunicaciones",
    description: "Apertura del plazo para pósteres y comunicaciones orales",
    highlight: false
  },
  {
    date: "31 JUL 2026",
    title: "Cierre de comunicaciones",
    description: "Último día para enviar resúmenes científicos",
    highlight: false
  },
  {
    date: "15 SEP 2026",
    title: "Fin de la tarifa reducida",
    description: "A partir de esta fecha se aplica la tarifa general",
    highlight: false
  },
  {
    date: "28-30 OCT 2026",
    title: "XXX Congreso Nacional SEIOMM",
    description: "Auditorio Víctor Villegas, Murcia",
    highlight: true
  }
];

export function KeyDates() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-white border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Fechas clave"
          title={<>Marca el <span className="text-seiomm-cyan">calendario.</span></>}
          description="De la apertura de inscripciones a la clausura: estos son los hitos que no puedes dejar pasar para vivir el congreso al completo."
        />

        <div className="flex flex-col border-t border-seiomm-10">
          {keyDates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row md:items-center border-b border-seiomm-10 py-8 md:py-10 px-4 md:px-10 gap-6 md:gap-12 transition-colors ${item.highlight ? 'hover:bg-seiomm-cyan/5' : 'hover:bg-seiomm-gray/50'
                }`}
            >
              <div className={`md:w-1/3 text-2xl md:text-3xl font-serif font-light ${item.highlight ? 'text-seiomm-cyan' : 'text-seiomm-dark'}`}>
                {item.date}
              </div>
              <div className="md:w-2/3">
                <h3 className="font-sans text-lg md:text-xl font-medium text-seiomm-dark leading-snug tracking-normal mb-1">
                  {item.title}
                </h3>
                <p className="text-seiomm-body text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
