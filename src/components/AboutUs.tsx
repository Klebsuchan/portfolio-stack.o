import Globe from "./originkit/ui/globe";
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import braianImg from '../assets/images/braian.jpeg';
import jhonatasImg from '../assets/images/jhonatan.jpeg';

export function AboutUs() {
  const { t } = useLanguage();
  const team = [
    {
      name: "Braian Kleber",
      role: "Fullstack & Founder",
      image: braianImg,
      bio: t(
        "Desenvolvedor Fullstack e Fundador do projeto Stack.O. Iniciando sua jornada em 2019, Braian rapidamente se destacou por sua capacidade única de unir a complexidade lógica do back-end com a sensibilidade estética do web design premium. Como líder visionário e idealizador da Stack.O, ele orquestra todas as fases do desenvolvimento, garantindo que cada linha de código contribua para uma experiência de usuário absolutamente fluida, interativa e de altíssima performance. Sua obsessão pelos detalhes não apenas resolve problemas técnicos, mas eleva cada projeto a um verdadeiro estado de arte digital, guiando a equipe rumo à excelência contínua.",
        "Fullstack Developer and Founder of the Stack.O project. Starting his journey in 2019, Braian quickly stood out for his unique ability to unite the logical complexity of the back-end with the aesthetic sensitivity of premium web design. As a visionary leader and creator of Stack.O, he orchestrates all phases of development, ensuring that every line of code contributes to an absolutely fluid, interactive, and high-performance user experience. His obsession with detail not only solves technical problems, but elevates each project to a true state of digital art, guiding the team towards continuous excellence."
      )
    },
    {
      name: "Jonathan Leovaldo",
      role: "Backend Specialist",
      image: jhonatasImg,
      bio: t(
        "Especialista em Backend. Tudo começou em 2016, movido pela curiosidade de entender como os sistemas funcionavam por trás das cortinas. Desde então, mergulhou profundamente na arquitetura de software, construindo APIs robustas, microsserviços escaláveis e lidando com altos volumes de dados. Sua paixão é garantir que os alicerces de cada aplicação sejam inabaláveis e otimizados para o futuro.",
        "Backend Specialist. It all started in 2016, driven by a curiosity to understand how systems worked behind the scenes. Since then, he has dove deep into software architecture, building robust APIs, scalable microservices, and handling high data volumes. His passion is ensuring the foundation of every application is unshakable and future-proof."
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
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">{t('Quem ', 'Who ')}<span className="text-gradient">{t('Somos', 'We Are')}</span></h2>
          <p className="text-gray-400 max-w-3xl text-sm md:text-base leading-relaxed">
            {t(
              'A Stack.O nasceu da união de mentes inquietas e apaixonadas por tecnologia de ponta. Nossa missão é transformar ideias complexas em produtos digitais robustos, escaláveis e com design imersivo. Não somos apenas desenvolvedores; somos engenheiros e designers construindo o futuro da web, sempre focados em performance extrema, arquiteturas inovadoras e entrega de valor real.',
              'Stack.O was born from the union of restless minds passionate about cutting-edge technology. Our mission is to transform complex ideas into robust, scalable digital products with immersive design. We are not just developers; we are engineers and designers building the future of the web, always focused on extreme performance, innovative architectures, and delivering real value.'
            )}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col p-8 items-center text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-40 h-40 rounded-full mb-6 overflow-hidden border border-white/10 group-hover:border-neon-blue/50 transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{member.name}</h3>
              <div className="text-neon-purple text-sm font-mono font-bold uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-[10px] text-neon-purple font-bold tracking-[0.2em] uppercase mb-4 w-fit">
              {t('Presença Global', 'Global Presence')}
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-6">
              {t('Sistemas que', 'Systems that')} <span className="text-gradient">{t('escalam.', 'scale.')}</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t(
                'Nossa arquitetura e engenharia não conhecem fronteiras. Desenvolvemos plataformas de alta disponibilidade que operam globalmente, suportando demandas complexas e garantindo performance independente da localização do usuário.',
                'Our architecture and engineering know no borders. We develop high-availability platforms that operate globally, supporting complex demands and ensuring performance regardless of the user\'s location.'
              )}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center h-[400px]">
            <Globe 
              fillColor="#020204"
              oceanColor="#020204"
              outlineColor="#00f2ff"
              showGrid={true}
              graticuleColor="rgba(255, 255, 255, 0.1)"
              dots={{ color: "#bc13fe", size: 4, density: 10, allDots: false }}
              markerConfig={{
                color: "#00f2ff",
                size: 20,
                markers: [
                  // Passo Fundo, BR
                  { lat: -28.2612, lng: -52.4083 },
                  // New York, US
                  { lat: 40.7128, lng: -74.0060 },
                  // London, UK
                  { lat: 51.5074, lng: -0.1278 },
                  // Tokyo, JP
                  { lat: 35.6762, lng: 139.6503 }
                ]
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
