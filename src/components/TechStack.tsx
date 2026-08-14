import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const techStack = [
  "Python", "FastAPI", "Supabase", "WordPress", "Next.js", "React", 
  "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"
];

export function TechStack() {
  const { t } = useLanguage();
  return (
    <section className="py-24 overflow-hidden border-y border-white/10 bg-black/20">
      <div className="w-full px-6 md:px-12 lg:px-16 mb-12 text-center">
        <h2 className="text-2xl font-medium text-gray-400 tracking-widest uppercase text-sm">{t('Nosso Arsenal de Tecnologia', 'Our Technology Stack')}</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left/Right Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020204] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020204] to-transparent z-10"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index}
              className={`text-2xl md:text-4xl font-bold font-mono tracking-tighter ${
                ['Python', 'FastAPI', 'Supabase', 'WordPress'].includes(tech) 
                  ? 'text-white' 
                  : 'text-gray-600'
              }`}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
