import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    'Todas',
    'Noticias',
    'Entrevistas',
    'Actividades Avaladas',
    'Casos Clínicos',
    'Congresos SEIOMM',
    'Cursos SEIOMM'
];

const allNews = [
    {
        id: 1,
        category: 'Noticias',
        date: '10 Septiembre 2026',
        title: 'Convocatoria abierta para la selección de una agencia de comunicación',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/convocatoria-abierta-para-la-seleccion-de-una-agencia-de-comunicacion/'
    },
    {
        id: 2,
        category: 'Entrevistas',
        date: 'Agosto 2026',
        title: 'Entrevistas SEIOMM · Mitos y realidades sobre la vitamina D',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/entrevistas-seiomm-%c2%b7-mitos-y-realidades-sobre-la-vitamina-d/'
    },
    {
        id: 3,
        category: 'Entrevistas',
        date: 'Agosto 2026',
        title: 'Entrevistas SEIOMM · Osteoporosis pediátrica',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/entrevistas-seiomm-%c2%b7-osteoporosis-pediatrica/'
    },
    {
        id: 4,
        category: 'Entrevistas',
        date: 'Julio 2026',
        title: 'Entrevistas SEIOMM · Día Internacional de la Enfermería',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/entrevistas-seiomm-%c2%b7-dia-internacional-de-la-enfermeria/'
    },
    {
        id: 5,
        category: 'Noticias',
        date: 'Julio 2026',
        title: 'La salud ósea en el espacio: claves tras la misión Artemis II',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/la-salud-osea-en-el-espacio-claves-tras-la-mision-artemis-ii/'
    },
    {
        id: 6,
        category: 'Noticias',
        date: 'Junio 2026',
        title: 'La ROMM: un referente científico en salud ósea',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/la-revista-de-osteoporosis-y-metabolismo-mineralromm-un-referente-cientifico-en-salud-osea/'
    },
    {
        id: 7,
        category: 'Congresos SEIOMM',
        date: 'Mayo 2026',
        title: 'Primer día del Congreso SEIOMM 2025: ciencia, reencuentros y nuevos retos',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/primer-dia-del-congreso-seiomm-2025-ciencia-reencuentros-y-nuevos-retos/'
    },
    {
        id: 8,
        category: 'Cursos SEIOMM',
        date: 'Mayo 2026',
        title: 'Curso de enfermedades minoritarias óseas',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
        href: 'https://seiomm.org/xxix-congreso-nacional-de-seiomm-palma-de-mallorca/'
    }
];

export function News() {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const filteredNews = allNews.filter(
        item => selectedCategory === 'Todas' || item.category === selectedCategory
    );

    return (
        <section className="relative
                bg-[url('/images/bgs/degradado-full.png')]
                bg-cover bg-top bg-no-repeat
                before:absolute before:inset-0
                before:bg-seiomm-gray/75 bg-seiomm-gray pb-20 md:pb-28 lg:pb-32 pt-[calc(4.5rem+75px)] md:pt-[calc(6rem+75px)] lg:pt-[calc(8rem+75px)] border-b border-seiomm-8">
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-seiomm-cyan shrink-0" />
                        <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                            Actualidad SEIOMM
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-seiomm-dark mb-6"
                    >
                        La actualidad que <span className="text-seiomm-cyan">importa.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-seiomm-body text-lg max-w-2xl font-light"
                    >
                        Explora las últimas noticias, comunicados, entrevistas y actividades de nuestra comunidad científica.
                    </motion.p>
                </div>

                {/* Filter Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-nowrap md:flex-wrap items-center gap-3 mb-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:mx-0 md:px-0"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors border ${selectedCategory === category
                                ? 'bg-seiomm-dark text-white border-seiomm-dark'
                                : 'bg-white text-seiomm-body border border-seiomm-10 hover:border-seiomm-dark/60 hover:text-seiomm-dark'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* News Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredNews.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link
                                    // to={item.id === 1 ? "/actualidad/noticia-ejemplo" : item.href}
                                    to="/actualidad/noticia-ejemplo"
                                    // target={item.id === 1 ? undefined : "_blank"}
                                    rel={item.id === 1 ? undefined : "noopener noreferrer"}
                                    className="group flex flex-col gap-6 block h-full"
                                >
                                    {/* Image container */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-seiomm-gray">
                                        <motion.img
                                            layoutId={`image-${item.id}`}
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover image-scale-hover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <span className="text-seiomm-cyan text-xs font-mono font-bold tracking-wider uppercase">
                                                {item.date}
                                            </span>
                                            <span className="text-seiomm-mute text-xs font-mono font-semibold tracking-wider uppercase">
                                                {item.category}
                                            </span>
                                        </div>

                                        <motion.h3
                                            layoutId={`title-${item.id}`}
                                            className="text-2xl font-serif font-normal text-seiomm-dark leading-snug group-hover:text-seiomm-cyan transition-colors mb-4"
                                        >
                                            {item.title}
                                        </motion.h3>

                                        <div
                                            className="link-underline group flex items-center gap-2 text-seiomm-dark font-medium text-sm w-fit"
                                        >
                                            Leer más
                                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredNews.length === 0 && (
                    <div className="text-center py-24 text-seiomm-mute">
                        No hay publicaciones en esta categoría.
                    </div>
                )}
            </div>
        </section>
    );
}
