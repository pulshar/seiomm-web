import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    BookOpen,
    FileText,
    Award,
    ClipboardList,
    Activity,
    Microscope,
    Wrench,
    CalendarDays,
    Users,
    Mic,
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

interface QuickLinkItem {
    id: string;
    title: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
}

const quickLinks: QuickLinkItem[] = [
    {
        id: 'guia-seiomm',
        title: 'Guías SEIOMM',
        category: 'Práctica clínica',
        icon: FileText,
        href: '#'
    },
    {
        id: 'posicionamiento',
        title: 'Documentos de posicionamiento',
        category: 'Consenso nacional',
        icon: ClipboardList,
        href: '#'
    },
    {
        id: 'fls-excellence',
        title: 'Proyecto FLS Excellence',
        category: 'Acreditación',
        icon: Award,
        href: '#'
    },
    {
        id: 'refra',
        title: 'Registro REFRA',
        category: 'Epidemiología',
        icon: Activity,
        href: '#'
    },
    {
        id: 'investigacion',
        title: 'Investigación y Becas',
        category: 'I+D+i',
        icon: Microscope,
        href: '#'
    },
    {
        id: 'romm',
        title: 'Revista ROMM',
        category: 'Publicación oficial',
        icon: BookOpen,
        href: '#'
    },
    {
        id: 'dias-d',
        title: 'Días D',
        category: 'Sensibilización',
        icon: CalendarDays,
        href: '#'
    },
    {
        id: 'seiomm-joven',
        title: 'SEIOMM Joven',
        category: 'Nuevas generaciones',
        icon: Users,
        href: '#'
    },
    {
        id: 'sala-prensa',
        title: 'Sala de prensa',
        category: 'Comunicación',
        icon: Mic,
        href: '#'
    }
];

export function QuickAccessSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<HTMLDivElement>(null);

    // Dynamic left padding to perfectly align with container and dots
    const [leftPadding, setLeftPadding] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            return Math.max(24, Math.round((window.innerWidth - 1340) / 2 + 24));
        }
        return 24;
    });

    // Drag Refs
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const hasMovedRef = useRef(false);

    // Velocity tracking for flick gestures
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(0);
    const velocityRef = useRef(0);

    const [isDragging, setIsDragging] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    // Ensure 100% pixel-perfect alignment with container and dots before paint
    const updateAlignment = useCallback(() => {
        if (markerRef.current) {
            const rect = markerRef.current.getBoundingClientRect();
            const exactLeft = Math.max(24, Math.round(rect.left));
            setLeftPadding(exactLeft);
        }
    }, []);

    useLayoutEffect(() => {
        updateAlignment();
        window.addEventListener('resize', updateAlignment);
        return () => window.removeEventListener('resize', updateAlignment);
    }, [updateAlignment]);

    const updateScrollState = useCallback(() => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

            const cards = sliderRef.current.querySelectorAll('.quick-card-wrapper');
            if (cards.length > 0) {
                const cardWidth = cards.length > 1
                    ? (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
                    : (cards[0] as HTMLElement).offsetWidth || 340;
                const index = Math.round(scrollLeft / cardWidth);
                setActiveIndex(Math.min(quickLinks.length - 1, Math.max(0, index)));
            }
        }
    }, []);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        el.addEventListener('scroll', updateScrollState, { passive: true });
        updateScrollState();

        window.addEventListener('resize', updateScrollState);
        return () => {
            el.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState]);

    // Pointer event handlers with smooth scroll snap
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        // Allow native touch scrolling & CSS scroll snap on mobile/touch devices
        if (e.pointerType === 'touch') return;
        if (e.pointerType !== 'mouse' || e.button !== 0) return;

        const slider = sliderRef.current;
        if (!slider) return;

        isDraggingRef.current = true;
        startXRef.current = e.clientX;
        startScrollLeftRef.current = slider.scrollLeft;
        hasMovedRef.current = false;

        lastXRef.current = e.clientX;
        lastTimeRef.current = performance.now();
        velocityRef.current = 0;

        setIsDragging(true);
        slider.style.scrollBehavior = 'auto';

        try {
            slider.setPointerCapture(e.pointerId);
        } catch {
            // Ignore if pointer capture fails
        }
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current || !sliderRef.current) return;

        const now = performance.now();
        const dt = now - lastTimeRef.current;
        const dx = e.clientX - lastXRef.current;

        if (dt > 0) {
            const instantVelocity = -dx / dt;
            velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6;
        }

        lastXRef.current = e.clientX;
        lastTimeRef.current = now;

        const totalDeltaX = e.clientX - startXRef.current;
        if (Math.abs(totalDeltaX) > 5) {
            hasMovedRef.current = true;
        }

        sliderRef.current.scrollLeft = startScrollLeftRef.current - totalDeltaX;
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);

        const slider = sliderRef.current;
        if (slider) {
            try {
                slider.releasePointerCapture(e.pointerId);
            } catch {
                // Ignore
            }

            slider.style.scrollBehavior = 'smooth';

            const cards = slider.querySelectorAll('.quick-card-wrapper');
            if (cards.length > 0) {
                const cardWidth = cards.length > 1
                    ? (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
                    : (cards[0] as HTMLElement).offsetWidth || 340;

                let targetIndex = Math.round(slider.scrollLeft / cardWidth);

                // If user flicked with momentum, advance to next/prev card
                if (Math.abs(velocityRef.current) > 0.25) {
                    targetIndex = velocityRef.current > 0
                        ? Math.ceil(slider.scrollLeft / cardWidth)
                        : Math.floor(slider.scrollLeft / cardWidth);
                }

                targetIndex = Math.max(0, Math.min(quickLinks.length - 1, targetIndex));
                scrollToIndex(targetIndex);
            }
        }

        setTimeout(() => {
            hasMovedRef.current = false;
        }, 120);
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        if (hasMovedRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const scrollToIndex = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.style.scrollBehavior = 'smooth';
            const cards = sliderRef.current.querySelectorAll('.quick-card-wrapper');
            const targetCard = cards[index] as HTMLElement;
            const firstCard = cards[0] as HTMLElement;
            if (targetCard && firstCard) {
                const targetScroll = targetCard.offsetLeft - firstCard.offsetLeft;
                sliderRef.current.scrollTo({
                    left: Math.max(0, targetScroll),
                    behavior: 'smooth'
                });
            }
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        const targetIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
        scrollToIndex(Math.max(0, Math.min(quickLinks.length - 1, targetIndex)));
    };

    return (
        <section className="py-20 md:py-28 bg-seiomm-gray border-b border-seiomm-8 relative z-20 overflow-hidden">
            {/* Header aligned within standard content container */}
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Invisible alignment marker to guarantee 100% pixel-perfect left edge */}
                <div ref={markerRef} className="w-0 h-0 invisible absolute left-6 top-0 pointer-events-none" />

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full shrink-0 bg-seiomm-cyan" />
                            <span className="text-seiomm-mute font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                                Accesos directos
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-normal text-seiomm-dark leading-tight"
                        >
                            Todo lo que necesitas,<br />
                            <span className="text-seiomm-cyan">a tu alcance.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between lg:justify-end gap-6 lg:max-w-md">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-seiomm-body text-sm md:text-base leading-relaxed"
                        >
                            Acceso directo a las guías clínicas oficiales, consensos multidisciplinares, programas de acreditación y utilidades científicas de la SEIOMM.
                        </motion.p>

                        {/* Navigation buttons */}
                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`bg-white w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none ${canScrollLeft
                                    ? 'border-seiomm-dark/20 text-seiomm-dark hover:bg-seiomm-dark hover:text-white hover:border-seiomm-dark cursor-pointer'
                                    : 'border-seiomm-dark/10 text-seiomm-dark/30 cursor-not-allowed'
                                    }`}
                                aria-label="Anterior recurso"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`bg-white w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none ${canScrollRight
                                    ? 'border-seiomm-dark/20 text-seiomm-dark hover:bg-seiomm-dark hover:text-white hover:border-seiomm-dark cursor-pointer'
                                    : 'border-seiomm-dark/10 text-seiomm-dark/30 cursor-not-allowed'
                                    }`}
                                aria-label="Siguiente recurso"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-bleed right slider: Left-aligned with container, bleeding right to screen edge */}
            <motion.div className="w-full relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <div
                    ref={sliderRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className={`w-full overflow-x-auto hide-scrollbar select-none py-2 ${isDragging ? 'cursor-grabbing select-none' : 'snap-x snap-mandatory cursor-grab'
                        }`}
                    style={{
                        paddingLeft: `${leftPadding}px`,
                        paddingRight: `${leftPadding}px`,
                        scrollPaddingLeft: `${leftPadding}px`,
                        touchAction: 'pan-x pan-y'
                    }}
                >
                    <div className="flex border-t border-l border-seiomm-10 min-w-max">
                        {quickLinks.map((item, index) => (
                            <div
                                key={item.id}
                                className="quick-card-wrapper snap-start w-[290px] sm:w-[330px] md:w-[360px] lg:w-[390px] shrink-0 min-h-[240px] md:min-h-[290px] flex"
                            >
                                <Link
                                    to={item.href}
                                    onClick={handleLinkClick}
                                    draggable={false}
                                    onDragStart={(e) => e.preventDefault()}
                                    className="w-full h-full block"
                                >
                                    {/* Exact requested card structure */}
                                    <div className="group relative p-6 md:p-10 border-r border-b border-seiomm-10 flex flex-col justify-between transition-colors duration-300 hover:bg-seiomm-gray/50 h-full bg-white">
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="w-11 h-11 rounded-full border border-seiomm-cyan/30 bg-seiomm-cyan/5 flex items-center justify-center text-seiomm-cyan transition-transform duration-300 group-hover:scale-105 group-hover:border-seiomm-cyan">
                                                <item.icon className="w-5 h-5 stroke-[1.6]" />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-serif font-normal text-seiomm-dark leading-snug group-hover:text-seiomm-cyan transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                        </div>

                                        <div className="pt-4 flex items-end justify-between">
                                            <span className="font-mono text-seiomm-mute text-xs uppercase">{item.category}</span>
                                            <div className="shrink-0 w-8 h-8 rounded-full border border-seiomm-dark/10 flex items-center justify-center text-seiomm-dark group-hover:bg-seiomm-cyan group-hover:border-seiomm-cyan group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bottom controls aligned with container */}
            <div className="max-w-7xl mx-auto px-6 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Pagination bullets */}
                <div className="flex items-center gap-2">
                    {quickLinks.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === i
                                ? 'w-6 bg-seiomm-cyan'
                                : 'w-2 bg-seiomm-dark/20 hover:bg-seiomm-dark/40'
                                }`}
                            aria-label={`Ir al recurso ${i + 1}`}
                        />
                    ))}
                </div>

                {/* View all button */}
                {/* <Link
                    to="/actualidad"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 border border-seiomm-dark/20 hover:border-seiomm-dark text-seiomm-dark font-medium rounded-full text-sm transition-all duration-300 hover:bg-seiomm-dark hover:text-white"
                >
                    <span>Ver todos los recursos y documentos</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link> */}
            </div>
        </section>
    );
}
