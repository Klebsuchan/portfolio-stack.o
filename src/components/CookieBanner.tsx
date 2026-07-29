import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, Settings2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined
    const consent = localStorage.getItem('stacko-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('stacko-cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('stacko-cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 pointer-events-none flex justify-center"
        >
          <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] w-full max-w-4xl pointer-events-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple" />
            
            {!showPreferences ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0">
                    <Cookie className="text-neon-purple" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{t('Privacidade e Cookies', 'Privacy and Cookies')}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                      {t('Utilizamos cookies para otimizar sua experiência, analisar o tráfego do site e personalizar conteúdo.', 'We use cookies to optimize your experience, analyze site traffic, and personalize content.')} 
                      {t('Ao continuar navegando, você concorda com a nossa ', 'By continuing to browse, you agree to our ')}<a href="#" className="text-neon-blue hover:underline">{t('Política de Privacidade', 'Privacy Policy')}</a>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                  <button 
                    onClick={() => setShowPreferences(true)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 text-sm font-bold hover:bg-white/5 transition-colors"
                  >
                    Preferências
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-neon-blue text-black text-sm font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                  >
                    {t('Aceitar Todos', 'Accept All')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <Settings2 size={18} className="text-neon-blue" />
                    Preferências de Cookies
                  </h3>
                  <button onClick={() => setShowPreferences(false)} className="text-gray-500 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                    <div>
                      <h4 className="text-white text-sm font-bold mb-1">{t('Cookies Estritamente Necessários', 'Strictly Necessary Cookies')}</h4>
                      <p className="text-gray-500 text-xs">{t('Essenciais para o funcionamento do site. Não podem ser desativados.', 'Essential for the website to function. Cannot be disabled.')}</p>
                    </div>
                    <div className="w-10 h-5 bg-neon-blue/50 rounded-full relative opacity-50 cursor-not-allowed">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                    <div>
                      <h4 className="text-white text-sm font-bold mb-1">{t('Cookies de Desempenho e Analytics', 'Performance and Analytics Cookies')}</h4>
                      <p className="text-gray-500 text-xs">{t('Nos ajudam a entender como os visitantes interagem com o site.', 'Helps us understand how visitors interact with the website.')}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-10 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-purple"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                    <div>
                      <h4 className="text-white text-sm font-bold mb-1">{t('Cookies de Marketing', 'Marketing Cookies')}</h4>
                      <p className="text-gray-500 text-xs">{t('Usados para rastrear visitantes em diferentes sites para anúncios relevantes.', 'Used to track visitors across websites for relevant ads.')}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-10 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-purple"></div>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm text-neon-blue hover:text-white font-bold transition-colors"
                  >
                    Aceitar Todos
                  </button>
                  <button 
                    onClick={handleSavePreferences}
                    className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors border border-white/10"
                  >
                    {t('Salvar Preferências', 'Save Preferences')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
