import React, { useEffect } from 'react';
import { News } from '../components/Actualidad/News';
import { MarqueeSection } from '../components/MarqueeSection';
import { JoinSectionDarkBg } from '../components/JoinSectionDarkBg';


export function Actualidad() {
  useEffect(() => {
    document.title = 'Actualidad - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <News />
      <MarqueeSection />
      <JoinSectionDarkBg />
    </main>
  );
}
