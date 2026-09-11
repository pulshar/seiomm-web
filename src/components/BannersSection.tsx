import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const banners = [
    {
        id: 1,
        title: 'Banner 1',
        description: 'Espacio reservado para contenido promocional o destacado.',
        image: '/images/pacientes.webp',
        href: '#',
        bgColor: 'bg-seiomm-cyan',
        bgHoveColor: 'bg-seiomm-cyan-hover',
        textColor: 'text-white'
    },
    {
        id: 2,
        title: 'Banner 2',
        description: 'Espacio reservado para contenido promocional o destacado.',
        image: '/images/pacientes.webp',
        href: '#',
        bgColor: 'bg-seiomm-green',
        bgHoveColor: 'bg-seiomm-green-hover',
        textColor: 'text-white'
    },
    {
        id: 3,
        title: 'Banner 3',
        description: 'Espacio reservado para contenido promocional o destacado.',
        image: '/images/pacientes.webp',
        href: '#',
        bgColor: 'bg-seiomm-yellow',
        bgHoveColor: 'bg-seiomm-yellow-hover',
        textColor: 'text-seiomm-darker'
    }
];

export function BannersSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.children) as HTMLElement[];
        if (children.length === 0) return;

        const sliderCenter = slider.getBoundingClientRect().left + slider.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            const childCenter = rect.left + rect.width / 2;
            const distance = Math.abs(sliderCenter - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        window.addEventListener('resize', handleScroll);
        return () => {
            slider.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [handleScroll]);

    const scrollToIndex = (index: number) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.children) as HTMLElement[];
        const targetChild = children[index];
        if (targetChild) {
            const childOffsetLeft = targetChild.offsetLeft;
            const childWidth = targetChild.offsetWidth;
            const sliderWidth = slider.clientWidth;
            const targetScroll = childOffsetLeft - (sliderWidth - childWidth) / 2;
            slider.scrollTo({
                left: Math.max(0, targetScroll),
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-18 md:py-24 lg:py-32 bg-seiomm-gray border-b border-seiomm-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Mobile: Scroll Snap Slider | Desktop: Grid */}
                <div
                    ref={sliderRef}
                    data-lenis-prevent="true"
                    className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar pb-4 md:pb-0"
                >
                    {banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className="w-[85vw] md:w-auto shrink-0 snap-center md:snap-align-none"
                        >
                            <Link
                                to={banner.href}
                                className={`group relative block w-full h-[240px] md:h-[280px] overflow-hidden ${banner.bgColor}`}
                            >
                                {/* Content */}
                                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-center">
                                        <span className={`inline-block px-2.5 py-1 backdrop-blur-md border rounded-sm text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${banner.bgColor !== 'bg-seiomm-yellow' ? 'bg-white/10 border-white/20 text-white' : 'border-seiomm-darker/20 text-seiomm-darker'}`}>
                                            Categoría
                                        </span>
                                        <div className={`self-end w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${banner.bgColor !== 'bg-seiomm-yellow' ? 'bg-white/10 border-white/20 text-white group-hover:bg-white group-hover:text-seiomm-dark' : 'border-seiomm-darker/20 text-seiomm-darker group-hover:bg-seiomm-dark group-hover:text-white'}`}>
                                            <ArrowUpRight className="w-4 h-4 transform" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={`${banner.textColor} text-2xl font-serif font-normal mb-2`}>
                                            {banner.title}
                                        </h3>
                                        <p className={`${banner.textColor}/80 text-sm font-light line-clamp-2`}>
                                            {banner.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Mobile reference dots */}
                <div className="flex md:hidden justify-center items-center gap-2 mt-4 pt-2">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === i
                                ? 'w-6 bg-seiomm-cyan'
                                : 'w-2 bg-seiomm-dark/20 hover:bg-seiomm-dark/40'
                                }`}
                            aria-label={`Ir al banner ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
