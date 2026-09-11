import React from 'react';
import { MoveRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function PatientCTASection() {
    return (
        <section className="py-18 md:py-24 lg:py-32 bg-seiomm-green relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-seiomm-green via-seiomm-green/90 to-transparent z-10" />

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-seiomm-green via-seiomm-green/80 to-transparent z-10 lg:w-2/3" />
                {/* Image background */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 h-full">
                    <img
                        src="/images/pacientes-large.webp"
                        alt="Comunidad"
                        className="w-full h-full object-cover opacity-90 saturate-80"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Content Side */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                                <Heart className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/90 font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                                Área para pacientes
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight"
                        >
                            Información fiable y apoyo para tu salud ósea.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            Encuentra guías prácticas, recomendaciones validadas por especialistas y respuestas claras a tus dudas sobre osteoporosis y enfermedades metabólicas óseas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <Link
                                to="/pacientes"
                                className="group flex items-center gap-2 bg-white text-seiomm-green px-7 py-3.5 rounded-full font-medium hover:bg-zinc-50 transition-all duration-300"
                            >
                                Acceder a recursos
                                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
