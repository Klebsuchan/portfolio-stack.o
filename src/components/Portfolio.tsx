import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Bot, ShieldAlert, ShoppingCart, Gamepad2, LayoutTemplate, Store, Pizza, Car, Dices, Rocket, Landmark, School, Heart } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CaseStudyModal } from './CaseStudyModal';

const getProjects = (t: any) => [
  {
    title: "StellarCare",
    description: t("Aplicativo offline-first avançado para Sistematização da Assistência de Enfermagem (SAE) e Prontuário Eletrônico do Paciente (PEP). Focado em monitoramento clínico em tempo real.", "Advanced offline-first application for Systematization of Nursing Care (SNC) and Electronic Patient Record (EPR). Focused on real-time clinical monitoring."),
    tags: ["React", "TypeScript", "Offline-First", "HealthTech"],
    icon: Activity,
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: t("Precisão Clínica", "Clinical Accuracy"), value: 99.9 },
      { label: "Uptime Offline", value: 100 },
      { label: t("Agilidade", "Agility"), value: 85 },
      { label: t("Segurança", "Security"), value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "client", label: "React Client", type: "app" },
        { id: "sync", label: "Sync Engine", type: "app" },
        { id: "db", label: "Local Database", type: "db" },
        { id: "api", label: "Cloud API", type: "app" }
      ],
      links: [
        { source: "client", target: "db" },
        { source: "client", target: "sync" },
        { source: "sync", target: "api" }
      ]
    }
  },
  {
    title: "HistoryAI",
    description: t("Chatbot inteligente especializado em história contrafactual ('E se...?'). Integra IA para gerar PDFs e apresentações de slides dinamicamente.", "Intelligent chatbot specialized in counterfactual history ('What if...?'). Integrates AI to dynamically generate PDFs and slide presentations."),
    tags: ["React", "TypeScript", "AI", "PDF Generation"],
    icon: Bot,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Geração (s)", value: 2 },
      { label: "Acurácia", value: 95 },
      { label: "PDFs/min", value: 30 },
      { label: t("Retenção", "Retention"), value: 80 }
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Chat UI", type: "app" },
        { id: "ai", label: "AI Engine", type: "app" },
        { id: "pdf", label: "PDF Generator", type: "app" },
        { id: "storage", label: "Cloud Storage", type: "db" }
      ],
      links: [
        { source: "ui", target: "ai" },
        { source: "ai", target: "pdf" },
        { source: "pdf", target: "storage" },
        { source: "storage", target: "ui" }
      ]
    }
  },
  {
    title: "FireSafe Hub",
    description: t("Painel centralizado de ocorrências e gestão de prevenção de incidentes. Desenvolvido para gerenciamento em tempo real com alta confiabilidade.", "Centralized incident dashboard and incident prevention management. Developed for real-time management with high reliability."),
    tags: ["React", "TypeScript", "Gestão", "Dashboards"],
    icon: ShieldAlert,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "T. Resposta", value: 1.2 },
      { label: "Ocorrências/s", value: 50 },
      { label: "Disponibilidade", value: 99.99 },
      { label: "Painéis", value: 15 }
    ],
    architecture: {
      nodes: [
        { id: "dash", label: "Dashboard App", type: "app" },
        { id: "ws", label: "Realtime WS", type: "app" },
        { id: "db", label: "PostgreSQL", type: "db" }
      ],
      links: [
        { source: "dash", target: "ws" },
        { source: "ws", target: "db" }
      ]
    }
  },
  {
    title: "Pastelarica Delivery",
    description: t("Plataforma de delivery online e catálogo interativo dedicada à Pastelarica. Integração nativa com a API do WhatsApp para otimizar e automatizar o fluxo de pedidos de forma ágil.", "Online delivery platform and interactive catalog dedicated to Pastelarica. Native integration with the WhatsApp API to optimize and automate the order flow agilely."),
    tags: ["React", "TypeScript", "E-commerce", "WhatsApp API"],
    icon: Pizza,
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: t("Conversão", "Conversion"), value: 45 },
      { label: "T. Pedido", value: 1.5 },
      { label: "Integrações", value: 2 },
      { label: "Satisfação", value: 98 }
    ],
    architecture: {
      nodes: [
        { id: "store", label: "Storefront UI", type: "app" },
        { id: "cart", label: "Cart Engine", type: "app" },
        { id: "wba", label: "WhatsApp API", type: "app" },
        { id: "db", label: "Products DB", type: "db" }
      ],
      links: [
        { source: "store", target: "cart" },
        { source: "store", target: "db" },
        { source: "cart", target: "wba" }
      ]
    }
  },
  {
    title: "Point Dog",
    description: t("Sistema de cardápio digital e delivery sob medida para o Point Dog. Foco em experiência mobile-first, conversão rápida e facilidade de gestão de pedidos integrados ao WhatsApp.", "Custom digital menu and delivery system for Point Dog. Focus on mobile-first experience, fast conversion and ease of order management integrated with WhatsApp."),
    tags: ["React", "TypeScript", "Mobile-First", "WhatsApp API"],
    icon: Store,
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Mobile Conv.", value: 52 },
      { label: "Carregamento", value: 0.9 },
      { label: t("Retenção", "Retention"), value: 88 },
      { label: "Satisfação", value: 95 }
    ],
    architecture: {
      nodes: [
        { id: "store", label: "Mobile UI", type: "app" },
        { id: "cart", label: "Cart Engine", type: "app" },
        { id: "wba", label: "WhatsApp API", type: "app" },
        { id: "db", label: "Menu DB", type: "db" }
      ],
      links: [
        { source: "store", target: "cart" },
        { source: "store", target: "db" },
        { source: "cart", target: "wba" }
      ]
    }
  },
  {
    title: "Vaapty Landing Page",
    description: t("Landing page premium e de altíssima conversão desenvolvida para a Vaapty. Arquitetura otimizada ao extremo para SEO, geração de leads qualificados e tempo de carregamento.", "Premium, highly converting landing page developed for Vaapty. Architecture optimized to the extreme for SEO, qualified lead generation and loading time."),
    tags: ["React", "TailwindCSS", "Automotive", "SEO"],
    icon: Car,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Lighthouse", value: 100 },
      { label: "Leads/Dia", value: 200 },
      { label: "Bounce", value: 18 },
      { label: "Load (s)", value: 0.7 }
    ],
    architecture: {
      nodes: [
        { id: "ssg", label: "Static Output", type: "app" },
        { id: "cdn", label: "Global CDN", type: "app" },
        { id: "leads", label: "CRM Integration", type: "db" }
      ],
      links: [
        { source: "ssg", target: "cdn" },
        { source: "cdn", target: "leads" }
      ]
    }
  },
  {
    title: "Sorte Na Bet",
    description: t("Landing page focada no mercado de iGaming e apostas. Design imersivo, alta performance (SSG) e estrutura feita para maximizar taxas de clique (CTR) e retenção de usuários.", "Landing page focused on the iGaming and betting market. Immersive design, high performance (SSG) and structure designed to maximize click-through rates (CTR) and user retention."),
    tags: ["Vite", "TailwindCSS", "iGaming", "Marketing"],
    icon: Dices,
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "CTR", value: 15.5 },
      { label: "Lighthouse", value: 98 },
      { label: t("Conversão", "Conversion"), value: 12 },
      { label: "Load (s)", value: 0.8 }
    ],
    architecture: {
      nodes: [
        { id: "ssg", label: "Vite + SSG", type: "app" },
        { id: "cdn", label: "Edge CDN", type: "app" },
        { id: "analytics", label: "Event Tracker", type: "db" }
      ],
      links: [
        { source: "ssg", target: "cdn" },
        { source: "cdn", target: "analytics" }
      ]
    }
  },
  {
    title: "Multiverso Nerd",
    description: t("Portal e landing page premium com foco na cultura geek e pop. Estruturada para ranqueamento rápido em motores de busca (SEO) com navegação fluída e design marcante.", "Premium portal and landing page focused on geek and pop culture. Structured for quick search engine ranking (SEO) with fluid navigation and striking design."),
    tags: ["React", "SSG", "Geek", "SEO"],
    icon: Rocket,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: t("Visitas/Mês", "Visits/Month"), value: 50000 },
      { label: "Lighthouse", value: 100 },
      { label: "Bounce", value: 22 },
      { label: "SEO Score", value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "ssg", label: "Static Output", type: "app" },
        { id: "cdn", label: "Global CDN", type: "app" },
        { id: "cms", label: "Headless CMS", type: "db" }
      ],
      links: [
        { source: "ssg", target: "cdn" },
        { source: "cdn", target: "cms" }
      ]
    }
  },
  {
    title: "Agência de Crédito",
    description: t("Landing page corporativa para agências de crédito. Construída com React e TailwindCSS, focada em credibilidade, rápida conversão de leads e performance otimizada.", "Corporate landing page for credit agencies. Built with React and TailwindCSS, focused on credibility, fast lead conversion and optimized performance."),
    tags: ["React", "TypeScript", "TailwindCSS", "Finanças"],
    icon: Landmark,
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Lighthouse", value: 99 },
      { label: t("Conversão", "Conversion"), value: 18 },
      { label: "Bounce", value: 25 },
      { label: "Load (s)", value: 0.9 }
    ],
    architecture: {
      nodes: [
        { id: "ssg", label: "Static Output", type: "app" },
        { id: "cdn", label: "Edge CDN", type: "app" },
        { id: "leads", label: "Lead Capture", type: "db" }
      ],
      links: [
        { source: "ssg", target: "cdn" },
        { source: "cdn", target: "leads" }
      ]
    }
  },
  {
    title: "Escola Coração de Mãe",
    description: t("Landing page institucional educacional desenvolvida para transmitir confiança e carinho. Otimizada para SEO local e com alta velocidade de carregamento (Vite + TailwindCSS).", "Educational institutional landing page developed to convey trust and affection. Optimized for local SEO and with high loading speed (Vite + TailwindCSS)."),
    tags: ["React", "Vite", "TailwindCSS", "Educação"],
    icon: School,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: t("Acessibilidade", "Accessibility"), value: 100 },
      { label: t("Matrículas/Mês", "Enrollments/Month"), value: 45 },
      { label: "Lighthouse", value: 100 },
      { label: t("Retenção", "Retention"), value: 75 }
    ],
    architecture: {
      nodes: [
        { id: "spa", label: "React SPA", type: "app" },
        { id: "cdn", label: "Global CDN", type: "app" },
        { id: "analytics", label: "Event Tracker", type: "db" }
      ],
      links: [
        { source: "spa", target: "cdn" },
        { source: "cdn", target: "analytics" }
      ]
    }
  },
  {
    title: "Nosso Amor (Template Romântico)",
    description: t("Site interativo e romântico, ideal para presentes de aniversário, Dia dos Namorados e casamentos. Totalmente personalizável, focado em criar experiências e memórias inesquecíveis.", "Interactive and romantic website, ideal for birthday, Valentine's Day and wedding gifts. Fully customizable, focused on creating unforgettable experiences and memories."),
    tags: ["React", "TypeScript", "Interativo", "Animações"],
    icon: Heart,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: t("Engajamento", "Engagement"), value: 95 },
      { label: "Dwell Time", value: 300 },
      { label: "FPS", value: 60 },
      { label: "Load (s)", value: 1.2 }
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Interactive UI", type: "app" },
        { id: "anim", label: "Animation Engine", type: "app" },
        { id: "assets", label: "Media CDN", type: "db" }
      ],
      links: [
        { source: "ui", target: "anim" },
        { source: "anim", target: "assets" }
      ]
    }
  },
  {
    title: "Wonder Games Cloud",
    description: t("Plataforma de emulação via web para jogos nostálgicos. Reviva clássicos no browser com tecnologia WebAssembly (WASM), proporcionando alta fidelidade e zero downloads.", "Web-based emulation platform for nostalgic games. Relive classics in the browser with WebAssembly (WASM) technology, providing high fidelity and zero downloads."),
    tags: ["React", "TypeScript", "WASM", "Gaming"],
    icon: Gamepad2,
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "FPS", value: 60 },
      { label: "Latency (ms)", value: 15 },
      { label: t("Jogos", "Games"), value: 100 },
      { label: "Dwell Time", value: 45 }
    ],
    architecture: {
      nodes: [
        { id: "web", label: "Web Client", type: "app" },
        { id: "wasm", label: "WASM Emulator", type: "app" },
        { id: "roms", label: "ROM Storage", type: "db" },
        { id: "state", label: "Save States", type: "db" }
      ],
      links: [
        { source: "web", target: "wasm" },
        { source: "wasm", target: "roms" },
        { source: "wasm", target: "state" }
      ]
    }
  }
];

export function Portfolio() {
  const { t } = useLanguage();
  const projects = getProjects(t);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <>
      <section className="py-24 px-6 md:px-12 lg:px-16 relative z-10">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block px-3 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded-full text-[10px] text-neon-purple font-bold tracking-[0.2em] uppercase mb-4 w-fit">
                {t('Nosso Portfólio', 'Our Portfolio')}
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">{t('Projetos em ', 'Featured ')}<span className="text-gradient">{t('Destaque', 'Projects')}</span></h2>
              <p className="text-gray-400 max-w-xl">{t('Nosso portfólio de engenharia. Produtos reais, construídos com tecnologia robusta a partir de nosso histórico de projetos.', 'Our engineering portfolio. Real products, built with robust technology from our project history.')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col md:flex-row cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full md:w-1/3 min-h-[200px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#020204]">
                  <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors duration-500" />
                  <project.icon size={80} className="text-neon-blue opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>
                
                <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-8 text-base leading-relaxed max-w-3xl">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-mono rounded bg-black/30 border border-white/10 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-white text-sm font-bold w-fit group/btn group-hover:text-neon-purple transition-colors">
                    {project.linkText}
                    <ArrowUpRight className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CaseStudyModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
