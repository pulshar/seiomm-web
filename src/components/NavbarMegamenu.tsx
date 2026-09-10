import React, { useState, useEffect, memo } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {
        name: 'Seiomm',
        href: '/quienes-somos',
        featured: {
            title: 'Conoce SEIOMM',
            desc: 'Nuestra historia, misión y la estructura organizativa de la sociedad.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
            href: '/quienes-somos'
        },
        subLinks: [
            { name: 'Junta Directiva', href: '/quienes-somos' },
            { name: 'Estatutos', href: '#' },
            { name: 'Representantes autonómicos', href: '#' },
            { name: 'Comité científico e investigación', href: '#' },
            { name: 'Grupos de investigación', href: '#' },
            { name: 'Declaraciones de interés científico', href: '#' },
            { name: 'La FEIOMM', href: '#' },
            { name: 'Nuestra historia', href: '#' },
            { name: 'Contacto', href: '#' },
        ]
    },
    {
        name: 'Investigación',
        href: '#',
        featured: {
            title: 'Avanzando en la ciencia',
            desc: 'Apoyo a la investigación, becas y la revista oficial ROMM.',
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop',
            href: '#'
        },
        subLinks: [
            { name: 'Investigación', href: '#' },
            { name: 'Grupos de investigación', href: '#' },
            { name: 'Proyectos', href: '#' },
            { name: 'Registro REFRA', href: '#' },
            { name: 'Becas', href: '#' },
            { name: 'Premios', href: '#' },
            { name: 'ROMM', href: '#' },
            { name: 'Para pacientes', href: '/pacientes' },
        ]
    },
    {
        name: 'Formación',
        href: '/congreso',
        featured: {
            title: 'Formación continuada',
            desc: 'Congresos, cursos y recursos audiovisuales para especialistas.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
            href: '/congreso'
        },
        subLinks: [
            { name: 'Cursos', href: '#' },
            { name: 'Congreso SEIOMM', href: '/congreso' },
            { name: 'Congresos anteriores', href: '#' },
            { name: 'Ponencias y vídeos', href: '#' },
            { name: 'Casos clínicos', href: '#' },
        ]
    },
    {
        name: 'Recursos',
        href: '#',
        featured: {
            title: 'Herramientas clínicas',
            desc: 'Guías, documentos de consenso y enlaces de interés.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
            href: '#'
        },
        subLinks: [
            { name: 'Guías clínicas', href: '#' },
            { name: 'Documentos SEIOMM', href: '#' },
            { name: 'Herramientas', href: '#' },
            { name: 'Publicaciones', href: '#' },
            { name: 'AEMPS / EMA', href: '#' },
            { name: 'Recursos externos', href: '#' },
        ]
    },
    {
        name: 'Actualidad',
        href: '/actualidad',
        featured: {
            title: 'Últimas noticias',
            desc: 'Mantente al día de la actualidad, entrevistas y formación.',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
            href: '/actualidad'
        },
        subLinks: [
            { name: 'Noticias', href: '/actualidad' },
            { name: 'Ciencia', href: '/actualidad' },
            { name: 'Formación', href: '/actualidad' },
            { name: 'Entrevistas', href: '/actualidad' },
            { name: 'Salud ósea', href: '/actualidad' },
        ]
    },
    {
        name: 'Socios',
        href: '#',
        featured: {
            title: 'Comunidad SEIOMM',
            desc: 'Únete a nuestra sociedad y accede a ventajas y área privada.',
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
            href: '#'
        },
        subLinks: [
            { name: 'Hazte socio', href: '#' },
            { name: 'Ventajas', href: '#' },
            { name: 'Cuotas', href: '#' },
            { name: 'Área privada', href: '#' },
            { name: 'Actualiza tus datos', href: '#' },
        ]
    },
];

interface LogoProps {
    effectiveIsScrolled: boolean;
}

/**
 * Memoized Logo SVG to avoid re-instantiating 12 SVG path Virtual DOM nodes
 * on unrelated state changes (like mobile menu open/close).
 */
const SeiommLogo = memo(function SeiommLogo({ effectiveIsScrolled }: LogoProps) {
    const dynamicFill = effectiveIsScrolled ? '#0A1220' : '#FFFFFF';

    return (
        <div className="flex items-center gap-6">
            <svg
                className={`transition-[width] duration-300 ${effectiveIsScrolled ? 'w-[90px]' : 'w-[90px] md:w-[120px]'
                    }`}
                viewBox="0 0 192 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="SEIOMM Logo"
            >
                <g>
                    <path d="M87.4261 40.8264C89.0743 29.8291 88.6806 19.9195 86.4018 8.81871C84.1195 -2.28204 70.3128 -0.617096 61.6244 1.67846C52.9394 3.97402 43.6904 6.9202 35.3757 10.4636C38.3385 11.8183 42.8996 10.9474 46.72 11.1309C50.5404 11.3145 54.8579 11.0342 58.7316 11.1309C62.6054 11.2277 66.5325 11.0575 70.4096 11.1309C75.8816 21.0939 81.7506 30.9535 87.4261 40.8264Z" fill="#FFC614" />
                    <path d="M30.7045 13.1329C24.5285 15.7321 17.5351 19.8594 12.2533 24.0435C6.96815 28.2242 -0.275529 33.4826 0.00807877 40.8264C0.291687 48.1702 6.62782 53.4986 11.6026 58.2599C16.5808 63.0179 22.4899 67.0618 28.0352 70.8555C23.007 61.8467 17.3616 53.0282 12.687 43.8293C18.9564 33.913 24.6286 23.2594 30.7045 13.1329Z" fill="#01A0DA" />
                    <path d="M38.0449 78.1958C43.3133 80.835 49.0122 84.1149 54.6543 85.9433C60.2931 87.7751 69.5154 90.5278 74.4969 85.9533C79.475 81.3789 80.4226 75.5966 82.4946 69.5942C84.57 63.5917 85.7011 55.8976 86.4251 49.835C80.7896 58.7403 75.5112 68.2328 70.4096 77.5285C66.8027 77.5986 62.9857 77.4351 59.3989 77.5285C55.8121 77.6219 51.8983 77.3517 48.3883 77.5285C44.8782 77.7053 40.6875 76.8479 38.0449 78.1958Z" fill="#95BB0C" />
                    <path d="M40.1763 16.0925L70.8897 20.2367L82.3886 48.6974L63.1741 73.0139L32.4606 68.8697L20.9618 40.4089L40.1763 16.0925Z" fill="#D2D2D2" />
                </g>
                <g className="transition-[fill] duration-300" fill={dynamicFill}>
                    <path d="M116.321 56.3248H111.518C109.466 56.3248 107.867 55.6609 106.72 54.3331C105.573 53.0053 105 51.1947 105 48.9013V37.1323C105 34.8388 105.573 33.0282 106.72 31.7004C107.867 30.3726 109.466 29.7087 111.518 29.7087H116.321C118.312 29.7087 119.912 30.3726 121.119 31.7004C122.326 33.0282 122.929 34.8388 122.929 37.1323V48.9013C122.929 51.1947 122.326 53.0053 121.119 54.3331C119.912 55.6609 118.312 56.3248 116.321 56.3248ZM120.304 37.1323C120.304 34.0542 118.976 32.5152 116.321 32.5152H111.518C108.863 32.5152 107.535 34.0542 107.535 37.1323V48.8107C107.535 51.9491 108.863 53.5184 111.518 53.5184H116.321C118.976 53.5184 120.304 51.9491 120.304 48.8107V37.1323Z" />

                    <path d="M158.29 56.3248H157.656C157.294 56.3248 157.022 56.2041 156.841 55.9627C156.72 55.7213 156.66 55.4497 156.66 55.1479V37.1323C156.66 34.0542 155.211 32.5152 152.314 32.5152H150.504C148.995 32.5152 147.818 32.9377 146.973 33.7826C146.128 34.5672 145.706 35.6838 145.706 37.1323V55.1479C145.706 55.4497 145.615 55.7213 145.434 55.9627C145.253 56.2041 145.012 56.3248 144.71 56.3248H143.986C143.322 56.3248 142.99 55.9325 142.99 55.1479V37.1323C142.99 34.0542 141.541 32.5152 138.644 32.5152H136.653C133.635 32.5152 132.126 33.9939 132.126 36.9512V55.1479C132.126 55.9325 131.734 56.3248 130.949 56.3248H130.316C129.953 56.3248 129.682 56.2041 129.501 55.9627C129.38 55.7213 129.32 55.4497 129.32 55.1479V30.7951C129.32 30.4933 129.38 30.2519 129.501 30.0709C129.682 29.8294 129.953 29.7087 130.316 29.7087H130.949C131.191 29.7087 131.402 29.7691 131.583 29.8898C131.824 30.0105 132.096 30.3123 132.398 30.7951C133.182 30.3726 133.907 30.101 134.57 29.9803C135.234 29.7993 135.898 29.7087 136.562 29.7087H138.644C140.817 29.7087 142.748 30.5839 144.438 32.3341C145.464 31.3081 146.46 30.614 147.426 30.2519C148.452 29.8898 149.478 29.7087 150.504 29.7087H152.314C154.487 29.7087 156.207 30.3726 157.475 31.7004C158.803 33.0282 159.466 34.8388 159.466 37.1323V55.1479C159.466 55.9325 159.074 56.3248 158.29 56.3248Z" />

                    <path d="M96 29.7087H98.7V55.7087C98.7 56.261 98.2523 56.7087 97.7 56.7087H97C96.4477 56.7087 96 56.261 96 55.7087V29.7087Z" />

                    <path d="M92 32.4087C91.4477 32.4087 91 31.961 91 31.4087L91 30.7087C91 30.1564 91.4477 29.7087 92 29.7087H98V31.4087C98 31.961 97.5523 32.4087 97 32.4087H92Z" />

                    <path d="M99 24C99 25.1046 98.1046 26 97 26C95.8954 26 95 25.1046 95 24C95 22.8954 95.8954 22 97 22C98.1046 22 99 22.8954 99 24Z" />

                    <path d="M165.663 29.7087C166.689 29.7088 167.715 29.8896 168.741 30.2517C169.698 30.6106 170.684 31.2958 171.7 32.3064C172.716 31.2958 173.702 30.6106 174.659 30.2517C175.685 29.8896 176.711 29.7088 177.737 29.7087H179.548C181.72 29.7087 183.441 30.3722 184.709 31.7C186.037 33.0277 186.7 34.8391 186.7 37.1326V55.1482C186.7 55.9326 186.308 56.3249 185.523 56.325H184.889C184.527 56.325 184.256 56.204 184.075 55.9626C183.954 55.7213 183.893 55.4498 183.893 55.1482V37.1326C183.893 34.0545 182.445 32.5154 179.548 32.5154H177.737C176.228 32.5154 175.052 32.9381 174.207 33.783C173.362 34.5676 172.939 35.6841 172.939 37.1326V55.1482C172.939 55.4498 172.849 55.7213 172.668 55.9626C172.487 56.2041 172.245 56.325 171.943 56.325H171.457C171.155 56.325 170.913 56.2041 170.732 55.9626C170.551 55.7213 170.461 55.4498 170.461 55.1482V37.1326C170.461 35.6841 170.038 34.5676 169.193 33.783C168.348 32.9381 167.172 32.5154 165.663 32.5154H163.852C160.955 32.5154 159.507 34.0545 159.507 37.1326V55.1482C159.507 55.4498 159.446 55.7213 159.325 55.9626C159.144 56.204 158.873 56.325 158.51 56.325H157.877C157.092 56.3249 156.7 55.9326 156.7 55.1482V37.1326C156.7 34.8391 157.363 33.0277 158.691 31.7C159.959 30.3722 161.68 29.7087 163.852 29.7087H165.663Z" />
                </g>
                <g fill="#0A1220">
                    <path d="M44.4068 56.7088H36.9833C36.3798 56.7088 36.078 56.3467 36.078 55.6225V54.9888C36.078 54.2645 36.3798 53.9024 36.9833 53.9024H44.4068C45.795 53.9024 46.7908 53.6006 47.3943 52.9971C47.9979 52.3935 48.2997 51.5788 48.2997 50.5527V49.1948C48.2997 48.0481 48.1488 47.2031 47.847 46.6599C47.5452 46.0564 46.9115 45.5434 45.9459 45.1209L40.2424 42.9482C38.4921 42.2843 37.3152 41.4695 36.7117 40.5038C36.1082 39.4778 35.8064 38.0897 35.8064 36.3394C35.8064 32.175 37.7981 30.0928 41.7814 30.0928H48.7523C49.0541 30.0928 49.2955 30.2135 49.4766 30.4549C49.6576 30.636 49.7481 30.8774 49.7481 31.1791V31.8129C49.7481 32.5371 49.4162 32.8992 48.7523 32.8992H41.7814C40.4536 32.8992 39.5483 33.201 39.0655 33.8045C38.643 34.3477 38.4318 34.9513 38.4318 35.6152V36.9731C38.4318 37.8181 38.5827 38.4518 38.8844 38.8743C39.2466 39.2967 39.9406 39.7192 40.9667 40.1417L46.6701 42.4955C48.2393 43.1594 49.2955 44.1251 49.8387 45.3925C50.4422 46.5996 50.744 48.2291 50.744 50.2812C50.744 52.5746 50.2008 54.2343 49.1144 55.2603C48.0884 56.226 46.5192 56.7088 44.4068 56.7088Z" />
                    <path d="M72.1666 45.0304H58.6775V49.1948C58.6775 52.3332 60.0052 53.9024 62.6608 53.9024H71.8044C72.5287 53.9024 72.8908 54.2645 72.8908 54.9888V55.6225C72.8908 55.9846 72.7701 56.2562 72.5287 56.4372C72.2873 56.6183 72.0458 56.7088 71.8044 56.7088H62.6608C60.6088 56.7088 59.0094 56.0449 57.8627 54.7172C56.716 53.3894 56.1426 51.5788 56.1426 49.2853V37.5163C56.1426 35.2229 56.716 33.4122 57.8627 32.0845C59.0094 30.7567 60.6088 30.0928 62.6608 30.0928H66.5536C68.666 30.0928 70.2956 30.7567 71.4423 32.0845C72.589 33.4122 73.1624 35.2229 73.1624 37.5163V43.7629C73.1624 44.6079 72.8304 45.0304 72.1666 45.0304ZM70.6275 37.5163C70.6275 34.4383 69.2696 32.8992 66.5536 32.8992H62.6608C60.0052 32.8992 58.6775 34.4383 58.6775 37.5163V42.2239H70.6275V37.5163Z" />
                </g>
                <g className="hidden">
                    <text className="transition-[fill] duration-300 font-mono text-[7px] uppercase" fill={dynamicFill}
                        x="96"
                        y="70"
                    >
                        <tspan x="96" dy="0">Sociedad Española de</tspan>
                        <tspan x="96" dy="10">Investigación Ósea y</tspan>
                        <tspan x="96" dy="10">del Metabolismo Mineral</tspan>
                    </text>
                </g>
            </svg>
            <svg
                className={`transition-[width] duration-300 ${effectiveIsScrolled ? 'w-[90px]' : 'w-[90px] md:w-[120px]'
                    }`}
                viewBox="0 0 192 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="FEIOMM Logo"
            >
                <g>
                    <path d="M87.4261 40.8264C89.0743 29.8291 88.6806 19.9195 86.4018 8.81871C84.1195 -2.28204 70.3128 -0.617096 61.6244 1.67846C52.9394 3.97402 43.6904 6.9202 35.3757 10.4636C38.3385 11.8183 42.8996 10.9474 46.72 11.1309C50.5404 11.3145 54.8579 11.0342 58.7316 11.1309C62.6054 11.2277 66.5325 11.0575 70.4096 11.1309C75.8816 21.0939 81.7506 30.9535 87.4261 40.8264Z" fill="#FFC614" />
                    <path d="M30.7045 13.1329C24.5285 15.7321 17.5351 19.8594 12.2533 24.0435C6.96815 28.2242 -0.275529 33.4826 0.00807877 40.8264C0.291687 48.1702 6.62782 53.4986 11.6026 58.2599C16.5808 63.0179 22.4899 67.0618 28.0352 70.8555C23.007 61.8467 17.3616 53.0282 12.687 43.8293C18.9564 33.913 24.6286 23.2594 30.7045 13.1329Z" fill="#01A0DA" />
                    <path d="M38.0449 78.1958C43.3133 80.835 49.0122 84.1149 54.6543 85.9433C60.2931 87.7751 69.5154 90.5278 74.4969 85.9533C79.475 81.3789 80.4226 75.5966 82.4946 69.5942C84.57 63.5917 85.7011 55.8976 86.4251 49.835C80.7896 58.7403 75.5112 68.2328 70.4096 77.5285C66.8027 77.5986 62.9857 77.4351 59.3989 77.5285C55.8121 77.6219 51.8983 77.3517 48.3883 77.5285C44.8782 77.7053 40.6875 76.8479 38.0449 78.1958Z" fill="#95BB0C" />
                    <path d="M40.1763 16.0925L70.8897 20.2367L82.3886 48.6974L63.1741 73.0139L32.4606 68.8697L20.9618 40.4089L40.1763 16.0925Z" fill="#D2D2D2" />
                </g>
                <g className="transition-[fill] duration-300" fill={dynamicFill}>
                    <path d="M116.321 56.3248H111.518C109.466 56.3248 107.867 55.6609 106.72 54.3331C105.573 53.0053 105 51.1947 105 48.9013V37.1323C105 34.8388 105.573 33.0282 106.72 31.7004C107.867 30.3726 109.466 29.7087 111.518 29.7087H116.321C118.312 29.7087 119.912 30.3726 121.119 31.7004C122.326 33.0282 122.929 34.8388 122.929 37.1323V48.9013C122.929 51.1947 122.326 53.0053 121.119 54.3331C119.912 55.6609 118.312 56.3248 116.321 56.3248ZM120.304 37.1323C120.304 34.0542 118.976 32.5152 116.321 32.5152H111.518C108.863 32.5152 107.535 34.0542 107.535 37.1323V48.8107C107.535 51.9491 108.863 53.5184 111.518 53.5184H116.321C118.976 53.5184 120.304 51.9491 120.304 48.8107V37.1323Z" />

                    <path d="M158.29 56.3248H157.656C157.294 56.3248 157.022 56.2041 156.841 55.9627C156.72 55.7213 156.66 55.4497 156.66 55.1479V37.1323C156.66 34.0542 155.211 32.5152 152.314 32.5152H150.504C148.995 32.5152 147.818 32.9377 146.973 33.7826C146.128 34.5672 145.706 35.6838 145.706 37.1323V55.1479C145.706 55.4497 145.615 55.7213 145.434 55.9627C145.253 56.2041 145.012 56.3248 144.71 56.3248H143.986C143.322 56.3248 142.99 55.9325 142.99 55.1479V37.1323C142.99 34.0542 141.541 32.5152 138.644 32.5152H136.653C133.635 32.5152 132.126 33.9939 132.126 36.9512V55.1479C132.126 55.9325 131.734 56.3248 130.949 56.3248H130.316C129.953 56.3248 129.682 56.2041 129.501 55.9627C129.38 55.7213 129.32 55.4497 129.32 55.1479V30.7951C129.32 30.4933 129.38 30.2519 129.501 30.0709C129.682 29.8294 129.953 29.7087 130.316 29.7087H130.949C131.191 29.7087 131.402 29.7691 131.583 29.8898C131.824 30.0105 132.096 30.3123 132.398 30.7951C133.182 30.3726 133.907 30.101 134.57 29.9803C135.234 29.7993 135.898 29.7087 136.562 29.7087H138.644C140.817 29.7087 142.748 30.5839 144.438 32.3341C145.464 31.3081 146.46 30.614 147.426 30.2519C148.452 29.8898 149.478 29.7087 150.504 29.7087H152.314C154.487 29.7087 156.207 30.3726 157.475 31.7004C158.803 33.0282 159.466 34.8388 159.466 37.1323V55.1479C159.466 55.9325 159.074 56.3248 158.29 56.3248Z" />

                    <path d="M96 29.7087H98.7V55.7087C98.7 56.261 98.2523 56.7087 97.7 56.7087H97C96.4477 56.7087 96 56.261 96 55.7087V29.7087Z" />

                    <path d="M92 32.4087C91.4477 32.4087 91 31.961 91 31.4087L91 30.7087C91 30.1564 91.4477 29.7087 92 29.7087H98V31.4087C98 31.961 97.5523 32.4087 97 32.4087H92Z" />

                    <path d="M99 24C99 25.1046 98.1046 26 97 26C95.8954 26 95 25.1046 95 24C95 22.8954 95.8954 22 97 22C98.1046 22 99 22.8954 99 24Z" />

                    <path d="M165.663 29.7087C166.689 29.7088 167.715 29.8896 168.741 30.2517C169.698 30.6106 170.684 31.2958 171.7 32.3064C172.716 31.2958 173.702 30.6106 174.659 30.2517C175.685 29.8896 176.711 29.7088 177.737 29.7087H179.548C181.72 29.7087 183.441 30.3722 184.709 31.7C186.037 33.0277 186.7 34.8391 186.7 37.1326V55.1482C186.7 55.9326 186.308 56.3249 185.523 56.325H184.889C184.527 56.325 184.256 56.204 184.075 55.9626C183.954 55.7213 183.893 55.4498 183.893 55.1482V37.1326C183.893 34.0545 182.445 32.5154 179.548 32.5154H177.737C176.228 32.5154 175.052 32.9381 174.207 33.783C173.362 34.5676 172.939 35.6841 172.939 37.1326V55.1482C172.939 55.4498 172.849 55.7213 172.668 55.9626C172.487 56.2041 172.245 56.325 171.943 56.325H171.457C171.155 56.325 170.913 56.2041 170.732 55.9626C170.551 55.7213 170.461 55.4498 170.461 55.1482V37.1326C170.461 35.6841 170.038 34.5676 169.193 33.783C168.348 32.9381 167.172 32.5154 165.663 32.5154H163.852C160.955 32.5154 159.507 34.0545 159.507 37.1326V55.1482C159.507 55.4498 159.446 55.7213 159.325 55.9626C159.144 56.204 158.873 56.325 158.51 56.325H157.877C157.092 56.3249 156.7 55.9326 156.7 55.1482V37.1326C156.7 34.8391 157.363 33.0277 158.691 31.7C159.959 30.3722 161.68 29.7087 163.852 29.7087H165.663Z" />
                </g>
                <g fill="#0A1220">
                    <path d="M66.6328 30.1494C68.7451 30.1494 70.3748 30.813 71.5215 32.1406C72.6681 33.4683 73.2421 35.279 73.2422 37.5723V43.8193C73.2422 44.6642 72.9098 45.0868 72.2461 45.0869H58.7568V49.251C58.7568 52.3894 60.0847 53.959 62.7402 53.959H71.8838C72.6079 53.959 72.9697 54.3208 72.9697 55.0449V55.6787C72.9697 56.0406 72.8495 56.3121 72.6084 56.4932C72.367 56.6742 72.1252 56.7656 71.8838 56.7656H62.7402C60.6883 56.7656 59.0891 56.1011 57.9424 54.7734C56.7957 53.4457 56.2217 51.6352 56.2217 49.3418V37.5723C56.2217 35.279 56.7957 33.4683 57.9424 32.1406C59.0891 30.813 60.6884 30.1494 62.7402 30.1494H66.6328ZM62.7402 32.9561C60.0848 32.9561 58.757 34.4945 58.7568 37.5723V42.2803H70.707V37.5723C70.7069 34.4945 69.3486 32.9561 66.6328 32.9561H62.7402Z" />
                    <path d="M50.2646 21.0996C51.3156 21.0996 52.1511 21.2473 52.751 21.5615C53.3559 21.8784 53.6953 22.3363 53.6953 22.9355C53.6953 23.2489 53.5843 23.521 53.3672 23.7432L53.3682 23.7441C53.1632 23.9831 52.8765 24.0928 52.5381 24.0928C52.1616 24.0927 51.7636 24.0057 51.3467 23.8389L51.3369 23.835C50.9727 23.665 50.4984 23.5742 49.9053 23.5742C49.0529 23.5742 48.2733 23.8733 47.5615 24.4834L47.5586 24.4863C46.8741 25.0486 46.3848 26.1374 46.3848 27.6143V29.4961H49.7148C50.0871 29.4961 50.3998 29.608 50.6143 29.8613C50.8233 30.1083 50.9111 30.4574 50.9111 30.873V31.5068C50.9111 31.8687 50.7636 32.1894 50.4902 32.4629C50.2742 32.6789 50.0128 32.793 49.7148 32.793H46.3848V55.5879C46.3848 55.9329 46.2793 56.2474 46.0723 56.5234C45.864 56.8009 45.599 56.9647 45.2793 56.9648H44.7354C44.4089 56.9647 44.1386 56.8431 43.96 56.585C43.7904 56.3401 43.7207 55.9971 43.7207 55.5879V32.793H41.2051C40.8619 32.793 40.5711 32.6891 40.3721 32.4502C40.1788 32.2183 40.0996 31.8918 40.0996 31.5068V30.873C40.0996 30.4611 40.178 30.1154 40.3672 29.8691C40.5643 29.6129 40.8564 29.4961 41.2051 29.4961H43.7207V27.5234C43.7207 26.1159 43.992 24.9345 44.5469 23.9912L44.5479 23.9893C45.1261 23.0256 45.9133 22.3063 46.9072 21.8369C47.8953 21.3437 49.0162 21.0996 50.2646 21.0996ZM47.1641 24.5859C47.1294 24.6239 47.0957 24.6635 47.0625 24.7041C47.0981 24.6606 47.1346 24.6186 47.1719 24.5781L47.1641 24.5859Z" />
                </g>
                <g className="hidden">
                    <text className="transition-[fill] duration-300 font-mono text-[7px] uppercase" fill={dynamicFill}
                        x="96"
                        y="70"
                    >
                        <tspan x="96" dy="0">Fundación Española de</tspan>
                        <tspan x="96" dy="10">Investigación Ósea y</tspan>
                        <tspan x="96" dy="10">del Metabolismo Mineral</tspan>
                    </text>
                </g>
            </svg>
        </div>
    );
});

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hover state for mega menu on desktop
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Click state for accordion on mobile
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDropdownOpen = activeDropdown !== null;
    // Force scrolled style (dark text, white bg) on pages that have a light background at the top
    const isLightPage = !['/', '/congreso'].includes(location.pathname);

    // If dropdown is open or mobile menu is open, force the light theme (solid white) for readability
    const effectiveIsScrolled = isScrolled || isLightPage || isDropdownOpen || isMobileMenuOpen;

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (name: string) => {
        if (activeMobileDropdown === name) setActiveMobileDropdown(null);
        else setActiveMobileDropdown(name);
    };

    const closeMenus = () => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
    };

    return (
        <header
            onMouseLeave={handleMouseLeave}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${effectiveIsScrolled ? 'bg-white/98 backdrop-blur-md py-4 border-b border-seiomm-dark/10 shadow-sm' : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-white group" aria-label="Ir al inicio">
                    <SeiommLogo effectiveIsScrolled={effectiveIsScrolled} />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-7 h-full relative">
                    {navItems.map((item) => {
                        const hasMegaMenu = item.subLinks?.length > 0;

                        return (
                            <div
                                key={item.name}
                                onMouseEnter={() => hasMegaMenu && setActiveDropdown(item.name)}
                                className="h-full flex items-center py-4"
                            >
                                <Link
                                    to={item.href}
                                    onClick={closeMenus}
                                    className={`flex items-center gap-0.5 text-sm font-medium transition-colors ${effectiveIsScrolled
                                        ? 'text-seiomm-body hover:text-seiomm-dark'
                                        : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {item.name}

                                    {hasMegaMenu && (
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>
                            </div>
                        );
                    })}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden xl:flex items-center gap-2">
                    <Link
                        to="https://socios.seiomm.org/login"
                        target="_blank"
                        className={`px-5 py-1.5 rounded-full border text-sm font-medium transition-colors ${effectiveIsScrolled
                            ? 'border-seiomm-dark/50 bg-white text-seiomm-body hover:border-seiomm-dark hover:text-seiomm-dark'
                            : 'border-white/80 text-white/80 hover:border-white hover:text-white'
                            }`}
                    >
                        Área privada
                    </Link>
                    <Link
                        to="https://socios.seiomm.org/register"
                        target="_blank"
                        className={`px-5 py-1.5 rounded-full border text-sm font-medium transition-colors ${effectiveIsScrolled
                            ? 'border-transparent bg-seiomm-cyan text-white hover:bg-seiomm-cyan-hover hover:border-seiomm-cyan-hover'
                            : 'border-transparent bg-white text-seiomm-dark hover:bg-seiomm-cyan-on-dark hover:border-seiomm-cyan-on-dark'
                            }`}
                    >
                        Hazte socio
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden shrink-0 ${effectiveIsScrolled ? 'text-seiomm-dark hover:text-seiomm-cyan' : 'text-white hover:text-gray-100'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="hidden lg:block absolute top-full left-0 w-full bg-white border-t border-seiomm-dark/10 shadow-xl overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-10">
                            {(() => {
                                const activeItem = navItems.find(item => item.name === activeDropdown);
                                if (!activeItem) return null;

                                return (
                                    <div className="flex justify-center gap-20">
                                        {/* Featured Image */}
                                        <div className="border-r border-seiomm-dark/10 pr-20 max-w-[320px]">
                                            <Link to={activeItem.featured.href} onClick={closeMenus} className="group block">

                                                <h4 className="text-xl font-serif font-normal text-seiomm-dark mb-2 group-hover:text-seiomm-cyan transition-colors">
                                                    {activeItem.featured.title}
                                                </h4>
                                                <p className="text-sm text-seiomm-mute leading-relaxed">
                                                    {activeItem.featured.desc}
                                                </p><div className="relative aspect-video w-full overflow-hidden rounded-sm bg-seiomm-gray mt-5">
                                                    <img
                                                        src={activeItem.featured.image}
                                                        className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                                        alt={activeItem.featured.title}
                                                    />
                                                </div>

                                            </Link>
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-[auto_auto] gap-y-2 gap-x-20">
                                                {activeItem.subLinks.map(link => (
                                                    <Link
                                                        key={link.name}
                                                        to={link.href}
                                                        onClick={closeMenus}
                                                        className={`w-fit font-medium flex items-center gap-2 transition-colors ${link.name.toLowerCase().includes("paciente")
                                                            ? "text-[14px] bg-seiomm-green text-white hover:bg-seiomm-green-hover px-5 py-1.5 rounded-full"
                                                            : "text-[15px] text-seiomm-dark hover:text-seiomm-cyan py-1"
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                )
                            })()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'calc(100vh - 80px)' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-y-auto pb-8"
                    >
                        <div className="flex flex-col px-6 py-6 gap-0">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col border-b border-seiomm-dark/10">
                                    <button
                                        onClick={() => toggleMobileDropdown(item.name)}
                                        className="flex items-center justify-between py-5 font-serif text-2xl text-seiomm-dark transition-colors text-left"
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-5 h-5 text-seiomm-mute transition-transform duration-300 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileDropdown === item.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-4 pb-2 pl-4 border-l border-seiomm-10 ml-2 mt-2 mb-6">
                                                    {item.subLinks.map(link => (
                                                        <Link
                                                            key={link.name}
                                                            to={link.href}
                                                            onClick={closeMenus}
                                                            className={`text-base font-medium flex items-center gap-2 transition-colors ${link.name.toLowerCase().includes("paciente")
                                                                ? "w-fit bg-seiomm-green text-white hover:bg-seiomm-green-hover px-5 py-1.5 rounded-full"
                                                                : "text-seiomm-body hover:text-seiomm-cyan"
                                                                }`}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <Link
                                to="https://socios.seiomm.org/login"
                                target="_blank"
                                className={`flex items-center justify-center gap-2 px-5 py-3 mt-6 rounded-full border-2 text-base font-medium ${effectiveIsScrolled ? 'border-seiomm-dark/50 bg-white text-seiomm-body' : 'border-white/50 text-white/80'
                                    }`}
                            >
                                Área privada
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="https://socios.seiomm.org/register"
                                target="_blank"
                                className={`flex items-center justify-center gap-2 px-5 py-3 mt-6 rounded-full border-2 border-transparent text-base font-medium  ${effectiveIsScrolled ? 'bg-seiomm-cyan text-white' : 'bg-white text-seiomm-dark'
                                    }`}
                            >
                                Hazte socio
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
