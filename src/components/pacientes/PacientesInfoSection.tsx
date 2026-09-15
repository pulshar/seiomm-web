import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { MoveRight, BookOpen, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    number: '01',
    title: 'Qué es la osteoporosis',
    description: 'Causas, factores de riesgo y cómo afecta a la calidad de vida.',
  },
  {
    number: '02',
    title: 'Prevención y hábitos saludables',
    description: 'Nutrición, ejercicio y estilos de vida que protegen tus huesos.',
  },
  {
    number: '03',
    title: 'Diagnóstico y densitometría',
    description: 'Cómo se evalúa tu salud ósea y qué significan los resultados.',
  },
  {
    number: '04',
    title: 'Tratamientos disponibles',
    description: 'Medicamentos, terapias y seguimiento clínico con tu médico.',
  },
  {
    number: '05',
    title: 'Fracturas y recuperación',
    description: 'Información sobre cómo afrontar una fractura y rehabilitarte.',
  },
  {
    number: '06',
    title: 'Preguntas frecuentes',
    description: 'Respuestas claras a las dudas más habituales de los pacientes.',
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: 'Información validada',
    text: 'Todos los contenidos están supervisados y validados por especialistas de SEIOMM.',
  },
  {
    icon: ShieldCheck,
    title: 'Independiente y rigurosa',
    text: 'Sin sesgos comerciales. Medicina basada en la evidencia al servicio del paciente.',
  },
  {
    icon: Stethoscope,
    title: 'Para ti y tu médico',
    text: 'Materiales pensados para facilitar la comunicación con tu equipo médico.',
  },
];

export function PacientesInfoSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Recursos para pacientes"
              title={
                <>
                  Todo lo que necesitas saber sobre tu{' '}
                  <span className="text-seiomm-green">salud ósea.</span>
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
                SEIOMM pone a tu disposición información rigurosa, comprensible y actualizada
                sobre la osteoporosis, el metabolismo óseo y las enfermedades relacionadas.
                Nuestro objetivo es que puedas tomar decisiones informadas junto a tu médico.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4 border-t border-seiomm-10">
                {highlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full border border-seiomm-green/30 bg-seiomm-green/5 flex items-center justify-center text-seiomm-green">
                      <item.icon className="w-4 h-4 stroke-[1.6]" />
                    </div>
                    <div>
                      <p className="font-medium text-seiomm-dark text-sm mb-0.5">{item.title}</p>
                      <p className="text-seiomm-body text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="https://seiomm.org"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-seiomm-dark font-medium text-sm link-underline group"
                >
                  Visitar el portal de pacientes
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Resource list */}
          <div className="lg:col-span-6 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divide-y divide-seiomm-10 border-t border-b border-seiomm-10"
            >
              {resources.map((item) => (
                <div
                  key={item.number}
                  className="py-4 md:py-5 flex items-center justify-between group hover:bg-seiomm-gray/50 px-2 transition-colors duration-200 cursor-pointer"
                >
                  <div>
                    <span className="font-serif text-lg md:text-xl font-normal text-seiomm-dark group-hover:text-seiomm-green transition-colors duration-200 block">
                      {item.title}
                    </span>
                    <span className="text-seiomm-body text-sm mt-0.5 block">{item.description}</span>
                  </div>
                  <span className="font-mono text-xs md:text-sm text-seiomm-mute/80 tracking-widest font-semibold shrink-0 ml-4">
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
