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
                viewBox="0 0 150 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="SEIOMM Logo"
            >
                <path
                    d="M70.2407 32.8011C71.565 23.9655 71.2486 16.0039 69.4177 7.08521C67.5841 -1.83346 56.4914 -0.495793 49.5109 1.34852C42.533 3.19284 35.1022 5.55989 28.4219 8.40679C30.8023 9.49515 34.4668 8.79549 37.5362 8.94293C40.6056 9.09037 44.0744 8.86519 47.1867 8.94293C50.299 9.02067 53.4542 8.88396 56.5692 8.94293C60.9655 16.9475 65.6808 24.8689 70.2407 32.8011Z"
                    fill="#FFC614"
                />
                <path
                    d="M24.6689 10.551C19.7069 12.6393 14.0882 15.9553 9.84464 19.3169C5.59842 22.6758 -0.221368 26.9006 0.00649072 32.8008C0.23435 38.701 5.32499 42.9821 9.3219 46.8074C13.3215 50.6301 18.069 53.8791 22.5243 56.927C18.4845 49.6892 13.9488 42.6041 10.1931 35.2134C15.2301 27.2464 19.7873 18.6869 24.6689 10.551Z"
                    fill="#01A0DA"
                />
                <path
                    d="M30.5664 62.8247C34.7992 64.9451 39.3778 67.5803 43.9109 69.0493C48.4413 70.521 55.8507 72.7326 59.853 69.0573C63.8526 65.3821 64.6139 60.7365 66.2786 55.9139C67.946 51.0913 68.8547 44.9096 69.4365 40.0388C64.9088 47.1936 60.6679 54.8202 56.5691 62.2886C53.6713 62.3449 50.6046 62.2135 47.7228 62.2886C44.8411 62.3636 41.6966 62.1465 38.8766 62.2886C36.0565 62.4307 32.6895 61.7417 30.5664 62.8247Z"
                    fill="#95BB0C"
                />
                <path
                    d="M32.2789 12.9293L56.9549 16.2589L66.1935 39.1251L50.7559 58.6616L26.0799 55.332L16.8413 32.4659L32.2789 12.9293Z"
                    fill="#D2D2D2"
                />
                <path
                    d="M35.6778 45.6379H29.7135C29.2286 45.6379 28.9862 45.347 28.9862 44.7651V44.256C28.9862 43.6741 29.2286 43.3832 29.7135 43.3832H35.6778C36.7931 43.3832 37.5932 43.1407 38.0781 42.6558C38.563 42.1709 38.8054 41.5163 38.8054 40.692V39.6009C38.8054 38.6796 38.6842 38.0008 38.4417 37.5643C38.1993 37.0794 37.6901 36.6673 36.9143 36.3278L32.332 34.5822C30.9258 34.0488 29.9802 33.3942 29.4953 32.6184C29.0104 31.794 28.768 30.6788 28.768 29.2725C28.768 25.9267 30.3681 24.2538 33.5685 24.2538H39.1691C39.4115 24.2538 39.6055 24.3508 39.751 24.5448C39.8964 24.6902 39.9692 24.8842 39.9692 25.1266V25.6358C39.9692 26.2177 39.7025 26.5086 39.1691 26.5086H33.5685C32.5017 26.5086 31.7744 26.7511 31.3864 27.236C31.047 27.6724 30.8773 28.1573 30.8773 28.6907V29.7817C30.8773 30.4605 30.9985 30.9697 31.241 31.3091C31.5319 31.6486 32.0895 31.988 32.9139 32.3274L37.4962 34.2185C38.7569 34.7519 39.6055 35.5278 40.0419 36.5461C40.5268 37.5159 40.7693 38.8251 40.7693 40.4737C40.7693 42.3164 40.3329 43.6498 39.46 44.4742C38.6357 45.25 37.375 45.6379 35.6778 45.6379ZM57.9808 36.2551H47.1432V39.6009C47.1432 42.1224 48.21 43.3832 50.3436 43.3832H57.6898C58.2717 43.3832 58.5627 43.6741 58.5627 44.256V44.7651C58.5627 45.0561 58.4657 45.2743 58.2717 45.4197C58.0778 45.5652 57.8838 45.6379 57.6898 45.6379H50.3436C48.6949 45.6379 47.4099 45.1045 46.4886 44.0378C45.5673 42.971 45.1067 41.5163 45.1067 39.6737V30.2181C45.1067 28.3755 45.5673 26.9208 46.4886 25.854C47.4099 24.7872 48.6949 24.2538 50.3436 24.2538H53.4712C55.1684 24.2538 56.4776 24.7872 57.3989 25.854C58.3202 26.9208 58.7809 28.3755 58.7809 30.2181V35.2368C58.7809 35.9157 58.5142 36.2551 57.9808 36.2551ZM56.7443 30.2181C56.7443 27.7451 55.6533 26.5086 53.4712 26.5086H50.3436C48.21 26.5086 47.1432 27.7451 47.1432 30.2181V34.0003H56.7443V30.2181Z"
                    fill="#0A1220"
                />
                <path className="transition-[fill] duration-300" d="M93.4552 45.2528H89.5969C87.9482 45.2528 86.6632 44.7195 85.7419 43.6527C84.8206 42.5859 84.3599 41.1312 84.3599 39.2886V29.833C84.3599 27.9904 84.8206 26.5357 85.7419 25.4689C86.6632 24.4021 87.9482 23.8687 89.5969 23.8687H93.4552C95.0554 23.8687 96.3403 24.4021 97.3101 25.4689C98.2799 26.5357 98.7648 27.9904 98.7648 29.833V39.2886C98.7648 41.1312 98.2799 42.5859 97.3101 43.6527C96.3403 44.7195 95.0554 45.2528 93.4552 45.2528ZM96.6555 29.833C96.6555 27.36 95.5887 26.1235 93.4552 26.1235H89.5969C87.4633 26.1235 86.3965 27.36 86.3965 29.833V39.2158C86.3965 41.7373 87.4633 42.9981 89.5969 42.9981H93.4552C95.5887 42.9981 96.6555 41.7373 96.6555 39.2158V29.833Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M127.174 45.2528H126.665C126.374 45.2528 126.156 45.1559 126.011 44.9619C125.914 44.7679 125.865 44.5497 125.865 44.3073V29.833C125.865 27.36 124.701 26.1235 122.374 26.1235H120.919C119.707 26.1235 118.761 26.4629 118.082 27.1418C117.404 27.7722 117.064 28.6692 117.064 29.833V44.3073C117.064 44.5497 116.991 44.7679 116.846 44.9619C116.7 45.1559 116.506 45.2528 116.264 45.2528H115.682C115.149 45.2528 114.882 44.9377 114.882 44.3073V29.833C114.882 27.36 113.718 26.1235 111.391 26.1235H109.791C107.366 26.1235 106.154 27.3115 106.154 29.6875V44.3073C106.154 44.9377 105.839 45.2528 105.208 45.2528H104.699C104.408 45.2528 104.19 45.1559 104.045 44.9619C103.948 44.7679 103.899 44.5497 103.899 44.3073V24.7415C103.899 24.4991 103.948 24.3051 104.045 24.1597C104.19 23.9657 104.408 23.8687 104.699 23.8687H105.208C105.402 23.8687 105.572 23.9172 105.717 24.0142C105.911 24.1112 106.13 24.3536 106.372 24.7415C107.002 24.4021 107.584 24.1839 108.118 24.0869C108.651 23.9415 109.184 23.8687 109.718 23.8687H111.391C113.136 23.8687 114.688 24.5718 116.046 25.978C116.87 25.1537 117.67 24.5961 118.446 24.3051C119.27 24.0142 120.095 23.8687 120.919 23.8687H122.374C124.119 23.8687 125.501 24.4021 126.52 25.4689C127.586 26.5357 128.12 27.9904 128.12 29.833V44.3073C128.12 44.9377 127.805 45.2528 127.174 45.2528Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M77.1291 23.8687H79.2983V44.7579C79.2983 45.2016 78.9386 45.5613 78.4949 45.5613H77.9325C77.4888 45.5613 77.1291 45.2016 77.1291 44.7579V23.8687Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M73.9154 26.0379C73.4716 26.0379 73.1119 25.6782 73.1119 25.2345L73.1119 24.6721C73.1119 24.2284 73.4716 23.8687 73.9154 23.8687H78.7359V25.2345C78.7359 25.6782 78.3762 26.0379 77.9325 26.0379H73.9154Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M79.5394 19.2822C79.5394 20.1696 78.82 20.889 77.9325 20.889C77.0451 20.889 76.3257 20.1696 76.3257 19.2822C76.3257 18.3947 77.0451 17.6753 77.9325 17.6753C78.82 17.6753 79.5394 18.3947 79.5394 19.2822Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M133.098 23.8687C133.922 23.8687 134.746 24.0146 135.571 24.3054C136.339 24.5937 137.132 25.1433 137.948 25.955C138.764 25.1431 139.558 24.5937 140.326 24.3054C141.151 24.0146 141.975 23.8687 142.799 23.8687H144.254C146 23.8688 147.381 24.4025 148.399 25.4691C149.466 26.5358 150 27.9903 150 29.8327V44.3074C150 44.9377 149.685 45.2527 149.055 45.2527H148.545C148.254 45.2527 148.036 45.1555 147.891 44.9616C147.794 44.7677 147.745 44.5497 147.745 44.3074V29.8327C147.745 27.3602 146.581 26.1235 144.254 26.1233H142.799C141.587 26.1234 140.641 26.4628 139.962 27.1414C139.284 27.7717 138.944 28.6692 138.944 29.8327V44.3074C138.944 44.5497 138.871 44.7677 138.726 44.9616C138.581 45.1555 138.386 45.2527 138.144 45.2527H137.753C137.511 45.2527 137.317 45.1556 137.171 44.9616C137.026 44.7677 136.953 44.5497 136.953 44.3074V29.8327C136.953 28.6691 136.613 27.7717 135.935 27.1414C135.256 26.4627 134.31 26.1233 133.098 26.1233H131.643C129.316 26.1235 128.152 27.3601 128.152 29.8327V44.3074C128.152 44.5498 128.103 44.7677 128.006 44.9616C127.861 45.1555 127.643 45.2527 127.352 45.2527H126.843C126.212 45.2527 125.897 44.9377 125.897 44.3074V29.8327C125.897 27.9903 126.431 26.5359 127.498 25.4691C128.516 24.4025 129.897 23.8688 131.643 23.8687H133.098Z" fill={dynamicFill} />
            </svg>
            <svg
                className={`transition-[width] duration-300 ${effectiveIsScrolled ? 'w-[90px]' : 'w-[90px] md:w-[120px]'
                    }`}
                viewBox="0 0 150 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="SEIOMM Logo"
            >
                <path
                    d="M70.2407 32.8011C71.565 23.9655 71.2486 16.0039 69.4177 7.08521C67.5841 -1.83346 56.4914 -0.495793 49.5109 1.34852C42.533 3.19284 35.1022 5.55989 28.4219 8.40679C30.8023 9.49515 34.4668 8.79549 37.5362 8.94293C40.6056 9.09037 44.0744 8.86519 47.1867 8.94293C50.299 9.02067 53.4542 8.88396 56.5692 8.94293C60.9655 16.9475 65.6808 24.8689 70.2407 32.8011Z"
                    fill="#FFC614"
                />
                <path
                    d="M24.6689 10.551C19.7069 12.6393 14.0882 15.9553 9.84464 19.3169C5.59842 22.6758 -0.221368 26.9006 0.00649072 32.8008C0.23435 38.701 5.32499 42.9821 9.3219 46.8074C13.3215 50.6301 18.069 53.8791 22.5243 56.927C18.4845 49.6892 13.9488 42.6041 10.1931 35.2134C15.2301 27.2464 19.7873 18.6869 24.6689 10.551Z"
                    fill="#01A0DA"
                />
                <path
                    d="M30.5664 62.8247C34.7992 64.9451 39.3778 67.5803 43.9109 69.0493C48.4413 70.521 55.8507 72.7326 59.853 69.0573C63.8526 65.3821 64.6139 60.7365 66.2786 55.9139C67.946 51.0913 68.8547 44.9096 69.4365 40.0388C64.9088 47.1936 60.6679 54.8202 56.5691 62.2886C53.6713 62.3449 50.6046 62.2135 47.7228 62.2886C44.8411 62.3636 41.6966 62.1465 38.8766 62.2886C36.0565 62.4307 32.6895 61.7417 30.5664 62.8247Z"
                    fill="#95BB0C"
                />
                <path
                    d="M32.2789 12.9293L56.9549 16.2589L66.1935 39.1251L50.7559 58.6616L26.0799 55.332L16.8413 32.4659L32.2789 12.9293Z"
                    fill="#D2D2D2"
                />
                <path d="M53.5353 24.2229C55.232 24.223 56.5408 24.7561 57.462 25.8225C58.3833 26.8893 58.8448 28.3442 58.8448 30.1868V35.2053C58.8448 35.8842 58.5775 36.2239 58.0441 36.2239H47.2072V39.5696C47.2072 42.0911 48.2738 43.3518 50.4073 43.3518H57.7531C58.3349 43.3518 58.6261 43.643 58.6261 44.2249V44.7336C58.6261 45.0246 58.529 45.2434 58.3351 45.3889C58.1412 45.5342 57.9469 45.6067 57.7531 45.6067H50.4073C48.7587 45.6067 47.4732 45.0729 46.5519 44.0061C45.6309 42.9394 45.1701 41.485 45.17 39.6428V30.1868C45.1701 28.3442 45.6306 26.8893 46.5519 25.8225C47.4732 24.7557 48.7587 24.2229 50.4073 24.2229H53.5353ZM50.4073 26.4778C48.2738 26.4778 47.2072 27.7139 47.2072 30.1868V33.969H56.8077V30.1868C56.8077 27.714 55.717 26.478 53.5353 26.4778H50.4073Z" fill="#0A1220" />
                <path d="M40.3839 16.9126C41.2311 16.9126 41.9094 17.0318 42.3995 17.2886C42.8948 17.548 43.1798 17.9273 43.1798 18.4272C43.1797 18.693 43.0847 18.9254 42.8976 19.1128L42.8966 19.1118C42.7238 19.3066 42.4868 19.3959 42.2111 19.396C41.9026 19.396 41.5778 19.3253 41.2394 19.1899L41.2286 19.1851C40.9428 19.0517 40.5677 18.98 40.0948 18.98C39.4205 18.9801 38.8036 19.2163 38.2384 19.7007L38.2355 19.7036C37.6974 20.1456 37.3058 21.0072 37.3058 22.186V23.6587H39.9425C40.2496 23.6587 40.5136 23.7514 40.6954 23.9663C40.8717 24.1747 40.9425 24.4658 40.9425 24.8042V25.314C40.9424 25.6164 40.8189 25.8839 40.5929 26.1099C40.4125 26.2902 40.1929 26.3862 39.9425 26.3862H37.3058V44.6606C37.3058 44.9463 37.2194 45.2075 37.048 45.436C36.8752 45.6664 36.6506 45.8071 36.3781 45.8071H35.9425C35.6692 45.8071 35.4383 45.7036 35.2863 45.4839C35.1436 45.2776 35.087 44.9925 35.087 44.6606V26.3862H33.1056C32.8218 26.3862 32.5758 26.2994 32.4064 26.0962C32.2429 25.9 32.1779 25.6276 32.1779 25.314V24.8042C32.1779 24.4691 32.2417 24.1808 32.4015 23.9731C32.5689 23.7556 32.8163 23.6587 33.1056 23.6587H35.087V22.1128C35.0871 20.9774 35.3058 20.0208 35.756 19.2554L35.757 19.2534C36.2255 18.4726 36.8642 17.8899 37.67 17.5093C38.4699 17.1102 39.376 16.9126 40.3839 16.9126Z" fill="#0A1220" />
                <path className="transition-[fill] duration-300" d="M93.4552 45.2528H89.5969C87.9482 45.2528 86.6632 44.7195 85.7419 43.6527C84.8206 42.5859 84.3599 41.1312 84.3599 39.2886V29.833C84.3599 27.9904 84.8206 26.5357 85.7419 25.4689C86.6632 24.4021 87.9482 23.8687 89.5969 23.8687H93.4552C95.0554 23.8687 96.3403 24.4021 97.3101 25.4689C98.2799 26.5357 98.7648 27.9904 98.7648 29.833V39.2886C98.7648 41.1312 98.2799 42.5859 97.3101 43.6527C96.3403 44.7195 95.0554 45.2528 93.4552 45.2528ZM96.6555 29.833C96.6555 27.36 95.5887 26.1235 93.4552 26.1235H89.5969C87.4633 26.1235 86.3965 27.36 86.3965 29.833V39.2158C86.3965 41.7373 87.4633 42.9981 89.5969 42.9981H93.4552C95.5887 42.9981 96.6555 41.7373 96.6555 39.2158V29.833Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M127.174 45.2528H126.665C126.374 45.2528 126.156 45.1559 126.011 44.9619C125.914 44.7679 125.865 44.5497 125.865 44.3073V29.833C125.865 27.36 124.701 26.1235 122.374 26.1235H120.919C119.707 26.1235 118.761 26.4629 118.082 27.1418C117.404 27.7722 117.064 28.6692 117.064 29.833V44.3073C117.064 44.5497 116.991 44.7679 116.846 44.9619C116.7 45.1559 116.506 45.2528 116.264 45.2528H115.682C115.149 45.2528 114.882 44.9377 114.882 44.3073V29.833C114.882 27.36 113.718 26.1235 111.391 26.1235H109.791C107.366 26.1235 106.154 27.3115 106.154 29.6875V44.3073C106.154 44.9377 105.839 45.2528 105.208 45.2528H104.699C104.408 45.2528 104.19 45.1559 104.045 44.9619C103.948 44.7679 103.899 44.5497 103.899 44.3073V24.7415C103.899 24.4991 103.948 24.3051 104.045 24.1597C104.19 23.9657 104.408 23.8687 104.699 23.8687H105.208C105.402 23.8687 105.572 23.9172 105.717 24.0142C105.911 24.1112 106.13 24.3536 106.372 24.7415C107.002 24.4021 107.584 24.1839 108.118 24.0869C108.651 23.9415 109.184 23.8687 109.718 23.8687H111.391C113.136 23.8687 114.688 24.5718 116.046 25.978C116.87 25.1537 117.67 24.5961 118.446 24.3051C119.27 24.0142 120.095 23.8687 120.919 23.8687H122.374C124.119 23.8687 125.501 24.4021 126.52 25.4689C127.586 26.5357 128.12 27.9904 128.12 29.833V44.3073C128.12 44.9377 127.805 45.2528 127.174 45.2528Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M77.1291 23.8687H79.2983V44.7579C79.2983 45.2016 78.9386 45.5613 78.4949 45.5613H77.9325C77.4888 45.5613 77.1291 45.2016 77.1291 44.7579V23.8687Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M73.9154 26.0379C73.4716 26.0379 73.1119 25.6782 73.1119 25.2345L73.1119 24.6721C73.1119 24.2284 73.4716 23.8687 73.9154 23.8687H78.7359V25.2345C78.7359 25.6782 78.3762 26.0379 77.9325 26.0379H73.9154Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M79.5394 19.2822C79.5394 20.1696 78.82 20.889 77.9325 20.889C77.0451 20.889 76.3257 20.1696 76.3257 19.2822C76.3257 18.3947 77.0451 17.6753 77.9325 17.6753C78.82 17.6753 79.5394 18.3947 79.5394 19.2822Z" fill={dynamicFill} />
                <path className="transition-[fill] duration-300" d="M133.098 23.8687C133.922 23.8687 134.746 24.0146 135.571 24.3054C136.339 24.5937 137.132 25.1433 137.948 25.955C138.764 25.1431 139.558 24.5937 140.326 24.3054C141.151 24.0146 141.975 23.8687 142.799 23.8687H144.254C146 23.8688 147.381 24.4025 148.399 25.4691C149.466 26.5358 150 27.9903 150 29.8327V44.3074C150 44.9377 149.685 45.2527 149.055 45.2527H148.545C148.254 45.2527 148.036 45.1555 147.891 44.9616C147.794 44.7677 147.745 44.5497 147.745 44.3074V29.8327C147.745 27.3602 146.581 26.1235 144.254 26.1233H142.799C141.587 26.1234 140.641 26.4628 139.962 27.1414C139.284 27.7717 138.944 28.6692 138.944 29.8327V44.3074C138.944 44.5497 138.871 44.7677 138.726 44.9616C138.581 45.1555 138.386 45.2527 138.144 45.2527H137.753C137.511 45.2527 137.317 45.1556 137.171 44.9616C137.026 44.7677 136.953 44.5497 136.953 44.3074V29.8327C136.953 28.6691 136.613 27.7717 135.935 27.1414C135.256 26.4627 134.31 26.1233 133.098 26.1233H131.643C129.316 26.1235 128.152 27.3601 128.152 29.8327V44.3074C128.152 44.5498 128.103 44.7677 128.006 44.9616C127.861 45.1555 127.643 45.2527 127.352 45.2527H126.843C126.212 45.2527 125.897 44.9377 125.897 44.3074V29.8327C125.897 27.9903 126.431 26.5359 127.498 25.4691C128.516 24.4025 129.897 23.8688 131.643 23.8687H133.098Z" fill={dynamicFill} />
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
                                                        className="w-fit text-seiomm-dark hover:text-seiomm-cyan transition-colors font-medium text-[15px] flex items-center gap-2 py-1"
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
                                                            className="text-base font-medium text-seiomm-body hover:text-seiomm-cyan transition-colors"
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
