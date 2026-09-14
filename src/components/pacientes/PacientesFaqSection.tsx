import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué es la osteoporosis y quién la puede padecer?',
    answer:
      'La osteoporosis es una enfermedad que debilita los huesos, haciéndolos más porosos y frágiles, lo que aumenta el riesgo de fracturas. Aunque es más frecuente en mujeres posmenopáusicas y en personas mayores, puede afectar a cualquier persona, incluidos hombres y jóvenes con ciertos factores de riesgo.',
  },
  {
    question: '¿Cómo sé si tengo osteoporosis?',
    answer:
      'La osteoporosis suele ser silenciosa hasta que ocurre una fractura. El diagnóstico se realiza mediante densitometría ósea (DXA), una prueba sencilla e indolora que mide la densidad mineral del hueso. Consulta a tu médico si tienes factores de riesgo.',
  },
  {
    question: '¿Qué alimentos son buenos para mis huesos?',
    answer:
      'Los lácteos, las legumbres, el brócoli, las almendras y los pescados en conserva con espinas (sardinas, anchoas) son ricos en calcio. Para absorberlo correctamente, también necesitas vitamina D, que obtienes del sol y de alimentos como el salmón, el huevo y los lácteos enriquecidos.',
  },
  {
    question: '¿El ejercicio puede mejorar mi densidad ósea?',
    answer:
      'Sí. El ejercicio de carga (caminar, correr, bailar) y el de resistencia (pesas, bandas elásticas) estimulan la formación de hueso. Se recomienda practicarlo de 3 a 5 días por semana. Los ejercicios de equilibrio también ayudan a prevenir caídas.',
  },
  {
    question: '¿Cuánto tiempo dura el tratamiento de la osteoporosis?',
    answer:
      'El tratamiento suele ser prolongado, a menudo varios años, y varía en función del medicamento y del riesgo individual. Tu médico evaluará periódicamente la respuesta al tratamiento y lo ajustará si es necesario. No lo interrumpas sin consultar.',
  },
  {
    question: '¿Puedo llevar una vida normal con osteoporosis?',
    answer:
      'Sí. Con el tratamiento adecuado y algunos cambios en los hábitos de vida, la gran mayoría de pacientes pueden mantener una vida activa y de calidad. Es importante prevenir las caídas en el hogar y adaptar las actividades físicas a tu situación.',
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border-b border-seiomm-10 last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-normal text-seiomm-dark group-hover:text-seiomm-green transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-seiomm-mute transition-transform duration-300 ${open ? 'rotate-180 text-seiomm-green' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-5' : 'max-h-0'}`}
      >
        <p className="text-seiomm-body text-base leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
};

export function PacientesFaqSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Preguntas frecuentes"
              title={
                <>
                  Resolvemos tus{' '}
                  <span className="text-seiomm-green">dudas más habituales.</span>
                </>
              }
              stacked
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="-mt-8 flex items-start gap-4 p-6 bg-seiomm-green/5 border border-seiomm-green/20"
            >
              <HelpCircle className="w-5 h-5 text-seiomm-green shrink-0 mt-0.5" strokeWidth={1.6} />
              <p className="text-seiomm-body text-sm leading-relaxed">
                Si no encuentras respuesta a tu pregunta, contacta con nosotros o consulta a tu
                médico especialista en metabolismo óseo.
              </p>
            </motion.div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-7 border-t border-seiomm-10">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
