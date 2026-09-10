import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BentoSection } from '../components/BentoSection';
import { PillarsSection } from '../components/PillarsSection';
import { NewsSection } from '../components/NewsSection';
import { CommunitySection } from '../components/CommunitySection';
import { JoinSection } from '../components/JoinSection';
import { SponsorsMarquee } from '../components/SponsorsWeb';

export function Home() {
  useEffect(() => {
    document.title = 'SEIOMM - Sociedad Española de Investigación Ósea y Metabolismo Mineral';
  }, []);
  return (
    <main className="flex-grow">
      <Hero />
      <BentoSection />
      <PillarsSection />
      <NewsSection />
      <CommunitySection />
      <SponsorsMarquee />
      <JoinSection />
    </main>
  );
}
