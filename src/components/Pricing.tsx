import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t("Code Audit", "Code Audit"),
      description: t("Auditoria completa de dívida técnica, segurança e performance.", "Complete audit of technical debt, security, and performance."),
      price: t("Sob Consulta", "On Demand"),
      features: [
        t("Análise de Arquitetura", "Architecture Analysis"),
        t("Revisão de Segurança (OWASP)", "Security Review (OWASP)"),
        t("Otimização de Banco de Dados", "Database Optimization"),
        t("Relatório de Ação Detalhado", "Detailed Action Report")
      ],
      popular: false
    },
    {
      name: t("MVP Rápido", "Fast MVP"),
      description: t("Construção e lançamento do seu produto do zero ao ar em até 4 semanas.", "Build and launch your product from scratch in up to 4 weeks."),
      price: "Fixed",
      features: [
        t("Design UI/UX Premium", "Premium UI/UX Design"),
        t("Desenvolvimento Frontend & Backend", "Frontend & Backend Development"),
        t("Banco de Dados Escalável", "Scalable Database"),
        t("Deploy na Nuvem (AWS/GCP)", "Cloud Deploy (AWS/GCP)")
      ],
      popular: true
    },
    {
      name: t("Squad Dedicado", "Dedicated Squad"),
      description: t("Alocação de engenheiros experientes para acelerar o roadmap do seu produto.", "Allocation of experienced engineers to accelerate your product roadmap."),
      price: "Monthly",
      features: [
        t("Engenheiros Seniores", "Senior Engineers"),
        t("Gestão Ágil Integrada", "Integrated Agile Management"),
        t("Garantia de Qualidade (QA)", "Quality Assurance (QA)"),
        t("Escalabilidade Flexível", "Flexible Scalability")
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10 border-t border-white/5 bg-[#020204]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t("Pacotes de Serviço", "Service Packages")}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            {t("Modelos de ", "Models of ")}<span className="text-gradient">{t("Engajamento", "Engagement")}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t("Soluções formatadas para diferentes estágios e necessidades do seu negócio.", "Formatted solutions for different stages and needs of your business.")}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-transparent border border-neon-blue/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t("O Melhor Custo-Benefício do Mercado", "The Best Cost-Benefit on the Market")}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {t(
                "Entendemos que agilidade e eficiência financeira são cruciais. Nossa metodologia foi projetada especificamente para clientes que precisam de soluções digitais esteticamente lindas e de altíssima performance, mas com pouco tempo disponível e um orçamento otimizado. Entregamos excelência sem desperdícios.", 
                "We understand that agility and financial efficiency are crucial. Our methodology was specifically designed for clients who need aesthetically beautiful and extremely high-performance digital solutions, but with little time available and an optimized budget. We deliver excellence without waste."
              )}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-[1px] overflow-hidden group ${plan.popular ? 'md:-translate-y-4' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? 'from-neon-blue to-neon-purple opacity-50' : 'from-white/10 to-transparent opacity-20'} group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative h-full bg-[#020204]/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col m-[1px]">
                {plan.popular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {t("Mais Escolhido", "Most Chosen")}
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-4">
                    {t("O que está incluído:", "What's included:")}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={16} className={plan.popular ? "text-neon-blue mt-0.5 shrink-0" : "text-gray-500 mt-0.5 shrink-0"} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact" className={`mt-auto w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                  plan.popular 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}>
                  {t("Solicitar Orçamento", "Request Quote")}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
