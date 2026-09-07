import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NoticiaSingle() {
    return (
        <section className="bg-seiomm-gray pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+90px)] md:pt-[calc(6rem+90px)] lg:pt-[calc(8rem+90px)] border-b border-seiomm-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumb / Back */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <Link
                        to="/actualidad"
                        className="inline-flex items-center gap-2 text-sm font-medium text-seiomm-mute hover:text-seiomm-dark transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Volver a Actualidad
                    </Link>
                </motion.div> */}

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {/* Top Header Section (Title & Meta) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-8">
                        <div className="lg:col-span-8">
                            <header>
                                <div className="flex items-center gap-4 mb-6 text-xs font-mono tracking-[0.2em] uppercase">
                                    <span className="flex items-center gap-1.5 text-seiomm-cyan font-bold">
                                        <Tag className="w-4 h-4" />
                                        Noticias
                                    </span>
                                    <span className="text-seiomm-border">|</span>
                                    <span className="flex items-center gap-1.5 text-seiomm-mute font-semibold">
                                        <Calendar className="w-4 h-4" />
                                        10 Septiembre 2026
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-seiomm-dark leading-tighter">
                                    Convocatoria abierta para la selección de una agencia de comunicación
                                </h1>
                            </header>
                        </div>
                    </div>

                    {/* Main Content & Sidebar Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Main Content (Left) */}
                        <div className="lg:col-span-8">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-12">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
                                    alt="Agencia de comunicación"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Body Content */}
                            <div className="prose prose-lg prose-seiomm max-w-none text-seiomm-body font-light leading-relaxed">
                                <p className="text-xl md:text-2xl text-seiomm-dark font-serif mb-8 leading-snug">
                                    La Sociedad Española de Investigación Ósea y del Metabolismo Mineral (SEIOMM) convoca un proceso de selección para la contratación de una agencia externa de comunicación.
                                </p>

                                <p className="mb-6">
                                    El objetivo de esta colaboración es potenciar la visibilidad de las actividades de nuestra sociedad, divulgar el conocimiento científico sobre el metabolismo óseo y mineral entre la población general y mejorar la comunicación interna con nuestros socios.
                                </p>

                                <h3 className="text-2xl font-serif text-seiomm-dark mt-12 mb-4">Requisitos para las candidaturas</h3>
                                <ul className="list-disc pl-6 space-y-3 mb-8">
                                    <li>Experiencia demostrable en el sector salud y sociedades científicas o médicas.</li>
                                    <li>Capacidad para gestionar relaciones con medios de comunicación a nivel nacional.</li>
                                    <li>Estrategia y gestión integral de redes sociales (especialmente X/Twitter y LinkedIn).</li>
                                    <li>Elaboración de notas de prensa, newsletters y materiales de divulgación para pacientes.</li>
                                </ul>

                                <blockquote className="border-l-4 border-seiomm-cyan pl-6 my-10 italic text-xl text-seiomm-dark">
                                    "Queremos acercar la ciencia del metabolismo óseo a la sociedad y dar a conocer el gran trabajo de investigación que realizan nuestros profesionales."
                                </blockquote>

                                <p className="mb-6">
                                    Las agencias interesadas deberán presentar una propuesta estratégica y un presupuesto detallado antes del 15 de octubre de 2026. La selección final se comunicará tras la evaluación por parte de la Junta Directiva de SEIOMM durante su próxima asamblea general.
                                </p>

                                <p>
                                    Para obtener el pliego de condiciones completo o enviar propuestas, por favor diríjanse a nuestro correo electrónico oficial adjuntando el portafolio de la agencia y referencias de proyectos similares.
                                </p>
                            </div>

                            {/* Footer / Share */}
                            <div className="mt-16 pt-8 border-t border-seiomm-dark/10 flex items-center justify-between">
                                <span className="text-sm font-medium text-seiomm-mute">Compartir artículo:</span>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full border border-seiomm-border flex items-center justify-center text-seiomm-mute hover:text-white hover:bg-seiomm-dark hover:border-seiomm-dark transition-all duration-300">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Right) */}
                        <aside className="lg:col-span-4 lg:mt-[-1.825rem]">
                            <div className="sticky top-32 flex flex-col gap-8">
                                <div className="flex items-center gap-3 mb-[-1rem]"
                                >
                                    <span className="w-2 h-2 rounded-full bg-seiomm-cyan" />
                                    <h4 className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                                        Destacados
                                    </h4>
                                </div>

                                {/* ROMM Card */}
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="group relative overflow-hidden flex flex-col justify-end min-h-[216px] p-8 bg-gray-100"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=800&auto=format&fit=crop"
                                            alt="ROMM"
                                            className="w-full h-full object-cover image-scale-hover opacity-90 grayscale group-hover:grayscale-0 transition-[filter] duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-seiomm-darker/90 via-seiomm-darker/40 to-transparent" />
                                    <div className="relative z-10  w-full flex flex-col h-full flex-1 justify-between">
                                        <div className="inline-block w-fit rounded-full bg-white/80 px-3.5 py-1 text-[11px] font-mono tracking-wider text-seiomm-soft uppercase font-medium mb-8">Revista ROMM</div>
                                        <div className="flex justify-between items-end gap-6">
                                            <div>
                                                <h3 className="text-2xl font-serif text-white mb-2 leading-snug">Último número publicado</h3>
                                                <p className="text-white/70 text-sm"> Vol 18 · Núm 2 · 2026</p>
                                            </div>
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-seiomm-dark group-hover:bg-seiomm-cyan transition-colors">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>

                                {/* Sin Fisuras Card */}
                                <motion.a
                                    href="#"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="group relative overflow-hidden flex flex-col justify-end min-h-[216px] p-8 bg-seiomm-gray border border-seiomm-dark/10"
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src="/Expo.jpg"
                                            alt="Exposición Sin fisuras"
                                            className="w-full h-full object-cover image-scale-hover opacity-50 mix-blend-multiply grayscale group-hover:grayscale-0 transition-[filter] duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-seiomm-dark/90 via-seiomm-dark/50 to-transparent" />
                                    <div className="relative z-10  w-full flex flex-col h-full flex-1 justify-between">
                                        <div className="inline-block w-fit rounded-full bg-white/80 px-3.5 py-1 text-[11px] font-mono tracking-wider text-seiomm-soft uppercase font-medium mb-8">Exposición Fotográfica</div>
                                        <div className="flex justify-between items-end gap-6">
                                            <div>
                                                <h3 className="text-2xl font-serif text-white mb-2 leading-snug">Sin fisuras</h3>
                                                <p className="text-white/70 text-sm">Un homenaje visual dedicado a visibilizar y reconocer a las personas que conviven con la osteoporosis.</p>
                                            </div>
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-seiomm-dark group-hover:bg-seiomm-cyan transition-colors flex-shrink-0">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>

                            </div>
                        </aside>

                    </div>
                </motion.article>
            </div>
        </section>
    );
}
