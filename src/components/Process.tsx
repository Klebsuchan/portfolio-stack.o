import { motion } from 'motion/react';
import { Terminal, Cpu, Rocket, ShieldCheck, FileSignature } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("Discovery & Arquitetura", "Discovery & Architecture"),
      description: t("Mapeamento completo dos requisitos e definição da stack tecnológica ideal para o seu negócio.", "Complete requirements mapping and definition of the ideal technology stack for your business."),
      icon: <Terminal className="text-neon-blue" size={28} />
    },
    {
      title: t("Desenvolvimento Ágil", "Agile Development"),
      description: t("Engenharia de software com sprints curtas, entregas contínuas e código limpo (Clean Code).", "Software engineering with short sprints, continuous delivery, and clean code."),
      icon: <Cpu className="text-neon-purple" size={28} />
    },
    {
      title: t("Security & QA", "Security & QA"),
      description: t("Bateria de testes automatizados, auditoria de segurança e otimização extrema de performance.", "Automated test suites, security auditing, and extreme performance optimization."),
      icon: <ShieldCheck className="text-neon-blue" size={28} />
    },
    {
      title: t("Deploy & Escala", "Deploy & Scale"),
      description: t("Lançamento em infraestrutura cloud de alta disponibilidade pronta para tráfego massivo.", "Launch on high-availability cloud infrastructure ready for massive traffic."),
      icon: <Rocket className="text-neon-purple" size={28} />
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10 bg-black/40 border-y border-white/5">
      <div className="w-full">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neon-purple font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t('Workflow', 'Workflow')}
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">{t('Nossa ', 'Our ')}<span className="text-gradient">{t('Engenharia', 'Engineering')}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('Um processo metodológico focado em previsibilidade e qualidade de software.', 'A methodological process focused on predictability and software quality.')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-white/20 via-zinc-400/50 to-white/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#020204] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-zinc-400/50 group-hover:shadow-[0_0_30px_rgba(188,19,254,0.3)] transition-all duration-500">
                <div className="absolute inset-2 rounded-full border border-dashed border-white/10 group-hover:animate-[spin_10s_linear_infinite]" />
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed px-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Handover & Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0f] to-[#020204] relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-zinc-400 to-white opacity-80" />
          <div className="absolute -inset-24 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/5 transition-all" />
          
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <FileSignature className="text-neon-blue" size={36} />
          </div>
          <div className="text-center md:text-left relative z-10">
            <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{t('Handover Completo e Transparente', 'Complete and Transparent Handover')}</h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
              {t(
                'Acreditamos que o código é seu. Tudo o que desenvolvemos retorna para você com',
                'We believe the code is yours. Everything we develop returns to you with'
              )} <strong>{t('código-fonte integral', 'full source code')}</strong>, <strong>{t('documentação técnica detalhada', 'detailed technical documentation')}</strong> {t('para futuras manutenções, e a', 'for future maintenance, and the')} <strong>{t('assinatura formal', 'formal signature')}</strong> {t('dos engenheiros e prestadores de serviço envolvidos, garantindo autoria, qualidade e total propriedade intelectual do produto.', 'of the engineers and service providers involved, guaranteeing authorship, quality, and full intellectual property of the product.')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
