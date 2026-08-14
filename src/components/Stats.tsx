import { motion, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, Activity, Zap, Code2 } from 'lucide-react';

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(from + (to - from) * easeProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count % 1 === 0 ? count.toFixed(0) : count.toFixed(1)}</span>;
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 relative z-10 bg-[#020204]">
      <div className="w-full">
        <div className="mb-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
          >
            {t("Impacto em Números", "Impact in Numbers")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl"
          >
            {t(
              "Métricas que comprovam a eficiência, escalabilidade e segurança da nossa engenharia de software de ponta.",
              "Metrics that prove the efficiency, scalability, and security of our cutting-edge software engineering."
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[400px]">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-50 transition-opacity">
              <ShieldCheck size={120} className="text-neon-blue" />
            </div>
            <div className="relative z-10">
              <div className="text-xs font-bold tracking-widest uppercase text-white mb-2">{t("Disponibilidade Global", "Global Availability")}</div>
              <div className="text-6xl md:text-8xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-700">
                <Counter to={99.99} />%
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <h3 className="text-xl font-bold mb-2">{t("Uptime Garantido em Contrato", "SLA-Guaranteed Uptime")}</h3>
              <p className="text-gray-400 text-sm">
                {t(
                  "Nossas infraestruturas multi-cloud garantem disponibilidade máxima para que seu negócio nunca pare.",
                  "Our multi-cloud infrastructures guarantee maximum availability so your business never stops."
                )}
              </p>
            </div>
          </motion.div>

          {/* Top Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card md:col-span-2 p-6 flex flex-col justify-center relative overflow-hidden group"
          >
             <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-20 group-hover:opacity-50 transition-opacity">
              <Activity size={80} className="text-neon-purple" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-black font-mono mb-1">
                <Counter to={10} /><span className="text-white">k+</span>
              </div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                {t("Transações / Segundo", "Transactions / Second")}
              </div>
            </div>
          </motion.div>

          {/* Bottom Middle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Zap size={100} className="text-white" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-black font-mono mb-1">
                <Counter to={50} /><span className="text-white">+</span>
              </div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                {t("Projetos Enterprise", "Enterprise Projects")}
              </div>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 flex flex-col justify-center bg-gradient-to-br from-neon-purple/10 to-transparent relative overflow-hidden group border-neon-purple/30"
          >
            <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Code2 size={100} className="text-neon-purple" />
            </div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-black font-mono mb-1 text-white">
                <Counter to={0} />%
              </div>
              <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">
                {t("Dívida Técnica Aceita", "Accepted Tech Debt")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
