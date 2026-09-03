import { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { MissionVision } from '../components/about/MissionVision';
import { ValuesSection } from '../components/about/ValuesSection';
import { BoardSection } from '../components/about/BoardSection';
import { HistorySection } from '../components/about/HistorySection';
import { JoinSectionDarkBg } from '../components/JoinSectionDarkBg';

export function About() {
  useEffect(() => {
    document.title = 'Sociedad Española de Investigación Ósea y Metabolismo Mineral - SEIOMM';
  }, []);
  return (
    <main className="flex-grow">
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <BoardSection />
      <HistorySection />
      <JoinSectionDarkBg />
    </main>
  );
}
