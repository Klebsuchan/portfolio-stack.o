import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const logos = [
  "AWS", "Google Cloud", "PostgreSQL", "React", "Node.js", "Docker", "Kubernetes", "Redis", "Kafka", "TypeScript", "Next.js", "TailwindCSS"
];

export function LogoTicker() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-[#020204] border-y border-white/5 overflow-hidden flex flex-col items-center">
      <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-8 text-center">
        {t("Stack de Alta Performance", "High-Performance Stack")}
      </p>
      
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Double the logos to create the infinite loop effect smoothly */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[120px]">
              <span className="text-xl md:text-2xl font-black text-white/20 hover:text-white/60 transition-colors duration-300 tracking-wider">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
