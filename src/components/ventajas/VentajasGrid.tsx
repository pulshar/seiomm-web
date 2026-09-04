import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Award,
  Ticket,
  GraduationCap,
  Megaphone,
  Network,
} from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const advantages = [
  {
    icon: BookOpen,
    title: 'Revista ROMM en abierto',
    description:
      'Acceso libre a la Revista de Osteoporosis y Metabolismo Mineral, el órgano científico de la Sociedad, bilingüe y en acceso abierto.',
  },
  {
    icon: Award,
    title: 'Becas y premios exclusivos',
    description:
      'Solo los socios pueden optar a las becas FEIOMM e ayudas de 6.000 € a la investigación, becas de movilidad y de inscripción al congreso.',
  },
  {
    icon: Ticket,
    title: 'Congreso Nacional en mejores condiciones',
    description:
      'Condiciones especiales de inscripción y prioridad en las becas de congreso para primeros firmantes y socios jóvenes.',
  },
  {
    icon: GraduationCap,
    title: 'Formación acreditada',
    description:
      'Cursos y actividades formativas con acreditación oficial, como el curso online de osteoporosis con acreditación SEAFORMEC.',
  },
  {
    icon: Megaphone,
    title: 'Voz en la Sociedad',
    description:
      'Participación en la asamblea general, en los grupos de trabajo y en las decisiones que marcan el rumbo de la investigación ósea en España.',
  },
  {
    icon: Network,
    title: 'Comunidad multidisciplinar',
    description:
      'Una red de más de 500 profesionales clínicos e investigadores básicos con los que compartir conocimiento y proyectos.',
  },
];

export function VentajasGrid() {
  return (
    <section className="bg-white pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+90px)] md:pt-[calc(6rem+90px)] lg:pt-[calc(8rem+90px)] border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Ventajas de ser socio"
          title={<>Mucho más que <span className="text-seiomm-cyan">un carnet.</span></>}
        />

        {/* 3x2 Clean Architectural Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-seiomm-10"
        >
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 md:p-10 lg:p-12 border-r border-b border-seiomm-10 flex flex-col justify-between transition-colors duration-300 hover:bg-seiomm-gray/50"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center text-seiomm-cyan mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:border-seiomm-cyan">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark mb-4 leading-snug group-hover:text-seiomm-cyan transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-seiomm-body text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
