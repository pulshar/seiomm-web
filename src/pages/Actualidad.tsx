import React, { useEffect } from 'react';
import { News } from '../components/Actualidad/News';


export function Actualidad() {
  useEffect(() => {
    document.title = 'Actualidad - SEIOMM';
  }, []);

  return (
    <main className="flex-grow">
      <News />
    </main>
  );
}
