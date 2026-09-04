import React, { useEffect } from 'react';
import { CienciaHero } from '../components/ciencia/CienciaHero';
import { RommSection } from '../components/ciencia/RommSection';
import { BecasSection } from '../components/ciencia/BecasSection';
import { PremiosSection } from '../components/ciencia/PremiosSection';
import { CienciaCta } from '../components/ciencia/CienciaCta';

export function Ciencia() {
  useEffect(() => {
    document.title = 'Investigación y Ciencia - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <CienciaHero />
      <RommSection />
      <BecasSection />
      <PremiosSection />
      <CienciaCta />
    </main>
  );
}
