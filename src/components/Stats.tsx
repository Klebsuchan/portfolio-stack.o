import { motion, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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

  const stats = [
    { value: 99.9, label: t("Uptime Garantido", "Guaranteed Uptime"), suffix: "%" },
    { value: 50, label: t("Projetos Entregues", "Delivered Projects"), suffix: "+" },
    { value: 100, label: t("Performance Score", "Performance Score"), suffix: "" },
    { value: 0, label: t("Dívida Técnica", "Technical Debt"), suffix: "%" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 relative z-10 border-b border-white/5 bg-gradient-to-b from-transparent to-neon-blue/5">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 font-mono group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-500">
                <Counter to={stat.value} />
                <span className="text-neon-purple">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
