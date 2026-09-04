import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export function BentoSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Ahora en SEIOMM"
          title={
            <>La ciencia y la comunidad, <span className="text-seiomm-cyan">siempre en movimiento.</span></>
          }
          description="Descubre las próximas citas, oportunidades y actividades de SEIOMM. Congresos, formación, becas y otras iniciativas para seguir compartiendo conocimiento y avanzando juntos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Main Large Card */}
          <MotionLink
            to="/congreso"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden min-h-[400px] lg:min-h-[500px] flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
                alt="Congreso"
                className="w-full h-full object-cover image-scale-hover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-seiomm-darker/90 via-seiomm-darker/40 to-transparent" />

            <div className="relative z-10 w-full flex flex-col h-full justify-between">

              <div class="inline-block w-fit rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[11px] font-mono tracking-wider text-white uppercase font-medium mb-8">Congreso</div>
              <div className="flex justify-between items-end gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    XXX Congreso Nacional SEIOMM
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Murcia
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      28-30 octubre 2026
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-seiomm-dark transition-all duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </MotionLink>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6">
            {/* Top Right Card */}
            <MotionLink
              to="/formacion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden flex-1 min-h-[240px] flex flex-col justify-end p-8"
            >
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop"
                  alt="Curso SEIOMM"
                  className="w-full h-full object-cover image-scale-hover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-seiomm-darker/90 via-seiomm-darker/30 to-transparent" />

              <div className="relative z-10  w-full flex flex-col h-full justify-between">
                <div class="inline-block w-fit rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[11px] font-mono tracking-wider text-white uppercase font-medium mb-8">Formación</div>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">
                      Curso SEIOMM
                    </h3>
                    <p className="text-white/80 text-sm">
                      Osteoporosis y otras enfermedades<br />metabólicas óseas
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-seiomm-dark transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </MotionLink>

            {/* Bottom Right Card */}
            <MotionLink
              to="/ciencia"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative overflow-hidden flex-1 min-h-[240px] flex flex-col justify-end p-8 bg-seiomm-cyan"
            >
              <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              >
                {/* Decorative background element mimicking the large '26' */}
                <span className="font-serif text-[190px] leading-none absolute -right-4 -top-8 select-none text-white">
                  26
                </span>
              </div>

              <div className="relative z-10  w-full flex flex-col h-full justify-between">
                <div class="inline-block w-fit rounded-full border border-white/30 bg-white/15 px-3.5 py-1 text-[11px] font-mono tracking-wider text-white uppercase font-medium mb-8">Becas y premios</div>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">
                      Becas y premios 2026
                    </h3>
                    <p className="text-white/90 text-sm">
                      Oportunidades para investigadores
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-seiomm-cyan transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </MotionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
