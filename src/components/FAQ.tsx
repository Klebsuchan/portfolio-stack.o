import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function AccordionItem({ question, answer, isOpen, onClick }: { key?: React.Key; question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className={`border rounded-2xl mb-4 overflow-hidden bg-white/[0.02] backdrop-blur-md transition-colors ${isOpen ? 'border-neon-purple/50 bg-white/[0.04]' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'}`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onClick}
      >
        <span className="text-white font-bold text-base md:text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border ${isOpen ? 'border-neon-purple text-neon-purple' : 'border-white/20 text-white'} transition-colors`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <div className="pt-4 border-t border-white/5">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("Quais tipos de projetos a Stack.O desenvolve?", "What types of projects does Stack.O develop?"),
      answer: t(
        "Desenvolvemos soluções full-stack sob medida, incluindo landing pages de alta conversão, sistemas web complexos (SaaS), aplicativos mobile e integrações de API. Focamos em escalabilidade, performance e design premium.",
        "We develop custom full-stack solutions, including high-converting landing pages, complex web systems (SaaS), mobile apps, and API integrations. We focus on scalability, performance, and premium design."
      )
    },
    {
      question: t("Como funciona a etapa de refatoração de código?", "How does the code refactoring stage work?"),
      answer: t(
        "Avaliamos a dívida técnica do seu sistema atual e criamos um plano de ação para otimizar a arquitetura, melhorar a segurança e aumentar a performance, sem interromper as operações do seu negócio (Zero Downtime).",
        "We evaluate the technical debt of your current system and create an action plan to optimize the architecture, improve security, and increase performance, without interrupting your business operations (Zero Downtime)."
      )
    },
    {
      question: t("Qual é a metodologia de desenvolvimento de vocês?", "What is your development methodology?"),
      answer: t(
        "Utilizamos metodologias ágeis com sprints curtas e entregas contínuas. Você acompanha o progresso em tempo real, garantindo que o produto final esteja perfeitamente alinhado com a visão da sua empresa.",
        "We use agile methodologies with short sprints and continuous deliveries. You track progress in real-time, ensuring the final product perfectly aligns with your company's vision."
      )
    },
    {
      question: t("Vocês oferecem manutenção após o lançamento?", "Do you offer post-launch maintenance?"),
      answer: t(
        "Sim! Oferecemos planos de suporte contínuo para garantir que seu sistema permaneça seguro, atualizado e operando com máxima eficiência mesmo com o aumento no volume de acessos.",
        "Yes! We offer ongoing support plans to ensure your system remains secure, updated, and operating at peak efficiency even with increased traffic volumes."
      )
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t('Dúvidas Frequentes', 'Frequently Asked Questions')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            {t('O que você precisa ', 'What you need to ')}<span className="text-gradient">{t('saber', 'know')}</span>
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
