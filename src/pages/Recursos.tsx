import React, { useEffect } from 'react';
import { RecursosHero } from '../components/recursos/RecursosHero';
import { GuiasClinicasSection } from '../components/recursos/GuiasClinicasSection';
import { DocumentosSection } from '../components/recursos/DocumentosSection';
import { RecursosCta } from '../components/recursos/RecursosCta';

export function Recursos() {
  useEffect(() => {
    document.title = 'Recursos clínicos y documentación - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <RecursosHero />
      <GuiasClinicasSection />
      <DocumentosSection />
      <RecursosCta />
    </main>
  );
}
