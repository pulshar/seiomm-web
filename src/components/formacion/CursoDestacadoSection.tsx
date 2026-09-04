import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const objetivos = [
  {
    number: '01',
    text: 'Conocer los medios diagnósticos habituales en la osteoporosis y las enfermedades del metabolismo óseo. Papel de las calculadoras de riesgo.',
  },
  {
    number: '02',
    text: 'Revisar las opciones terapéuticas disponibles —fármacos antirresortivos y anabólicos—, sus indicaciones y contraindicaciones. Papel del calcio y la vitamina D.',
  },
  {
    number: '03',
    text: 'Orientar la osteoporosis como enfermedad crónica que requiere un fármaco para cada momento. Papel de las unidades FLS y de Atención Primaria.',
  },
  {
    number: '04',
    text: 'Aproximar el manejo de las principales formas de osteoporosis secundaria y las formas menos frecuentes de presentación de la enfermedad.',
  },
  {
    number: '05',
    text: 'Diagnosticar y manejar las enfermedades metabólicas óseas más prevalentes: enfermedad renal crónica, hiperparatiroidismo y enfermedad de Paget.',
  },
];

export function CursoDestacadoSection() {
  return (
    <section className="bg-white pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+90px)] md:pt-[calc(6rem+90px)] lg:pt-[calc(8rem+90px)] border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-seiomm-cyan shrink-0" />
          <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            CURSO DESTACADO
          </span>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Cyan Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 bg-seiomm-cyan text-white p-8 md:p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <div className="inline-block w-fit rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-[11px] font-mono tracking-wider uppercase font-medium mb-8">
                ONLINE · 4 BLOQUES · 19 PONENCIAS
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl font-normal leading-snug mb-6 text-white">
                Curso SEIOMM · Osteoporosis y otras enfermedades metabólicas óseas
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
                Dirigido a médicos que tratan a pacientes con osteoporosis y otras
                enfermedades metabólicas óseas en su día a día, adjuntos jóvenes y residentes.
                Acreditación SEAFORMEC solicitada. Patrocinado con fines educativos por FAES.
              </p>
            </div>

            <div>
              {/* Dates / Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 gap-x-6 text-white/85 font-mono text-xs mb-8 border-t border-white/20 pt-6">
                <span>Apertura: 15 de junio de 2026</span>
                <span>Inscripción abierta desde noviembre de 2025</span>
              </div>

              {/* CTA Button */}
              <Link
                to="https://cursoosteoporosisseiomm.es"
                target="_blank"
                className="group inline-flex items-center gap-2 bg-white text-seiomm-dark text-sm px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 w-fit"
              >
                Inscribirme al curso
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Objetivos del curso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-seiomm-dark font-normal mb-6 pb-4 border-b border-seiomm-10">
                Objetivos del curso
              </h3>

              <div className="divide-y divide-seiomm-10">
                {objetivos.map((obj) => (
                  <div
                    key={obj.number}
                    className="py-4 md:py-5 flex items-start gap-4 md:gap-6 group hover:bg-seiomm-gray/40 px-2 transition-colors duration-200"
                  >
                    <span className="font-mono text-sm md:text-base font-semibold text-seiomm-cyan w-6 shrink-0 pt-0.5">
                      {obj.number}
                    </span>
                    <p className="text-seiomm-body text-sm md:text-base leading-relaxed">
                      {obj.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
