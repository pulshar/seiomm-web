import React from 'react';

export function MarqueeSection() {
  const words = ['Rigor', 'Comunidad', 'Innovación', 'Investigación', 'Formación'];

  return (
    <section className="py-10 bg-white flex overflow-hidden items-center border-b border-seiomm-10">
      <div className="relative flex overflow-hidden w-full group">
        {/* We use two sets to create a seamless infinite loop. 
            Moving by -50% shifts it exactly one full set. */}
        <div className="flex w-max animate-marquee-infinite">
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-4 md:gap-12 pr-4 md:pr-12 w-max items-center">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span className="text-[36px] md:text-[60px] font-serif font-light text-seiomm-mute/50 px-8">
                    {word}
                  </span>
                  <span className="text-4xl text-seiomm-mute/50">   ·   </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
