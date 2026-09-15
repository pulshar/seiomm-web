import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { Activity, Dumbbell, Apple, Moon, Sun, Wind } from 'lucide-react';

const pillars = [
  {
    icon: Apple,
    title: 'Nutrición y calcio',
    description:
      'Una dieta rica en calcio y vitamina D es clave para mantener la densidad ósea. Te explicamos las fuentes alimentarias más efectivas.',
    stat: '1000–1200 mg/día',
    statLabel: 'Calcio recomendado',
  },
  {
    icon: Dumbbell,
    title: 'Ejercicio físico',
    description:
      'El ejercicio de carga y resistencia estimula la formación de hueso y reduce el riesgo de caídas. Descubre qué actividades son más beneficiosas.',
    stat: '3–5 días/semana',
    statLabel: 'Frecuencia recomendada',
  },
  {
    icon: Sun,
    title: 'Vitamina D',
    description:
      'La exposición solar moderada ayuda a sintetizar vitamina D, esencial para absorber el calcio. Conoce los niveles óptimos.',
    stat: '800–1000 UI/día',
    statLabel: 'Suplemento habitual',
  },
  {
    icon: Wind,
    title: 'Evitar tóxicos',
    description:
      'El tabaco y el exceso de alcohol son dos de los principales factores que debilitan los huesos. Reducirlos mejora tu salud ósea.',
    stat: '0 cigarrillos',
    statLabel: 'Objetivo para tus huesos',
  },
  {
    icon: Moon,
    title: 'Descanso y sueño',
    description:
      'El organismo regenera y consolida tejido óseo durante el sueño. Un descanso de calidad es parte de tu tratamiento.',
    stat: '7–9 h',
    statLabel: 'Horas de sueño recomendadas',
  },
  {
    icon: Activity,
    title: 'Control médico',
    description:
      'Los controles periódicos con densitometría y analítica permiten detectar a tiempo cualquier pérdida de masa ósea.',
    stat: 'Cada 1–2 años',
    statLabel: 'Revisión recomendada',
  },
];

export function PacientesPillaresSection() {
  return (
    <section className="bg-seiomm-gray py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Prevención"
          title={
            <>
              Seis pilares para{' '}
              <span className="text-seiomm-green">proteger tus huesos.</span>
            </>
          }
          description="Pequeños cambios en tu estilo de vida pueden marcar una gran diferencia. Te mostramos los hábitos con mayor impacto en tu salud ósea."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-seiomm-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white p-8 md:p-10 flex flex-col gap-6 group hover:bg-seiomm-green/5 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full border border-seiomm-green/30 bg-seiomm-green/5 flex items-center justify-center text-seiomm-green transition-all duration-300 group-hover:scale-105 group-hover:border-seiomm-green">
                <pillar.icon className="w-5 h-5 stroke-[1.6]" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-serif font-normal text-seiomm-dark mb-3 group-hover:text-seiomm-green transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-seiomm-body text-sm leading-relaxed">{pillar.description}</p>
              </div>

              <div className="border-t border-seiomm-10 pt-5">
                <p className="text-2xl font-serif font-light text-seiomm-green">{pillar.stat}</p>
                <p className="text-seiomm-mute text-xs font-mono uppercase tracking-widest mt-1">
                  {pillar.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
