import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  fontLight?: boolean;
  description?: React.ReactNode;
  centered?: boolean;
  theme?: 'light' | 'dark';
  hideDot?: boolean;
  stacked?: boolean;
}

export function SectionHeader({ eyebrow, title, fontLight = false, description, centered = false, theme = 'light', hideDot = false, stacked = false }: SectionHeaderProps) {
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : ''} ${!centered && !stacked ? 'lg:flex-row lg:items-end justify-between' : ''} gap-6 mb-16`}>
      <div className={`max-w-3xl ${centered ? 'mx-auto' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}
        >
          {!hideDot && <span className={`w-2 h-2 rounded-full shrink-0 ${isDark ? 'bg-seiomm-cyan-on-dark' : 'bg-seiomm-cyan'}`} />}
          <span className={`${isDark ? 'text-seiomm-mute' : 'text-seiomm-mute'} font-mono text-xs font-semibold tracking-[0.2em] uppercase`}>
            {eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-5xl font-serif ${fontLight ? 'font-light' : 'font-normal'} ${isDark ? 'text-white' : 'text-seiomm-dark'}`}
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${isDark ? 'text-white/80' : 'text-seiomm-body'} max-w-md text-sm md:text-base leading-relaxed lg:pb-2`}
        >
          {description}
        </motion.div>
      )}
    </div>
  );
}
