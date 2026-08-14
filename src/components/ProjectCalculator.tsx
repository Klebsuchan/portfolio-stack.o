import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Smartphone, Globe, Cpu, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectCalculator() {
  const { t } = useLanguage();
  
  const [platform, setPlatform] = useState<string>('web');
  const [complexity, setComplexity] = useState<number>(2);
  const [aiIntegration, setAiIntegration] = useState<boolean>(false);
  
  // Calculate estimate (fake logic for demo)
  let minWeeks = platform === 'web' ? 1 : platform === 'mobile' ? 2 : 4;
  let maxWeeks = platform === 'web' ? 1 : platform === 'mobile' ? 3 : 5;

  if (complexity === 2) {
    minWeeks += 1;
    maxWeeks += 1;
  } else if (complexity === 3) {
    minWeeks += 2;
    maxWeeks += 2;
  }

  if (aiIntegration) {
    minWeeks += 1;
    maxWeeks += 1;
  }

  const estimateText = minWeeks === maxWeeks ? `${minWeeks}` : `${minWeeks}-${maxWeeks}`;
  
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t("Calculadora", "Calculator")}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            {t("Estime seu ", "Estimate your ")}<span className="text-gradient">{t("Projeto", "Project")}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t("Descubra o tempo estimado e a complexidade da sua ideia antes mesmo de conversarmos.", "Discover the estimated time and complexity of your idea before we even talk.")}
          </p>
        </div>

        <div className="glass-card border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-12">
          {/* Controls */}
          <div className="flex-1 space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-4">{t("Plataforma Principal", "Main Platform")}</label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'web', icon: Globe, label: 'Web / SaaS' },
                  { id: 'mobile', icon: Smartphone, label: 'Mobile App' },
                  { id: 'both', icon: Calculator, label: 'Web + Mobile' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPlatform(item.id)}
                    className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl border transition-all ${
                      platform === item.id 
                        ? 'bg-white/5 border-white text-white' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                    <span className="text-[10px] sm:text-xs font-bold text-center leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-300 mb-4 flex justify-between">
                <span>{t("Nível de Complexidade", "Complexity Level")}</span>
                <span className="text-zinc-400">
                  {complexity === 1 ? t("Simples", "Simple") : complexity === 2 ? t("Moderado", "Moderate") : t("Complexo", "Complex")}
                </span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                value={complexity}
                onChange={(e) => setComplexity(parseInt(e.target.value))}
                className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-zinc-400"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>MVP</span>
                <span>Standard</span>
                <span>Enterprise</span>
              </div>
            </div>

            <div>
              <label className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <Cpu size={20} className={aiIntegration ? "text-white" : "text-gray-500"} />
                  <div>
                    <div className="text-sm font-bold text-white">{t("Integração com IA", "AI Integration")}</div>
                    <div className="text-xs text-gray-400">{t("Chatbots, análise de dados, agentes...", "Chatbots, data analysis, agents...")}</div>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors relative ${aiIntegration ? 'bg-white' : 'bg-gray-700'}`}>
                  <input type="checkbox" className="sr-only" checked={aiIntegration} onChange={() => setAiIntegration(!aiIntegration)} />
                  <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${aiIntegration ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="w-full md:w-[350px] bg-black/40 rounded-2xl border border-white/5 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-zinc-400" />
            
            <Clock size={40} className="text-gray-400 mb-6" />
            
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">{t("Tempo Estimado", "Estimated Time")}</h3>
            <div className="text-5xl font-black text-white mb-2 flex items-baseline gap-2">
              <motion.span 
                key={estimateText}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400"
              >
                ~{estimateText}
              </motion.span>
              <span className="text-xl text-gray-400">{t("semanas", "weeks")}</span>
            </div>
            <p className="text-xs text-gray-500 mb-8">{t("Varia conforme escopo detalhado", "Varies depending on detailed scope")}</p>
            
            <a href="#contact" className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <DollarSign size={16} />
              {t("Solicitar Orçamento Final", "Request Final Quote")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
