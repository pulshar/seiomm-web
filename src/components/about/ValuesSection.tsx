import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';

const values = [
  {
    number: '01',
    title: 'Excelencia científica',
    description: 'Promovemos el máximo rigor en cada investigación y actividad formativa.'
  },
  {
    number: '02',
    title: 'Trabajo en equipo',
    description: 'Creemos en la fuerza de la colaboración multidisciplinar.'
  },
  {
    number: '03',
    title: 'Participación',
    description: 'Fomentamos el intercambio de conocimiento entre todos los socios.'
  },
  {
    number: '04',
    title: 'Transparencia',
    description: 'Actuamos con claridad en la gestión y en la comunicación.'
  },
  {
    number: '05',
    title: 'Integridad',
    description: 'Nos regimos por la ética profesional en todas nuestras acciones.'
  },
  {
    number: '06',
    title: 'Compromiso social',
    description: 'Orientamos nuestro trabajo a mejorar la salud de la población.'
  },
  {
    number: '07',
    title: 'Divulgación sanitaria',
    description: 'Acercamos la ciencia a la sociedad de forma accesible.'
  }
];

export function ValuesSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Nuestros valores"
          title={<>Lo que nos <span className="text-seiomm-cyan">define.</span></>}
        />

        {/* Grid Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-seiomm-10 bg-seiomm-10 gap-px">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-seiomm-gray flex flex-col p-6 md:p-10 group transition-colors duration-500 hover:bg-white"
            >
              <span className="font-mono text-sm text-seiomm-mute mb-6 tracking-widest transition-colors duration-500 group-hover:text-seiomm-cyan-on-dark">
                {value.number}
              </span>
              <div>
                <h3 className="text-xl font-serif font-normal text-seiomm-dark mb-4">{value.title}</h3>
                <p className="text-seiomm-body text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Cyan Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: values.length * 0.1 }}
            className="bg-seiomm-cyan flex flex-col p-6 md:p-10 text-seiomm-darker"
          >
            <span className="font-mono text-sm mb-6 tracking-widest font-semibold uppercase text-white opacity-60">
              Desde 1985
            </span>
            <div>
              <p className="text-xl text-white font-serif leading-tight">
                Rigor y ciencia para los profesionales y los pacientes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
