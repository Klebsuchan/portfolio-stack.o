import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Server, Cpu, CheckCircle2, ChevronUp, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SiteHealth() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [uptime, setUptime] = useState(99.999);
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly fluctuate uptime slightly
      setUptime(99.998 + Math.random() * 0.002);
      // Randomly fluctuate latency between 8ms and 15ms
      setLatency(Math.floor(8 + Math.random() * 8));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-72 glass-card border border-white/10 p-5 rounded-2xl shadow-2xl mb-2"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-neon-blue" />
                <span className="text-white font-bold text-sm">{t('Saúde do Sistema', 'System Health')}</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-black/40 rounded-xl p-3 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400 font-mono">UPTIME</span>
                  <span className="text-xs text-neon-blue font-bold">{uptime.toFixed(3)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-neon-blue h-1 rounded-full w-[99%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                  <Server size={14} className="text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500 font-mono mb-1">LATENCY</span>
                  <span className="text-sm font-bold text-white">{latency}ms</span>
                </div>
                <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex flex-col items-center justify-center">
                  <Cpu size={14} className="text-gray-400 mb-1" />
                  <span className="text-xs text-gray-500 font-mono mb-1">BUILD</span>
                  <span className="text-sm font-bold text-neon-purple flex items-center gap-1">
                    <CheckCircle2 size={12} /> PASS
                  </span>
                </div>
              </div>
              
              <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-gray-500 font-mono uppercase">{t('Todos os sistemas operacionais', 'All systems operational')}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all group"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
        </span>
        <span className="text-xs font-mono text-gray-300 group-hover:text-white">{t('STATUS DA API', 'API STATUS')}</span>
        <ChevronUp size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
