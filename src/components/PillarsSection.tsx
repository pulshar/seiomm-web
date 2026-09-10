import React from 'react';
import { SectionHeader } from './SectionHeader';
import { MoveRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    number: '01',
    title: 'Ciencia',
    description: 'Investigación, proyectos, grupos, becas, premios y ROMM.',
    linkText: 'Explorar ciencia',
    href: '/ciencia',
    image: 'https://images.unsplash.com/photo-1630959305790-4c956ce6c0b6?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Formación',
    description: 'Cursos, congresos, ponencias y recursos para profesionales.',
    linkText: 'Ver formación',
    href: '/formacion',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Recursos',
    description: 'Guías clínicas, documentos, herramientas y publicaciones.',
    linkText: 'Ver recursos',
    href: '/recursos',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=800&auto=format&fit=crop'
  },
  {
    number: '04',
    title: '¿Eres paciente?',
    description: 'Encuentra información fiable sobre osteoporosis y salud ósea.',
    linkText: 'Ver contenidos',
    href: '/pacientes',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop',
    isPatient: true
  }
];

export function PillarsSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-y border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Investigación y ciencia"
          title={
            <>Conocimiento para <span className="text-seiomm-cyan">avanzar.</span></>
          }
          description="Impulsamos la investigación, compartimos conocimiento y ofrecemos formación especializada para contribuir al avance de la salud ósea y del metabolismo mineral."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-seiomm-10 border-y border-seiomm-10">
          {/* {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-seiomm-gray h-full"
            >
              <Link
                to={pillar.href}
                className={`group flex h-full flex-col px-2 py-10 md:px-10 md:py-12 transition-colors duration-500 ${pillar.isPatient ? 'px-6 bg-seiomm-green hover:bg-seiomm-green-hover' : 'hover:bg-white'
                  }`}
              >
                <span className={`mb-6 font-serif text-6xl md:text-7xl font-light transition-colors duration-500 ${pillar.isPatient ? 'text-white/40 group-hover:text-white/60' : 'text-seiomm-mute/30 group-hover:text-seiomm-cyan-on-dark/60'
                  }`}>
                  {pillar.number}
                </span>

                <h3 className={`text-2xl lg:text-3xl font-serif font-normal mb-4 transition-colors ${pillar.isPatient ? 'text-white' : 'text-seiomm-dark'
                  }`}>
                  {pillar.title}
                </h3>

                <p className={`mb-8 flex-grow leading-relaxed ${pillar.isPatient ? 'text-white/80' : 'text-seiomm-body'
                  }`}>
                  {pillar.description}
                </p>

                <span className={`link-underline flex items-center gap-2 font-medium text-sm w-fit ${pillar.isPatient ? 'text-white' : 'text-seiomm-dark'
                  }`}>
                  {pillar.linkText}
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))} */}
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-seiomm-gray h-full"
            >
              <Link
                to={pillar.href}
                className="group relative block h-full min-h-[310px] md:min-h-[420px] overflow-hidden"
              >
                {/* Layer 1: Base Background & Text */}
                <div className={`absolute inset-0 flex flex-col px-6 py-10 md:px-10 md:py-12 ${pillar.isPatient ? 'bg-seiomm-green' : 'bg-seiomm-gray'
                  }`}>
                  <span className={`mb-6 font-serif text-6xl font-light md:text-7xl ${pillar.isPatient ? 'text-white/40' : 'text-seiomm-mute/30'
                    }`}>
                    {pillar.number}
                  </span>

                  <h3 className={`text-2xl lg:text-3xl font-serif font-normal mb-4 ${pillar.isPatient ? 'text-white' : 'text-seiomm-dark'
                    }`}>
                    {pillar.title}
                  </h3>

                  <p className={`mb-8 flex-grow leading-relaxed ${pillar.isPatient ? 'text-white/80' : 'text-seiomm-body'
                    }`}>
                    {pillar.description}
                  </p>

                  <span className={`link-underline flex items-center gap-2 font-medium text-sm w-fit ${pillar.isPatient ? 'text-white' : 'text-seiomm-dark'
                    }`}>
                    {pillar.linkText}
                    <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Layer 2: Image Reveal Overlay */}
                {/* The clip-path starts as a small circle. On hover, it expands to cover the whole card. */}
                <div className="absolute inset-0 z-10 flex flex-col px-6 py-10 md:px-10 md:py-12 [clip-path:circle(30px_at_80%_86%)] group-hover:[clip-path:circle(150%_at_85%_85%)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">

                  {/* Background Image inside the clipped layer */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-800"
                    />
                    {/* Dark overlay that intensifies on hover to make white text readable */}
                    <div className={`absolute inset-0 ${pillar.isPatient ? 'bg-seiomm-green/5 group-hover:bg-seiomm-dark/70' : 'bg-seiomm-darker/5 group-hover:bg-seiomm-darker/70'
                      } transition-colors duration-700`} />
                  </div>

                  {/* Layer 2 Text (Identical layout, but always light/white) */}
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="mb-6 font-serif text-6xl font-light md:text-7xl text-white/30">
                      {pillar.number}
                    </span>

                    <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4 text-white">
                      {pillar.title}
                    </h3>

                    <p className="mb-8 flex-grow leading-relaxed text-white/80">
                      {pillar.description}
                    </p>

                    <span className="link-underline flex items-center gap-2 font-medium text-sm w-fit text-white">
                      {pillar.linkText}
                      <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
