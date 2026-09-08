import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../SectionHeader';

const programData = [
  {
    id: "dia1",
    tabLabel: "Mié 28",
    dateFull: "Miércoles 28 de octubre",
    sessions: [
      { time: "09:00", eyebrow: "CONFERENCIA INAUGURAL", title: "El hueso como órgano endocrino: nuevas fronteras", location: "Sala Auditorio" },
      { time: "10:30", eyebrow: "MESA REDONDA", title: "Osteoporosis: nuevas dianas terapéuticas", location: "Sala Auditorio" },
      { time: "12:30", eyebrow: "COMUNICACIONES ORALES", title: "Sesión I · Investigación básica", location: "Sala 2" },
      { time: "16:00", eyebrow: "SIMPOSIO", title: "Enfermedades óseas raras: diagnóstico y abordaje", location: "Sala Auditorio" },
      { time: "18:00", eyebrow: "PÓSTERES", title: "Sesión de pósteres con autores", location: "Hall de exposiciones" }
    ]
  },
  {
    id: "dia2",
    tabLabel: "Jue 29",
    dateFull: "Jueves 29 de octubre",
    sessions: [
      { time: "08:00", eyebrow: "ENCUENTRO", title: "Desayuno con el experto", location: "Sala 3" },
      { time: "08:30", eyebrow: "MESA REDONDA", title: "Mesa 1: Basic-traslacional (Modelos de enfermedad)", location: "Sala Auditorio" },
      { time: "10:15", eyebrow: "MESA REDONDA", title: "Mesa 3: Controversias en osteoporosis", location: "Sala Auditorio" },
      { time: "12:15", eyebrow: "CONFERENCIA MAGISTRAL", title: "The gut-bone axis", location: "Sala Auditorio" },
      { time: "15:30", eyebrow: "MESA REDONDA", title: "Mesa 4: Traslacional", location: "Sala Auditorio" },
      { time: "16:30", eyebrow: "MESA REDONDA", title: "Mesa 5: Osteoporosis Secundaria", location: "Sala Auditorio" }
    ]
  },
  {
    id: "dia3",
    tabLabel: "Vie 30",
    dateFull: "Viernes 30 de octubre",
    sessions: [
      { time: "08:30", eyebrow: "MESA REDONDA", title: "Mesa 6: Tratamiento (Tratamientos cíclicos)", location: "Sala Auditorio" },
      { time: "10:15", eyebrow: "MESA REDONDA", title: "Mesa 7: Enfermedades raras", location: "Sala Auditorio" },
      { time: "12:15", eyebrow: "MESA REDONDA", title: "Mesa 8: Riesgo inminente de fracturas y FLS", location: "Sala Auditorio" },
      { time: "13:15", eyebrow: "MESA REDONDA", title: "Mesa 9: Innovación e Inteligencia artificial", location: "Sala Auditorio" },
      { time: "15:45", eyebrow: "MESA REDONDA", title: "Mesa 10: Documentos de Posicionamiento SEIOMM", location: "Sala Auditorio" },
      { time: "16:45", eyebrow: "CLAUSURA", title: "Clausura del Congreso", location: "Sala Auditorio" }
    ]
  }
];

export function Program() {
  const [activeTab, setActiveTab] = useState(programData[0].id);

  return (
    <section id="programa" className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          eyebrow="Programa científico"
          title={<>Tres días de <span className="text-seiomm-cyan">ciencia en directo.</span></>}
          description="Conferencias, mesas redondas, comunicaciones orales y talleres prácticos. Programa provisional sujeto a confirmación de ponentes."
        />

        <div className="flex flex-nowrap md:flex-wrap items-center gap-3 mb-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:mx-0 md:px-0">
          {programData.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTab(day.id)}
              className={`shrink-0 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === day.id
                ? 'bg-seiomm-darker text-white'
                : 'bg-white text-seiomm-dark border border-seiomm-10 hover:border-seiomm-dark/60'
                }`}
            >
              {day.tabLabel}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {programData.map((day) => (
              day.id === activeTab && (
                <motion.div
                  key={day.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white px-6 md:px-12 py-8 border-b border-seiomm-10">
                    <h3 className="font-serif italic text-xl text-seiomm-mute">{day.dateFull}</h3>
                  </div>
                  <div className="flex flex-col">
                    {day.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-start md:items-center px-6 md:px-12 py-6 md:py-8 border-b border-seiomm-10 gap-4 md:gap-8 bg-white hover:bg-seiomm-gray transition-colors"
                      >
                        <div className="md:w-32 text-2xl md:text-3xl font-serif font-light text-seiomm-cyan shrink-0">
                          {session.time}
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] md:text-xs font-mono font-semibold text-seiomm-mute uppercase tracking-[0.15em] mb-2">
                            {session.eyebrow}
                          </div>
                          <h4 className="font-sans text-lg md:text-xl font-medium text-seiomm-dark leading-snug tracking-normal">
                            {session.title}
                          </h4>
                        </div>
                        <div className="text-sm font-medium text-seiomm-mute md:text-right shrink-0 md:w-48">
                          {session.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
