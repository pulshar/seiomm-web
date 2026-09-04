import React, { useEffect } from 'react';
import { FormacionHero } from '../components/formacion/FormacionHero';
import { CursoDestacadoSection } from '../components/formacion/CursoDestacadoSection';
import { CaminosSection } from '../components/formacion/CaminosSection';
import { FormacionCta } from '../components/formacion/FormacionCta';

export function Formacion() {
  useEffect(() => {
    document.title = 'Formación - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <FormacionHero />
      <CursoDestacadoSection />
      <CaminosSection />
      <FormacionCta />
    </main>
  );
}
