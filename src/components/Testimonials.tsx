import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

const getTestimonials = (t: any) => [
  {
    name: "Alexandre Silva",
    role: "CTO, Aegis Core",
    content: t(
      "A Stack.O não entregou apenas código, entregou uma arquitetura à prova de falhas. A performance do nosso core banking aumentou de forma exponencial após a adoção dos microsserviços.", 
      "Stack.O didn't just deliver code, they delivered a fail-proof architecture. Our core banking performance increased exponentially after adopting microservices."
    ),
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Carolina Mendes",
    role: "CEO, Nexalytics",
    content: t(
      "Profissionalismo cirúrgico. Conseguimos processar o triplo de dados transacionais com metade dos custos em infraestrutura, graças à visão sistêmica da equipe.", 
      "Surgical professionalism. We were able to process triple the transactional data with half the infrastructure costs, thanks to the team's systemic vision."
    ),
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Roberto Costa",
    role: t("VP de Engenharia, CloudMatrix", "VP of Engineering, CloudMatrix"),
    content: t(
      "Migrar nosso control plane legado com a Stack.O foi a melhor decisão técnica do ano. Eles entregam uma qualidade de engenharia que raramente vejo no mercado.", 
      "Migrating our legacy control plane with Stack.O was the best technical decision of the year. They deliver an engineering quality I rarely see in the market."
    ),
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mariana Luz",
    role: "Diretora de Inovação, OmniCRM",
    content: t(
      "Velocidade absurda e UI magnética. O módulo de IA que a Stack.O integrou no nosso CRM diminuiu o churn da nossa base em quase 18% em dois meses.", 
      "Absurd speed and magnetic UI. The AI module Stack.O integrated into our CRM reduced our base churn by almost 18% in two months."
    ),
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);

  return (
    <section className="py-24 overflow-hidden relative z-10 border-t border-white/5 bg-[#020204]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 text-center">
        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase mb-4 w-fit">
          {t('Aprovação Enterprise', 'Enterprise Approval')}
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">{t('Confiança de quem ', 'Trusted by those who ')}<span className="text-gradient">{t('lidera o mercado', 'lead the market')}</span></h2>
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
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-neon-purple/50 transition-all duration-300" />
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
