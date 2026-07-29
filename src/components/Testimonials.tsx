import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

const getTestimonials = (t: any) => [
  {
    name: "Alexandre Silva",
    role: "CTO, FinTech Co.",
    content: t("A Stack.O entregou uma arquitetura impecável. A performance do nosso sistema de pagamentos aumentou em 300% após a refatoração.", "Stack.O delivered flawless architecture. Our payment system performance increased by 300% after refactoring."),
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Carolina Mendes",
    role: "Founder, HealthApp",
    content: t("O nível de profissionalismo e qualidade do código é absurdo. Conseguimos escalar nossa base de usuários sem nenhuma dor de cabeça com infraestrutura.", "The level of professionalism and code quality is absurd. We were able to scale our user base without any infrastructure headaches."),
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Roberto Costa",
    role: t("Diretor de Engenharia", "Director of Engineering"),
    content: t("Design imersivo e código limpo. A entrega superou todas as expectativas, e o time foi extremamente ágil em todas as sprints.", "Immersive design and clean code. Delivery exceeded all expectations, and the team was extremely agile in all sprints."),
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mariana Luz",
    role: "CEO, E-commerce Plus",
    content: t("Eles entenderam perfeitamente a nossa visão e transformaram ideias complexas em um software robusto, rápido e lindo.", "They perfectly understood our vision and transformed complex ideas into robust, fast, and beautiful software."),
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);
  return (
    <section className="py-24 overflow-hidden relative z-10 border-t border-white/5 bg-[#020204]">
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-[10px] text-neon-purple font-bold tracking-[0.2em] uppercase mb-4 w-fit">
          {t('Depoimentos', 'Testimonials')}
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">{t('O que dizem ', 'What our ')}<span className="text-gradient">{t('nossos clientes', 'clients say')}</span></h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left/Right Fade */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#020204] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#020204] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-6 items-center px-4"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="relative rounded-3xl p-[1px] overflow-hidden group shrink-0 w-[320px] md:w-[450px] whitespace-normal"
            >
              {/* Animated Gradient Border Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-transparent to-neon-purple opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Moving Glow on Border */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,242,255,1)_360deg)] group-hover:animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content Layer */}
              <div className="relative h-full bg-[#020204] rounded-[23px] p-8 flex flex-col gap-6 m-[1px]">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-neon-blue text-neon-blue drop-shadow-[0_0_5px_rgba(0,242,255,0.8)]" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-white/20 transition-all duration-300" />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-neon-purple text-[10px] font-mono uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
