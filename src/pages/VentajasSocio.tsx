import { useEffect } from 'react';
import { VentajasHero } from '../components/ventajas/VentajasHero';
import { VentajasGrid } from '../components/ventajas/VentajasGrid';
import { VentajasPasos } from '../components/ventajas/VentajasPasos';
import { VentajasCta } from '../components/ventajas/VentajasCta';

export function VentajasSocio() {
  useEffect(() => {
    document.title = 'Ventajas de ser socio - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <VentajasHero />
      <VentajasGrid />
      <VentajasPasos />
      <VentajasCta />
    </main>
  );
}
