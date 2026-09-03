import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Train, Plane, Car } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function Venue() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-22 items-end">

          <div className="lg:col-span-6 flex flex-col">
            <SectionHeader
              eyebrow="Sede"
              title={<>Auditorio Víctor Villegas, <span className="text-seiomm-cyan block">Murcia.</span></>}
              description="Uno de los espacios culturales y congresuales de referencia del sureste español, en pleno centro de Murcia y a un paseo de la catedral."
              stacked={true}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-6 py-6 border-t border-seiomm-10">
                <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.6] text-seiomm-cyan" />
                </div>
                <span className="text-sm font-medium text-seiomm-dark">Av. Primero de Mayo, s/n - 30006 Murcia, España</span>
              </div>

              <div className="flex items-center gap-6 py-6 border-t border-seiomm-10">
                <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5 stroke-[1.6] text-seiomm-cyan" />
                </div>
                <span className="text-sm font-medium text-seiomm-dark">Estación de Murcia del Carmen a 10 min a pie</span>
              </div>

              <div className="flex items-center gap-6 py-6 border-t border-seiomm-10">
                <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 stroke-[1.6] text-seiomm-cyan" />
                </div>
                <span className="text-sm font-medium text-seiomm-dark">Aeropuerto de Murcia (RMU) a 25 min en coche</span>
              </div>

              <div className="flex items-center gap-6 py-6 border-t border-seiomm-10">
                <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 stroke-[1.6] text-seiomm-cyan" />
                </div>
                <span className="text-sm font-medium text-seiomm-dark">Aparcamiento propio y salida directa desde la A-30</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[280px] md:h-[360px] lg:h-[500px] w-full bg-seiomm-cyan relative overflow-hidden flex items-center justify-center"
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><span className="relative flex h-24 w-24 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20"></span><span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-700"><MapPin className="w-6 h-6 text-seiomm-cyan" /></span></span></div>

              {/* Bottom texts */}
              <div className="absolute bottom-10 left-10 text-white font-serif font-light italic text-4xl md:text-5xl">
                Murcia
              </div>
              <div className="absolute bottom-10 right-10 text-white/80 font-mono text-xs tracking-widest text-right leading-relaxed uppercase">
                37.9922° N<br />1.1307° O
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
