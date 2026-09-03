import React from 'react';
import { motion } from 'motion/react';

export function MarqueeSection() {
  const words = ['Rigor', 'Comunidad', 'Innovación', 'Investigación', 'Formación'];
  const repeatedWords = [...words, ...words, ...words]; // Repeat enough to fill the screen

  return (
    <section className="py-12 bg-seiomm-gray overflow-hidden flex items-center border-b border-seiomm-10">
      <div className="relative flex whitespace-nowrap w-full">
        <motion.div
          className="flex items-center"
          animate={{ x: [0, -1920] }} // Arbitrary large value, will depend on content size
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 50, // Adjust for speed
          }}
        >
          {repeatedWords.map((word, index) => (
            <React.Fragment key={index}>
              <span className="text-[72px] md:text-[60px] font-serif font-light text-seiomm-mute/50 leading-none px-8">
                {word}
              </span>
              <span className="text-4xl text-seiomm-mute/50">   ·   </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
