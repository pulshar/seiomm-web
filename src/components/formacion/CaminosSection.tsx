import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { Monitor, Ticket, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caminos = [
  {
    icon: Monitor,
    title: 'Curso online SEIOMM',
    description:
      'Osteoporosis y otras enfermedades metabólicas óseas: 4 bloques temáticos y 19 ponencias, con acreditación SEAFORMEC solicitada.',
    linkText: 'cursoosteoporosisseiomm.es',
    href: 'https://cursoosteoporosisseiomm.es',
    isExternal: true,
  },
  {
    icon: Ticket,
    title: 'Congreso Nacional',
    description:
      'La cita anual de la Sociedad: conferencias, mesas redondas, comunicaciones orales y talleres. En 2026, XXX edición en Murcia.',
    linkText: 'Ver la landing del congreso',
    href: '/congreso',
    isExternal: false,
  },
  {
    icon: GraduationCap,
    title: 'Formación continuada',
    description:
      'Sección de formación continuada de la ROMM y la serie de entrevistas SEIOMM con expertos de referencia.',
    linkText: 'Ir a la actualidad',
    href: '/actualidad',
    isExternal: false,
  },
];

export function CaminosSection() {
  return (
    <section className="bg-seiomm-gray py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="TODOS LOS CAMINOS"
          title={
            <>
              Formación para <span className="text-seiomm-cyan">cada momento.</span>
            </>
          }
        />

        {/* 3-Column Architectural Grid */}
        <div className="mt-16 grid grid-cols-1 border border-seiomm-10 md:grid-cols-3 md:divide-x md:divide-seiomm-10">
          {caminos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-between group hover:bg-seiomm-gray/50 transition-colors duration-300"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center text-seiomm-cyan mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:border-seiomm-cyan">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark mb-4 group-hover:text-seiomm-cyan transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-seiomm-body text-sm md:text-base leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4">
                  <Link
                    to={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    className="inline-flex items-center gap-1.5 text-seiomm-dark font-medium text-sm link-underline group"
                  >
                    {item.linkText}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
