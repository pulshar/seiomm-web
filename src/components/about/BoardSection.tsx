import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { motion } from 'motion/react';


const boardMembers = [
  {
    name: 'Cristina Carbonell Abella',
    role: 'Presidenta',
    description:
      'Doctora en Medicina · Medicina Familiar y Comunitaria · Universidad de Barcelona',
    image: '/Cristina-Carbonell.jpg'
  },
  {
    name: 'Laia Gifre Sala',
    role: 'Vicepresidenta',
    description:
      'Reumatóloga · Hospital Universitario Germans Trias i Pujol, Badalona',
    image: '/Laia-Gifre.jpg'
  },
  {
    name: 'Iñigo Etxebarria Foronda',
    role: 'Secretario',
    description:
      'Cirugía Ortopédica y Traumatología · Hospital Alto Deba, Gipuzkoa',
    image: '/Inigo-Etxebarria.jpg'
  },
  {
    name: 'Àngels Martínez Ferrer',
    role: 'Tesorera',
    description:
      'Reumatóloga · Hospital Universitario Dr. Peset, Valencia',
    image: '/Angels-Martinez.jpg'
  },
  {
    name: 'Beatriz García Fontana',
    role: 'Vocal',
    description:
      'Investigadora Miguel Servet · Hospital Clínico San Cecilio, Granada',
    image: '/Beatriz-Garcia.jpg'
  },
  {
    name: 'Jesús Mora Fernández',
    role: 'Vocal',
    description:
      'Geriatra · Hospital Clínico San Carlos, Madrid',
    image: '/Jesus-Mora.jpg'
  }
];


export function BoardSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Junta directiva"
          title={<>Las personas al <span className="text-seiomm-cyan">timón.</span></>}
          description="Un equipo multidisciplinar de profesionales dedicados a guiar la sociedad hacia la excelencia y el crecimiento de nuestra comunidad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="mb-6 overflow-hidden bg-seiomm-gray">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <p className="text-seiomm-cyan font-mono text-xs font-semibold tracking-[0.2em] uppercase mb-3">{member.role}</p>
              <h3 className="text-2xl font-serif font-normal text-seiomm-dark mb-1.5">{member.name}</h3>
              <p className="text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
