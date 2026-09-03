import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

export function CongressJoinSection() {
  return (
    <section className="py-18 md:py-24 lg:py-32 bg-seiomm-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Inscripción"
          title={<>Reserva tu plaza en la cita anual de la <span className="text-seiomm-cyan-on-dark">ciencia del hueso.</span></>}
          fontLight
          theme="dark"
          description={
            <div className="flex flex-col gap-8">
              <p className="text-white/80">
                Tarifa reducida disponible hasta el 15 de septiembre de 2026. Los socios SEIOMM disfrutan de condiciones especiales.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="group flex items-center gap-2 bg-white text-seiomm-dark text-sm px-6 py-3 rounded-full font-medium hover:bg-seiomm-cyan-on-dark transition-all duration-300"
                >
                  Inscríbete ahora
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="link-underline group flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors"
                >
                  Secretaría técnica
                  <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
