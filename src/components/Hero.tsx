import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BlackHole from './originkit/ui/blackhole';

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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-12 lg:px-16 pt-32 md:pt-40">
      {/* Black Hole Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <BlackHole colors={["#00f2ff", "#bc13fe", "#ffffff", "#7000ff", "#38bdf8"]} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020204]/90 via-[#020204]/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-3 py-1 bg-transparent bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-white rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-6 w-fit"
        >
          Software Architecture & UI/UX
        </motion.div>
        
        <h1 className="text-6xl sm:text-7xl md:text-[130px] font-black leading-[1] md:leading-[0.85] tracking-tighter mb-8">          <motion.span             initial="hidden"             animate="visible"             variants={{              hidden: { opacity: 0 },              visible: {                 opacity: 1,                 transition: { staggerChildren: 0.05, delayChildren: 0.2 }               }            }}            className="block"          >            {String(t('Transformamos', 'We turn')).split('').map((char, index) => (              <motion.span                 key={`w1-${index}`}                 variants={{                   hidden: { opacity: 0, y: 20 },                   visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }                 }}                 className="inline-block"              >                {char === ' ' ? '\u00A0' : char}              </motion.span>            ))}            {' '}            <br className="hidden md:block" />            <span className="text-gradient block mt-2">              {String(t('ideias em software.', 'ideas into software.')).split('').map((char, index) => (                <motion.span                   key={`w2-${index}`}                   variants={{                     hidden: { opacity: 0, y: 20, rotateX: 90 },                     visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }                   }}                   className="inline-block origin-bottom"                >                  {char === ' ' ? '\u00A0' : char}                </motion.span>              ))}            </span>          </motion.span>        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-[700px] text-zinc-400 border-l border-zinc-800 mb-12 leading-relaxed font-light tracking-wide border-l-2 border-white/10 pl-8 py-2"
        >
          {t(
            'Engenharia full stack de alta performance para marcas que buscam autoridade digital e código limpo.',
            'High-performance full stack engineering for brands seeking digital authority and clean code.'
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="glow-button w-full sm:w-auto px-8 py-4 bg-white text-black text-xs tracking-[0.15em] font-bold rounded-full flex items-center justify-center group hover:bg-gray-100 transition-colors">
            {t('CONHEÇA A STACK.O', 'DISCOVER STACK.O')}
            <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors text-gray-400 backdrop-blur-md">
            <Code2 size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
