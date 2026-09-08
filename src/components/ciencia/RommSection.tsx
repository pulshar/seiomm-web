import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { MoveRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const articleTypes = [
  { name: 'Artículos originales', number: '01' },
  { name: 'Artículos de revisión', number: '02' },
  { name: 'Formación continuada', number: '03' },
  { name: 'Discusión de casos clínicos', number: '04' },
  { name: 'Editoriales', number: '05' },
  { name: 'Imágenes científicas', number: '06' },
  { name: 'Cartas al director', number: '07' },
];

export function RommSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading, Info & CTA */}
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="REVISTA ROMM"
              title={
                <>
                  Un referente científico{' '}
                  <span className="text-seiomm-cyan">en salud ósea.</span>
                </>
              }
              stacked
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 -mt-8"
            >
              <p className="text-seiomm-body text-base md:text-[17px] leading-relaxed">
                La Revista de Osteoporosis y Metabolismo Mineral es el órgano científico de
                difusión de SEIOMM y de la Sociedad Iberoamericana de Osteoporosis y
                Metabolismo Mineral (SIBOMM). Nace en 2009 como relevo de la Revista REEM —la
                publicación de la Sociedad desde 1993— y hoy publica en español e inglés, en
                acceso abierto y adherida a los principios del Committee on Publication Ethics
                (COPE).
              </p>

              {/* Latest Issue Badge */}
              <div className="flex items-center gap-4 py-6 border-t border-seiomm-10">
                <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 stroke-[1.6] text-seiomm-cyan" />
                </div>
                <span className="text-sm font-medium text-seiomm-body">Último número: Vol. 18 Núm. 2 (abril-junio 2026)</span>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  to="https://revistadeosteoporosisymetabolismomineral.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-seiomm-dark font-medium text-sm link-underline group"
                >
                  Consultar la revista en abierto
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Article Types Table */}
          <div className="lg:col-span-6 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divide-y divide-seiomm-10 border-t border-b border-seiomm-10"
            >
              {articleTypes.map((item, idx) => (
                <div
                  key={item.number}
                  className="py-4 md:py-5 flex items-center justify-between group hover:bg-seiomm-gray/50 px-2 transition-colors duration-200"
                >
                  <span className="font-serif text-lg md:text-xl font-normal text-seiomm-dark group-hover:text-seiomm-cyan transition-colors duration-200">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs md:text-sm text-seiomm-mute/80 tracking-widest font-semibold">
                    {item.number}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
