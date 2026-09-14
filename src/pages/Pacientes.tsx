import React, { useEffect } from 'react';
import { PacientesHero } from '../components/pacientes/PacientesHero';
import { PacientesInfoSection } from '../components/pacientes/PacientesInfoSection';
import { PacientesPillaresSection } from '../components/pacientes/PacientesPillaresSection';
import { PacientesFaqSection } from '../components/pacientes/PacientesFaqSection';
import { PacientesCta } from '../components/pacientes/PacientesCta';

export function Pacientes() {
  useEffect(() => {
    document.title = 'Pacientes - Salud Ósea | SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <PacientesHero />
      <PacientesInfoSection />
      <PacientesPillaresSection />
      <PacientesFaqSection />
      <PacientesCta />
    </main>
  );
}
