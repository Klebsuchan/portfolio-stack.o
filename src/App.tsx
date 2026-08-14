/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoTicker } from "./components/LogoTicker";
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { ProjectCalculator } from './components/ProjectCalculator';
import { TechStack } from './components/TechStack';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { AboutUs } from './components/AboutUs';
import { Terminal } from './components/Terminal';
import { BackToTop } from './components/BackToTop';
import { CookieBanner } from './components/CookieBanner';
import { ContactCTA } from './components/ContactCTA';
import { useLanguage } from './contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <main className="min-h-screen font-sans selection:bg-neon-purple/30 selection:text-white overflow-x-hidden cursor-default ">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <CookieBanner />

      
      {/* Global Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-neon-blue blur-[120px]" />
      </div>
      
      <div className="relative z-10 flex flex-col w-full">
        <Header />
        <Hero />
        <LogoTicker />
        <TrustBadges />
        <Stats />
        <Services />
        <Pricing />
        <ProjectCalculator />
        <Process />
        <TechStack />
        <Portfolio />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <Terminal />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}
