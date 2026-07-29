import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax calculations for different layers
  const p1x = useTransform(smoothMouseX, [-1, 1], [-60, 60]);
  const p1y = useTransform(smoothMouseY, [-1, 1], [-60, 60]);
  
  const p2x = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const p2y = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  const p3x = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const p3y = useTransform(smoothMouseY, [-1, 1], [30, -30]);

  const p4x = useTransform(smoothMouseX, [-1, 1], [80, -80]);
  const p4y = useTransform(smoothMouseY, [-1, 1], [-80, 80]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden px-6 md:px-12 lg:px-16 pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,242,255,0.05)_0%,transparent_50%)]"></div>
        
        {/* Parallax Planets & Constellations */}
        <motion.div 
          style={{ x: p1x, y: p1y }}
          className="absolute top-[10%] right-[10%] md:right-[20%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-neon-blue/30 via-neon-purple/10 to-transparent border-2 border-neon-blue/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_120px_rgba(0,242,255,0.4)] opacity-100"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-neon-blue/30 animate-[spin_20s_linear_infinite]">
            <div className="absolute w-3 h-3 bg-neon-blue rounded-full top-[10%] left-[20%] shadow-[0_0_20px_#00f2ff]"></div>
            <div className="absolute w-2 h-2 bg-neon-purple rounded-full bottom-[15%] right-[15%] shadow-[0_0_15px_#bc13fe]"></div>
          </div>
        </motion.div>

        <motion.div 
          style={{ x: p2x, y: p2y }}
          className="absolute bottom-[10%] right-[30%] md:right-[40%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-neon-purple/30 via-neon-blue/10 to-transparent border-2 border-neon-purple/40 backdrop-blur-md shadow-[0_0_100px_rgba(188,19,254,0.4)] opacity-100"
        >
           <div className="absolute w-2 h-2 bg-white rounded-full top-[50%] right-[20%] shadow-[0_0_10px_#fff]"></div>
           <div className="absolute inset-0 rounded-full border-2 border-neon-purple/30 scale-125"></div>
           <div className="absolute inset-0 rounded-full border border-neon-blue/30 scale-150 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
        </motion.div>

        <motion.div 
          style={{ x: p3x, y: p3y }}
          className="absolute top-[25%] left-[40%] w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-neon-blue/40 to-neon-purple/30 border-2 border-neon-blue/30 backdrop-blur-sm opacity-90 shadow-[0_0_40px_rgba(0,242,255,0.3)]"
        />
        
        <motion.div 
          style={{ x: p4x, y: p4y }}
          className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-neon-blue/20 blur-[80px]"
        />

        {/* Floating Stars / Constellation Points */}
        <motion.div style={{ x: p2x, y: p1y }} className="absolute top-[40%] right-[25%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff]"></motion.div>
        <motion.div style={{ x: p1x, y: p2y }} className="absolute top-[20%] right-[40%] w-2.5 h-2.5 bg-neon-blue rounded-full shadow-[0_0_20px_#00f2ff]"></motion.div>
        <motion.div style={{ x: p3x, y: p4y }} className="absolute bottom-[30%] right-[15%] w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_15px_#bc13fe]"></motion.div>
        <motion.div style={{ x: p4x, y: p3y }} className="absolute top-[60%] left-[50%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff] opacity-80"></motion.div>
      </div>

      <div className="relative z-10 w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-6 w-fit"
        >
          Software Architecture & UI/UX
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-[80px] font-black leading-[1.1] md:leading-[0.9] tracking-tight mb-8"
        >
          {t('Transformamos', 'We turn')} <br className="hidden md:block" />
          <span className="text-gradient">{t('ideias em', 'ideas into')}<br className="hidden md:block" /> {t('software.', 'software.')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-gray-400 max-w-[400px] mb-10 leading-relaxed"
        >
          {t(
            'Engenharia full-stack de alta performance para marcas que buscam autoridade digital e código limpo.',
            'High-performance full-stack engineering for brands seeking digital authority and clean code.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="glow-button w-full sm:w-auto px-6 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center group hover:bg-gray-100 transition-colors">
            {t('CONHEÇA A STACK.O', 'DISCOVER STACK.O')}
            <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-gray-400">
            <Code2 size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
