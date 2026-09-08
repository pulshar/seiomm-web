import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '1',
    title: 'Cumplimenta el formulario',
    description:
      'Rellena la solicitud de alta en el portal de socios con tus datos profesionales.',
  },
  {
    number: '2',
    title: 'Revisión de la solicitud',
    description:
      'La Sociedad revisa tu candidatura y se pone en contacto contigo en un breve periodo de tiempo.',
  },
  {
    number: '3',
    title: 'Bienvenido a SEIOMM',
    description:
      'Accede a la revista, las becas, la formación y la comunidad científica desde el primer día.',
  },
];

export function VentajasPasos() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-seiomm-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Cómo darse de alta"
              title={<>Tres pasos y <span className="text-seiomm-cyan">ya eres parte.</span></>}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="https://socios.seiomm.org/register"
                target='_blank'
                className="group btn-w-100 flex items-center gap-2 bg-seiomm-cyan text-white px-6 py-3 w-fit rounded-full font-medium hover:bg-seiomm-cyan-hover transition-all duration-300"
              >
                Solicitar el alta
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 3 Steps */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-seiomm-10 border-t border-b border-seiomm-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="py-8 md:py-10 flex items-start md:gap-12 group"
                >
                  {/* Big Number */}
                  <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-seiomm-mute/30 group-hover:text-seiomm-cyan-on-dark/60 transition-colors duration-300 w-10 md:w-12 shrink-0 leading-none select-none">
                    {step.number}
                  </span>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark mb-2.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-seiomm-body text-sm md:text-[15px] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
