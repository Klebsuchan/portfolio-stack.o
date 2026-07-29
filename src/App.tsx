/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Hero } from './components/Hero';
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
import { SiteHealth } from './components/SiteHealth';
import { CookieBanner } from './components/CookieBanner';
import { ContactCTA } from './components/ContactCTA';
import { BackToTop } from './components/BackToTop';
import { useLanguage } from './contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <main className="min-h-screen font-sans selection:bg-neon-purple/30 selection:text-white overflow-x-hidden cursor-default ">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <SiteHealth />
      <CookieBanner />

      
      {/* Global Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neon-purple blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-neon-blue blur-[120px]" />
      </div>
      
      <div className="relative z-10 flex flex-col w-full">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-16 py-6 z-50">
          <div className="flex items-center space-x-2">
            <img src="/stacklogo.png" alt="Stack.O Logo" className="h-16 md:h-20 object-contain" />
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">{t('Agência', 'Agency')}</a>
            <a href="#about" className="hover:text-white transition-colors">{t('Quem Somos', 'About Us')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('Projetos', 'Projects')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('Arsenal', 'Stack')}</a>
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white transition-all"
              title="Toggle Language"
            >
              <Globe size={14} />
              <span className="font-bold">{language === 'pt' ? 'PT' : 'EN'}</span>
            </button>

            <a href="#contact" className="px-4 py-2 border border-neon-blue/50 text-neon-blue text-xs font-bold rounded-full shadow-[0_0_15px_rgba(0,242,255,0.2)] cursor-pointer hover:bg-neon-blue/10 transition-colors">
              {t('INICIE SEU PROJETO', 'START YOUR PROJECT')}
            </a>
          </div>
        </nav>

        <Hero />
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
