import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutUs() {
  const { t } = useLanguage();

  const team = [
    {
      name: "Braian Kleber",
      role: "Fullstack & Founder",
      image: "/braian.png",
      bio: t(
        "Desenvolvedor Fullstack e Fundador do projeto Stack.O. Iniciando sua jornada em 2019, Braian rapidamente se destacou por sua capacidade única de unir a complexidade lógica do back-end com a sensibilidade estética do web design premium. Como líder visionário e idealizador da Stack.O, ele orquestra todas as fases do desenvolvimento, garantindo que cada linha de código contribua para uma experiência de usuário absolutamente fluida, interativa e de altíssima performance. Sua obsessão pelos detalhes não apenas resolve problemas técnicos, mas eleva cada projeto a um verdadeiro estado de arte digital, guiando a equipe rumo à excelência contínua.",
        "Fullstack Developer and Founder of the Stack.O project. Starting his journey in 2019, Braian quickly stood out for his unique ability to unite the logical complexity of the back-end with the aesthetic sensitivity of premium web design. As a visionary leader and creator of Stack.O, he orchestrates all phases of development, ensuring that every line of code contributes to an absolutely fluid, interactive, and high-performance user experience. His obsession with detail not only solves technical problems, but elevates each project to a true state of digital art, guiding the team towards continuous excellence."
      )
    },
    {
      name: "Jhonatas Leovaldo",
      role: "Backend Specialist",
      image: "/jhonatas.jpeg",
      bio: t(
        "Especialista em Backend. Tudo começou em 2016, movido pela curiosidade de entender como os sistemas funcionavam por trás das cortinas. Desde então, mergulhou profundamente na arquitetura de software, construindo APIs robustas, microsserviços escaláveis e lidando com altos volumes de dados. Sua paixão é garantir que os alicerces de cada aplicação sejam inabaláveis e otimizados para o futuro.",
        "Backend Specialist. It all started in 2016, driven by a curiosity to understand how systems worked behind the scenes. Since then, he has dove deep into software architecture, building robust APIs, scalable microservices, and handling high data volumes. His passion is ensuring the foundation of every application is unshakable and future-proof."
      )
    },
    {
      name: "Jean Bazzi",
      role: "Development & Networks Specialist",
      image: "/jean.jpeg",
      bio: t(
        "Especialista em desenvolvimento e redes de computadores, atuando desde 2001. Com vasta experiência em PHP, DELPHI, PYTHON e robótica, traz uma visão técnica profunda capaz de integrar sistemas complexos de hardware e software com maestria e extrema precisão.",
        "Specialist in development and computer networks since 2001. With vast experience in PHP, DELPHI, PYTHON, and robotics, he brings a deep technical vision, able to masterfully integrate complex hardware and software systems with extreme precision."
      )
    },
    {
      name: "Lorenzo Orssato",
      role: "Systems Analysis & Dev",
      image: "/lorenzo.jpeg",
      bio: t(
        "Especialista em Análise e Desenvolvimento de Sistemas. Destaca-se por sua capacidade de compreender a fundo os processos de negócio e traduzir requisitos em arquiteturas de software otimizadas, focando sempre na melhoria contínua.",
        "Specialist in Systems Analysis and Development. Stands out for his ability to deeply understand business processes and translate requirements into optimized software architectures, always focusing on continuous improvement."
      )
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10" id="about">
      <div className="w-full">
        <div className="flex flex-col md:items-center justify-center mb-16 text-center">
          <div className="inline-block px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-4 w-fit">
            {t('Nossa História', 'Our Story')}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">{t('Quem ', 'Who ')}<span className="text-gradient">{t('Somos', 'We Are')}</span></h2>
          <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
            {t(
              'A Stack.O nasceu da união de mentes inquietas e apaixonadas por tecnologia de ponta. Nossa missão é transformar ideias complexas em produtos digitais robustos, escaláveis e com design imersivo. Não somos apenas desenvolvedores; somos engenheiros e designers construindo o futuro da web, sempre focados em performance extrema, arquiteturas inovadoras e entrega de valor real.',
              'Stack.O was born from the union of restless minds passionate about cutting-edge technology. Our mission is to transform complex ideas into robust, scalable digital products with immersive design. We are not just developers; we are engineers and designers building the future of the web, always focused on extreme performance, innovative architectures, and delivering real value.'
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col p-6 items-center text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden border-2 border-white/10 group-hover:border-neon-blue/50 transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{member.name}</h3>
              <div className="text-neon-purple text-xs font-mono font-bold uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
