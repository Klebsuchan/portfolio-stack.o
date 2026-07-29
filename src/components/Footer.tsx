import { MessageCircle, Github, Linkedin, Instagram, ArrowRight, ShieldCheck, MapPin, Mail, Phone, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { InfoModal } from './InfoModal';

const modalContents: Record<string, { title: string; content: React.ReactNode }> = {
  'sobre': {
    title: 'Sobre Nós',
    content: (
      <div className="space-y-4">
        <p>A <strong>Stack.O</strong> é uma boutique de engenharia de software focada em construir produtos digitais robustos, escaláveis e esteticamente impressionantes.</p>
        <p>Acreditamos que o código limpo (Clean Code) não é um diferencial, mas sim o requisito básico para qualquer sistema que deseja sobreviver a longo prazo. Nossa equipe é formada por engenheiros seniores obcecados por performance.</p>
        <p>Nossa missão é transformar ideias complexas em soluções de alto valor agregado, reduzindo dívida técnica e impulsionando negócios através da tecnologia.</p>
      </div>
    )
  },
  'processo': {
    title: 'Nosso Processo',
    content: (
      <div className="space-y-4">
        <h4 className="font-bold text-white mb-2">1. Discovery & Arquitetura</h4>
        <p>Mapeamos todos os requisitos de negócio e técnicos para desenhar a arquitetura ideal antes de escrever qualquer linha de código.</p>
        <h4 className="font-bold text-white mb-2 mt-4">2. Desenvolvimento Ágil (Sprints)</h4>
        <p>Utilizamos a metodologia Scrum para garantir entregas frequentes de valor e transparência total sobre o progresso do projeto.</p>
        <h4 className="font-bold text-white mb-2 mt-4">3. Security & QA</h4>
        <p>Cada entrega passa por rigorosos testes automatizados de unidade, integração e e2e, além de testes de estresse.</p>
        <h4 className="font-bold text-white mb-2 mt-4">4. Deploy & Escala</h4>
        <p>Lançamos a aplicação utilizando as melhores práticas de DevOps com CI/CD, monitoramento e zero downtime.</p>
      </div>
    )
  },
  'portfolio': {
    title: 'Portfólio',
    content: (
      <div className="space-y-4">
        <p>Nosso portfólio reflete anos de engenharia dedicada a negócios reais. Conheça alguns dos desafios técnicos que solucionamos:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Sistemas Financeiros (FinTechs):</strong> Processamento de transações em tempo real com conciliação robusta.</li>
          <li><strong>E-commerce de Alta Volumetria:</strong> Plataformas capazes de lidar com dezenas de milhares de requisições por segundo (Black Friday).</li>
          <li><strong>Softwares Médicos (HealthTechs):</strong> Sistemas em conformidade com as normas de proteção de dados sensíveis (LGPD/HIPAA).</li>
        </ul>
        <p className="mt-4">Explore a seção "Nosso Portfólio" na página inicial para ver estudos de caso interativos com a arquitetura dos sistemas.</p>
      </div>
    )
  },
  'carreiras': {
    title: 'Carreiras',
    content: (
      <div className="space-y-4">
        <p>Se você ama resolver problemas difíceis e se importa profundamente com a qualidade do software que constrói, a Stack.O é o seu lugar.</p>
        <p>Atualmente, nossas vagas estão focadas em:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Engenheiros de Software Sênior (Node.js, React, Python)</li>
          <li>Engenheiros de Dados</li>
          <li>Cloud Architects (AWS, GCP)</li>
        </ul>
        <p className="mt-4">Para se candidatar ou enviar o seu currículo, entre em contato conosco através de <strong>carreiras@stacko.com</strong>.</p>
      </div>
    )
  },
  'devweb': {
    title: 'Desenvolvimento Web',
    content: (
      <div className="space-y-4">
        <p>Construímos plataformas web rápidas e imersivas. Otimizamos cada byte e utilizamos Edge Computing para garantir que seu site ou aplicação carregue de forma quase instantânea em qualquer lugar do mundo.</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Landing Pages de alta conversão</li>
          <li>Sistemas Institucionais</li>
          <li>E-commerces B2B e B2C</li>
        </ul>
      </div>
    )
  },
  'saas': {
    title: 'Sistemas SaaS',
    content: (
      <div className="space-y-4">
        <p>Software como Serviço (SaaS) exige arquiteturas complexas. Desenvolvemos desde o sistema de multitenancy (múltiplos clientes isolados) até integrações de pagamentos e painéis de controle avançados.</p>
        <p>Nossa stack principal para SaaS garante segurança de ponta a ponta e escalabilidade infinita para o seu negócio.</p>
      </div>
    )
  },
  'mobile': {
    title: 'Apps Mobile',
    content: (
      <div className="space-y-4">
        <p>Aplicativos nativos ou multiplataforma com interfaces fluidas a 60fps. Entregamos a melhor experiência para os seus usuários, tanto no iOS quanto no Android.</p>
        <p>Focamos no uso consciente da bateria, conectividade offline e no design minimalista.</p>
      </div>
    )
  },
  'refatoracao': {
    title: 'Refatoração',
    content: (
      <div className="space-y-4">
        <p>Sistemas antigos perdem performance e acumulam dívida técnica com o tempo. Entramos no seu código, identificamos gargalos e refatoramos tudo para tecnologias modernas, mantendo o sistema em produção e com zero interrupção.</p>
        <p>Isso reduz custos de infraestrutura e aumenta dramaticamente a manutenibilidade do seu negócio.</p>
      </div>
    )
  },
  'privacidade': {
    title: 'Política de Privacidade',
    content: (
      <div className="space-y-4">
        <p>A Stack.O respeita a sua privacidade. Esta política descreve como os seus dados pessoais são coletados, usados e protegidos.</p>
        <h4 className="font-bold text-white mb-2 mt-4">Coleta de Dados</h4>
        <p>Coletamos informações essenciais apenas para fornecer e melhorar nossos serviços, responder a solicitações e enviar comunicações quando consentido.</p>
        <h4 className="font-bold text-white mb-2 mt-4">Uso de Informações</h4>
        <p>Seus dados nunca são vendidos. Eles são usados para otimização de navegação e análise de métricas (via cookies anônimos).</p>
        <h4 className="font-bold text-white mb-2 mt-4">Seus Direitos</h4>
        <p>Você pode solicitar a visualização, alteração ou exclusão de todos os seus dados a qualquer momento enviando um email para <strong>privacidade@stacko.com</strong>.</p>
      </div>
    )
  },
  'termos': {
    title: 'Termos de Uso',
    content: (
      <div className="space-y-4">
        <p>Ao utilizar os serviços e acessar o site da Stack.O, você concorda com nossos Termos de Uso e Condições Gerais.</p>
        <h4 className="font-bold text-white mb-2 mt-4">Uso Permitido</h4>
        <p>Os materiais exibidos (códigos, textos, designs) são propriedade intelectual da Stack.O e não podem ser replicados ou vendidos sem autorização.</p>
        <h4 className="font-bold text-white mb-2 mt-4">Isenção de Garantias</h4>
        <p>Oferecemos suporte garantido (SLA) mediante assinatura em contrato fechado de software. Ferramentas abertas ou de acesso livre são fornecidas no estado em que se encontram.</p>
      </div>
    )
  }
};

export function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#020204] pt-20 pb-8 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <img src="/stacklogo.png" alt="Stack.O Logo" className="h-16 md:h-20 w-auto mb-6 object-contain object-left" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Engenharia de software de alto nível. Transformamos ideias complexas em produtos digitais escaláveis, rápidos e visualmente impressionantes. Focados em excelência, performance e entrega de valor real para negócios ambiciosos.
            </p>
            <div className="flex flex-col gap-2 mb-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-neon-blue" /> Passo Fundo, RS - Brasil</span>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/stack.odev?igsh=cWR5MDNsM3B3MzZv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-purple hover:bg-neon-purple/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-end lg:justify-items-start">
            <div className="md:text-left">
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setActiveModal('sobre')} className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => setActiveModal('processo')} className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Nosso Processo</button></li>
                <li><button onClick={() => setActiveModal('portfolio')} className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Portfólio</button></li>
                <li><button onClick={() => setActiveModal('carreiras')} className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Carreiras & Vagas</button></li>
                <li><button className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Manifesto Stack.O</button></li>
              </ul>
            </div>
            
            <div className="md:text-left">
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="space-y-3">
                <li><button onClick={() => setActiveModal('devweb')} className="text-gray-400 hover:text-neon-purple text-sm transition-colors">Desenvolvimento Web</button></li>
                <li><button onClick={() => setActiveModal('saas')} className="text-gray-400 hover:text-neon-purple text-sm transition-colors">Sistemas SaaS</button></li>
                <li><button onClick={() => setActiveModal('mobile')} className="text-gray-400 hover:text-neon-purple text-sm transition-colors">Apps Mobile Nativos</button></li>
                <li><button onClick={() => setActiveModal('refatoracao')} className="text-gray-400 hover:text-neon-purple text-sm transition-colors">Refatoração de Legado</button></li>
                <li><button className="text-gray-400 hover:text-neon-purple text-sm transition-colors">Cloud & DevOps</button></li>
              </ul>
            </div>

            <div className="md:text-left">
              <h4 className="text-white font-bold mb-4">Tecnologias</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400 text-sm">React & Next.js</span></li>
                <li><span className="text-gray-400 text-sm">Node.js & Python</span></li>
                <li><span className="text-gray-400 text-sm">React Native & Flutter</span></li>
                <li><span className="text-gray-400 text-sm">AWS & Google Cloud</span></li>
                <li><span className="text-gray-400 text-sm">PostgreSQL & MongoDB</span></li>
              </ul>
            </div>

            <div className="md:text-left col-span-2 lg:col-span-1">
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-xs mb-4">Inscreva-se para receber insights sobre tecnologia, arquitetura de software e inovação diretamente na sua caixa de entrada.</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu melhor e-mail" className="bg-[#0a0a0f] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-blue transition-colors w-full" />
                <button type="submit" className="bg-white text-black font-bold text-sm rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors w-full">Assinar News</button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-neon-blue" size={16} />
            <span className="text-gray-500 text-xs">© {new Date().getFullYear()} Stack.O. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button onClick={() => setActiveModal('privacidade')} className="text-gray-500 hover:text-white text-xs transition-colors">Política de Privacidade</button>
            <button onClick={() => setActiveModal('termos')} className="text-gray-500 hover:text-white text-xs transition-colors">Termos de Uso</button>
            <button onClick={() => {
              localStorage.removeItem('stacko-cookie-consent');
              window.location.reload();
            }} className="text-gray-500 hover:text-white text-xs transition-colors">Preferências de Cookies</button>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5554991064604" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all z-50 group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <InfoModal 
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal ? modalContents[activeModal].title : ''}
        content={activeModal ? modalContents[activeModal].content : null}
      />
    </footer>
  );
}
