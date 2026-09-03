import { useEffect } from 'react';
import { CongressHero } from '../components/congress/CongressHero';
import { KeyDates } from '../components/congress/KeyDates';
import { Program } from '../components/congress/Program';
import { Venue } from '../components/congress/Venue';
import { CongressJoinSection } from '../components/congress/CongressJoinSection';

export function Congress() {
  useEffect(() => {
    document.title = 'XXX Congreso Nacional - SEIOMM';
  }, []);
  return (
    <main className="flex-grow">
      <CongressHero />
      <KeyDates />
      <Program />
      <Venue />
      <CongressJoinSection />
    </main>
  );
}
