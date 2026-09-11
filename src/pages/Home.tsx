import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BentoSection } from '../components/BentoSection';
import { PillarsSection } from '../components/PillarsSection';
import { NewsSection } from '../components/NewsSection';
import { CommunitySection } from '../components/CommunitySection';
import { JoinSection } from '../components/JoinSection';
import { SponsorsMarquee } from '../components/SponsorsWeb';
import { BannersSection } from '../components/BannersSection';
import { QuickAccessSection } from '../components/QuickAccessSection';
// import { PatientCTASection } from '../components/PatientCTASection';

export function Home() {
  useEffect(() => {
    document.title = 'SEIOMM - Sociedad Española de Investigación Ósea y Metabolismo Mineral';
  }, []);
  return (
    <main className="flex-grow">
      <Hero />
      <QuickAccessSection />
      <BentoSection />
      <PillarsSection />
      <NewsSection />
      {/* <PatientCTASection /> */}
      <BannersSection />
      <CommunitySection />
      <SponsorsMarquee />
      <JoinSection />
    </main>
  );
}
