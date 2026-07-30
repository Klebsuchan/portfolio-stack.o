import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import stackLogo from '../assets/images/stacklogo.png';

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('Agência', 'Agency'), href: '#' },
    { name: t('Quem Somos', 'About Us'), href: '#about' },
    { name: t('Projetos', 'Projects'), href: '#portfolio' },
    { name: t('Arsenal', 'Stack'), href: '#stack' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-16 py-6 z-50">
        <div className="flex items-center space-x-2">
          <img src={stackLogo} alt="Stack.O Logo" className="h-12 md:h-20 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
          
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

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#020204]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-6 p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center space-y-8 text-center w-full px-8">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-neon-blue transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full h-px bg-white/10 my-4"
              />

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }} 
                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-lg uppercase tracking-widest"
              >
                <Globe size={20} />
                <span className="font-bold">Mudar para {language === 'pt' ? 'Inglês (EN)' : 'Português (PT)'}</span>
              </motion.button>
              
              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-sm mt-8 flex items-center justify-center gap-3 px-8 py-4 bg-neon-blue/20 border-2 border-neon-blue text-neon-blue font-bold rounded-xl shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:bg-neon-blue/30 transition-all text-lg uppercase"
              >
                {t('INICIE SEU PROJETO', 'START YOUR PROJECT')}
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
