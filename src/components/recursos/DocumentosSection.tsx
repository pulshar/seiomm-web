import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DocCard {
  title: string;
  description: string;
  href: string;
  isExternal: boolean;
}

const docs: DocCard[] = [
  {
    title: 'Estatutos de la Sociedad',
    description: 'Documento fundacional y normas de funcionamiento de SEIOMM.',
    href: 'https://seiomm.org/wp-content/uploads/2025/06/Estatutos-SEIOMM-2024.pdf',
    isExternal: true,
  },
  {
    title: 'Historia de SEIOMM',
    description: 'La trayectoria completa de la Sociedad en PDF.',
    href: 'https://seiomm.org/historia/',
    isExternal: true,
  },
  {
    title: 'Revista ROMM · todos los números',
    description: 'Acceso abierto a todos los volúmenes publicados.',
    href: 'https://revistadeosteoporosisymetabolismomineral.com',
    isExternal: true,
  },
  {
    title: 'Alta de socio',
    description: 'Portal oficial de registro de nuevos socios.',
    href: 'https://socios.seiomm.org/register',
    isExternal: true,
  },
];

export function DocumentosSection() {
  return (
    <section className="bg-seiomm-gray py-20 md:py-28 lg:py-32 border-b border-seiomm-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="DOCUMENTOS Y PUBLICACIONES"
          title={
            <>
              Todo lo demás,{' '}
              <span className="text-seiomm-cyan">a un clic.</span>
            </>
          }
        />

        {/* 2x2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {docs.map((doc, idx) => (
            <Link
              key={doc.title}
              to={doc.href}
              target={doc.isExternal ? '_blank' : undefined}
              rel={doc.isExternal ? 'noopener noreferrer' : undefined}
              className={`group bg-white p-6 md:p-10 flex items-start justify-between gap-6 transition-all duration-300 border border-seiomm-10`}
            >
              <div className="min-w-0">
                <h3 className="font-serif text-xl md:text-2xl font-normal text-seiomm-dark mb-2 group-hover:text-seiomm-cyan transition-colors duration-300">
                  {doc.title}
                </h3>
                <p className="text-seiomm-body text-sm leading-relaxed">
                  {doc.description}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-seiomm-dark group-hover:text-white group-hover:bg-seiomm-dark transition-all duration-300 flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
