import { motion } from 'motion/react';
import { Globe, Wrench, GraduationCap, Zap } from 'lucide-react';
import { InteractiveCodeEditor } from './InteractiveCodeEditor';
import { PlatformVisualization } from './PlatformVisualization';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Sites, Sistemas e Aplicativos", "Websites, Systems and Apps"),
      description: t("Desenvolvimento full-stack de plataformas imersivas e performáticas.", "Full-stack development of immersive and performant platforms."),
      icon: <Globe className="text-neon-blue" size={32} />,
      colSpan: "col-span-1 md:col-span-2 md:row-span-2",
      hasVisualization: true,
    },
    {
      title: t("Refatoração de Código", "Code Refactoring"),
      description: t("Melhoria contínua e manutenção para sistemas legados.", "Continuous improvement and maintenance for legacy systems."),
      icon: <Wrench className="text-neon-purple" size={32} />,
      colSpan: "col-span-1 md:col-span-2",
      hasEditor: true,
    },
    {
      title: t("Apoio e Mentoria", "Support and Mentorship"),
      description: t("Aceleramos o seu time e validamos a arquitetura do seu projeto.", "We accelerate your team and validate your project architecture."),
      icon: <GraduationCap className="text-neon-blue" size={32} />,
      colSpan: "col-span-1",
    },
    {
      title: t("Atendimento Rápido via Direct", "Fast Direct Support"),
      description: t("Comunicação direta, sem burocracia. Fale com os fundadores.", "Direct communication, no bureaucracy. Talk to the founders."),
      icon: <Zap className="text-neon-purple" size={32} />,
      colSpan: "col-span-1",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10">
      <div className="w-full">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t('Nossos Serviços', 'Our Services')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">{t('O Que ', 'What We ')}<span className="text-gradient">{t('Oferecemos', 'Offer')}</span></h2>
          <p className="text-gray-400 max-w-2xl">{t('Soluções de ponta a ponta projetadas para escala, velocidade e imersão visual.', 'End-to-end solutions designed for scale, speed, and visual immersion.')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={service.hasEditor || service.hasVisualization ? {} : { y: -5 }}
              className={`glass-card p-6 flex flex-col justify-between group ${service.colSpan} ${service.hasEditor || service.hasVisualization ? 'overflow-visible' : ''}`}
            >
              <div>
                <div className="mb-6 p-4 rounded-xl bg-neon-blue/10 w-fit text-neon-blue group-hover:bg-neon-purple/10 group-hover:text-neon-purple transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              {service.hasEditor && (
                <InteractiveCodeEditor />
              )}
              {service.hasVisualization && (
                <PlatformVisualization />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
