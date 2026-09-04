import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const premios = [
  {
    title: 'Premio Rubio de Apoyo a la Revista',
    description:
      '1.000 € · Al mejor artículo del año en la ROMM en revistas indexadas con factor de impacto en PubMed o en Science Citation Index.',
  },
  {
    title: 'Premio al Joven Investigador',
    description:
      'A la mejor comunicación oral presentada por un investigador socio menor de 35 años en el Congreso Nacional.',
  },
  {
    title: 'Premios Italfarmaco',
    description:
      'Al mejor trabajo sobre vitamina D y a las mejores comunicaciones orales y a los mejores pósters del Congreso Nacional.',
  },
  {
    title: 'Premios Bone Alliance (UCB-Amgen)',
    description:
      'A la actividad de FLS que más pacientes incorpore al Registro SEIOMM, y formación por fragilidad.',
  },
  {
    title: 'Premio FHOEMO',
    description:
      'Convocatoria anual de la Fundación Hispana de Osteoporosis y Enfermedades Metabólicas Óseas junto a SEIOMM.',
  },
];

export function PremiosSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="PREMIOS"
          title={
            <>
              Reconocer la <span className="text-seiomm-cyan">excelencia.</span>
            </>
          }
        />

        {/* Premios List Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="divide-y divide-seiomm-10 border-t border-b border-seiomm-10 mt-8"
        >
          {premios.map((premio) => (
            <div
              key={premio.title}
              className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline group hover:bg-seiomm-gray/40 px-2 transition-colors duration-200"
            >
              <div className="md:col-span-5">
                <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark group-hover:text-seiomm-cyan transition-colors duration-200">
                  {premio.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-seiomm-body text-sm md:text-base leading-relaxed">
                  {premio.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Convocatorias Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            to="https://seiomm.org/premios/"
            target="_blank"
            className="inline-flex items-center gap-2 text-seiomm-dark font-medium text-sm link-underline group"
          >
            Ver bases y resoluciones de todas las convocatorias
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
