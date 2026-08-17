import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CaseStudyModal } from './CaseStudyModal';

const getProjects = (t: any) => [
  {
    title: "Nexalytics Enterprise ERP",
    description: t("Plataforma abrangente de gestão de recursos corporativos. Integração em tempo real de cadeias de suprimentos, módulos financeiros e análises preditivas baseadas em IA para corporações globais.", "Comprehensive enterprise resource management platform. Real-time integration of supply chains, financial modules, and AI-driven predictive analytics for global corporations."),
    tags: ["Microservices", "React", "Node.js", "AI Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: t("Proc. de Dados", "Data Proc."), value: 99.9 },
      { label: "Uptime", value: 99.99 },
      { label: t("Eficiência", "Efficiency"), value: 45 },
      { label: t("Segurança", "Security"), value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "client", label: "Enterprise UI", type: "app" },
        { id: "gateway", label: "API Gateway", type: "app" },
        { id: "db", label: "Distributed SQL", type: "db" },
        { id: "ai", label: "ML Engine", type: "app" }
      ],
      links: [
        { source: "client", target: "gateway" },
        { source: "gateway", target: "db" },
        { source: "gateway", target: "ai" }
      ]
    }
  },
  {
    title: "Aegis Core Banking",
    description: t("Sistema bancário central de alta frequência com rigorosos padrões de conformidade (PCI-DSS) e segurança. Processamento transacional distribuído para instituições financeiras tier-1.", "High-frequency core banking system with strict compliance (PCI-DSS) and security standards. Distributed transactional processing for tier-1 financial institutions."),
    tags: ["FinTech", "TypeScript", "Kafka", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "TPS", value: 15000 },
      { label: "Latência (ms)", value: 5 },
      { label: "Conformidade", value: 100 },
      { label: t("Auditoria", "Audit"), value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "api", label: "GraphQL API", type: "app" },
        { id: "kafka", label: "Event Stream", type: "app" },
        { id: "ledger", label: "Immutable Ledger", type: "db" },
        { id: "auth", label: "Identity IAM", type: "app" }
      ],
      links: [
        { source: "api", target: "auth" },
        { source: "api", target: "kafka" },
        { source: "kafka", target: "ledger" }
      ]
    }
  },
  {
    title: "OmniCRM Intelligence",
    description: t("CRM alimentado por IA para equipes de vendas B2B. Automação de pontuação de leads, previsões de churn e suporte omnichannel em uma interface de alta performance.", "AI-powered CRM for B2B sales teams. Lead scoring automation, churn predictions, and omnichannel support in a high-performance interface."),
    tags: ["React", "AI", "WebSocket", "CRM"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: t("Conversão", "Conversion"), value: 35 },
      { label: "Acurácia IA", value: 92 },
      { label: "Load (s)", value: 0.8 },
      { label: t("Retenção", "Retention"), value: 88 }
    ],
    architecture: {
      nodes: [
        { id: "dash", label: "Sales Dashboard", type: "app" },
        { id: "ws", label: "Realtime WS", type: "app" },
        { id: "ai", label: "Predictive AI", type: "app" },
        { id: "db", label: "Vector DB", type: "db" }
      ],
      links: [
        { source: "dash", target: "ws" },
        { source: "dash", target: "ai" },
        { source: "ai", target: "db" }
      ]
    }
  },
  {
    title: "CloudMatrix Control Plane",
    description: t("Console unificado de gerenciamento para orquestração de infraestrutura multicloud. Otimização de custos, monitoramento de saúde de clusters e automação de deploy CI/CD.", "Unified management console for multi-cloud infrastructure orchestration. Cost optimization, cluster health monitoring, and CI/CD deployment automation."),
    tags: ["Cloud", "React", "Kubernetes", "Go"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Clusters", value: 500 },
      { label: "Deploy (s)", value: 45 },
      { label: "Savings (%)", value: 30 },
      { label: "Uptime", value: 99.99 }
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Control Plane UI", type: "app" },
        { id: "api", label: "Orchestration API", type: "app" },
        { id: "k8s", label: "K8s Clusters", type: "app" },
        { id: "metrics", label: "Time-Series DB", type: "db" }
      ],
      links: [
        { source: "ui", target: "api" },
        { source: "api", target: "k8s" },
        { source: "k8s", target: "metrics" },
        { source: "metrics", target: "ui" }
      ]
    }
  }
  ,
  {
    title: "Luminos Streaming",
    description: t("Plataforma de streaming de vídeo OTT com baixa latência e qualidade 4K adaptativa.", "OTT video streaming platform with low latency and adaptive 4K quality."),
    tags: ["React", "Go", "WebRTC", "Redis"],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Latência (ms)", value: 12 },
      { label: "Uptime", value: 99.99 },
      { label: "QoS", value: 100 },
      { label: "Usuários (M)", value: 2.5 }
    ],
    architecture: {
      nodes: [
        { id: "player", label: "Video Player", type: "app" },
        { id: "cdn", label: "Global CDN", type: "app" },
        { id: "transcoder", label: "Media Engine", type: "app" }
      ],
      links: [
        { source: "player", target: "cdn" },
        { source: "cdn", target: "transcoder" }
      ]
    }
  },
  {
    title: "Pulse HealthTech",
    description: t("Prontuário eletrônico unificado e sistema de telemedicina focado em segurança de dados HIPAA.", "Unified electronic health record and telemedicine system focused on HIPAA data security."),
    tags: ["Health", "Next.js", "Python", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Segurança", value: 100 },
      { label: "Pacientes (k)", value: 850 },
      { label: "Uptime", value: 99.9 },
      { label: "Consultas/dia", value: 15000 }
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Patient App", type: "app" },
        { id: "api", label: "Healthcare API", type: "app" },
        { id: "db", label: "Secure DB", type: "db" }
      ],
      links: [
        { source: "app", target: "api" },
        { source: "api", target: "db" }
      ]
    }
  },
  
  {
    title: "Stellar PropTech",
    description: t("Marketplace imobiliário com tours virtuais em 3D e contratos inteligentes.", "Real estate marketplace with 3D virtual tours and smart contracts."),
    tags: ["Real Estate", "Vue", "Three.js", "Solidity"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Propriedades", value: 25000 },
      { label: "Conversão (%)", value: 12 },
      { label: "Velocidade (s)", value: 1.2 },
      { label: "Imersão", value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "web", label: "Web Portal", type: "app" },
        { id: "3d", label: "3D Engine", type: "app" },
        { id: "chain", label: "Blockchain", type: "db" }
      ],
      links: [
        { source: "web", target: "3d" },
        { source: "web", target: "chain" }
      ]
    }
  },
  {
    title: "CyberShield SecOps",
    description: t("Dashboard de segurança cibernética com detecção de intrusão em tempo real.", "Cybersecurity dashboard with real-time intrusion detection."),
    tags: ["Security", "React", "Rust", "Elasticsearch"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Ameaças Block", value: 15000 },
      { label: "Análise (ms)", value: 2 },
      { label: "Precisão (%)", value: 99.9 },
      { label: "Uptime", value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "dash", label: "SecOps UI", type: "app" },
        { id: "engine", label: "Detection Engine", type: "app" },
        { id: "logs", label: "Log Storage", type: "db" }
      ],
      links: [
        { source: "dash", target: "engine" },
        { source: "engine", target: "logs" }
      ]
    }
  },
  {
    title: "EcoTrack Grid",
    description: t("Monitoramento de pegada de carbono e otimização de energia renovável para indústrias.", "Carbon footprint monitoring and renewable energy optimization for industries."),
    tags: ["GreenTech", "Svelte", "Python", "TimescaleDB"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Redução CO2", value: 45 },
      { label: "Sensores (k)", value: 120 },
      { label: "Previsão (%)", value: 94 },
      { label: "ROI (%)", value: 250 }
    ],
    architecture: {
      nodes: [
        { id: "iot", label: "IoT Sensors", type: "app" },
        { id: "ingest", label: "Data Ingestion", type: "app" },
        { id: "db", label: "Time-Series", type: "db" }
      ],
      links: [
        { source: "iot", target: "ingest" },
        { source: "ingest", target: "db" }
      ]
    }
  },
  {
    title: "Quantum DevTools",
    description: t("Plataforma de CI/CD baseada em IA que prevê falhas de compilação e otimiza testes.", "AI-based CI/CD platform that predicts build failures and optimizes tests."),
    tags: ["DevOps", "Go", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Tempo Build", value: 65 },
      { label: "Falhas Evitadas", value: 85 },
      { label: "Deploy/dia", value: 5000 },
      { label: "Produtividade", value: 40 }
    ],
    architecture: {
      nodes: [
        { id: "runner", label: "CI Runner", type: "app" },
        { id: "ai", label: "Predictor", type: "app" },
        { id: "cache", label: "Artifact Cache", type: "db" }
      ],
      links: [
        { source: "runner", target: "ai" },
        { source: "runner", target: "cache" }
      ]
    }
  },
  {
    title: "Aura Smart Home",
    description: t("Hub de IoT residencial unificado com automação residencial proativa e segurança.", "Unified residential IoT hub with proactive home automation and security."),
    tags: ["IoT", "React Native", "MQTT", "AWS IoT"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Dispositivos", value: 250000 },
      { label: "Latência (ms)", value: 15 },
      { label: "Uptime", value: 99.9 },
      { label: "Economia (kWh)", value: 30 }
    ],
    architecture: {
      nodes: [
        { id: "mobile", label: "Home App", type: "app" },
        { id: "broker", label: "MQTT Broker", type: "app" },
        { id: "device", label: "Smart Devices", type: "app" }
      ],
      links: [
        { source: "mobile", target: "broker" },
        { source: "broker", target: "device" }
      ]
    }
  },
  {
    title: "Nova EduTech",
    description: t("Ambiente virtual de aprendizagem adaptativo que personaliza trilhas educacionais.", "Adaptive virtual learning environment that personalizes educational tracks."),
    tags: ["EdTech", "Next.js", "GraphQL", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Alunos (k)", value: 500 },
      { label: "Engajamento", value: 75 },
      { label: "Retenção (%)", value: 92 },
      { label: "Cursos", value: 1200 }
    ],
    architecture: {
      nodes: [
        { id: "web", label: "Student Portal", type: "app" },
        { id: "api", label: "LMS API", type: "app" },
        { id: "db", label: "Knowledge Graph", type: "db" }
      ],
      links: [
        { source: "web", target: "api" },
        { source: "api", target: "db" }
      ]
    }
  },
  {
    title: "Velocity DeFi",
    description: t("Plataforma de negociação algorítmica de alta frequência para criptoativos.", "High-frequency algorithmic trading platform for crypto assets."),
    tags: ["Crypto", "Rust", "React", "Kafka"],
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "TPS", value: 100000 },
      { label: "Latência (µs)", value: 50 },
      { label: "Volume (B)", value: 2.5 },
      { label: "Segurança", value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Trading Terminal", type: "app" },
        { id: "engine", label: "Matching Engine", type: "app" },
        { id: "chain", label: "Liquidity Pool", type: "db" }
      ],
      links: [
        { source: "ui", target: "engine" },
        { source: "engine", target: "chain" }
      ]
    }
  },
  {
    title: "Vertex MMO Engine",
    description: t("Backend escalável para jogos multijogador massivos online com física em tempo real.", "Scalable backend for massive multiplayer online games with real-time physics."),
    tags: ["Gaming", "C++", "Go", "Redis"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "CCU (k)", value: 200 },
      { label: "Tick Rate", value: 128 },
      { label: "Latência (ms)", value: 30 },
      { label: "Uptime", value: 99.99 }
    ],
    architecture: {
      nodes: [
        { id: "client", label: "Game Client", type: "app" },
        { id: "server", label: "Game Server", type: "app" },
        { id: "state", label: "State DB", type: "db" }
      ],
      links: [
        { source: "client", target: "server" },
        { source: "server", target: "state" }
      ]
    }
  },
  {
    title: "Apex HR Suite",
    description: t("Sistema de gestão de talentos focado em performance, feedbacks contínuos e analytics.", "Talent management system focused on performance, continuous feedback, and analytics."),
    tags: ["HR", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Arquitetura", "View Architecture"),
    metrics: [
      { label: "Empresas", value: 1500 },
      { label: "Feedbacks (M)", value: 5 },
      { label: "Retenção (%)", value: 98 },
      { label: "Satisfação", value: 100 }
    ],
    architecture: {
      nodes: [
        { id: "web", label: "HR Dashboard", type: "app" },
        { id: "api", label: "Analytics API", type: "app" },
        { id: "db", label: "Data Warehouse", type: "db" }
      ],
      links: [
        { source: "web", target: "api" },
        { source: "api", target: "db" }
      ]
    }
  },
  
  
  {
    title: "Zenith Generative AI",
    description: t("Estúdio de criação de conteúdo movido a IA com geração de texto, imagem e áudio integrados.", "AI-powered content creation studio with integrated text, image, and audio generation."),
    tags: ["AI", "React", "Python", "PyTorch"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    linkText: t("Ver Estudo de Caso", "View Case Study"),
    metrics: [
      { label: "Requisições/dia", value: 500000 },
      { label: "Geração (s)", value: 1.5 },
      { label: "Modelos", value: 15 },
      { label: "Precisão (%)", value: 98 }
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Studio UI", type: "app" },
        { id: "gateway", label: "Model Gateway", type: "app" },
        { id: "inference", label: "GPU Cluster", type: "db" }
      ],
      links: [
        { source: "ui", target: "gateway" },
        { source: "gateway", target: "inference" }
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
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neon-purple font-bold tracking-[0.2em] uppercase mb-4 w-fit">
                {t('Nosso Portfólio', 'Our Portfolio')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">{t('Projetos em ', 'Featured ')}<span className="text-gradient">{t('Destaque', 'Projects')}</span></h2>
              <p className="text-gray-400 max-w-xl">{t('Nosso portfólio de engenharia. Produtos reais, construídos com tecnologia robusta a partir de nosso histórico de projetos.', 'Our engineering portfolio. Real products, built with robust technology from our project history.')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col lg:flex-row cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full lg:w-1/3 min-h-[120px] md:min-h-[200px] flex items-center justify-center relative overflow-hidden bg-[#020204]">
                  <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                
                <div className="w-full lg:w-2/3 p-4 md:p-8 lg:p-12 flex flex-col relative bg-gradient-to-br from-white/[0.02] to-transparent flex-1">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-sm sm:text-lg md:text-3xl font-bold mb-1 md:mb-4 text-white group-hover:text-neon-blue transition-colors line-clamp-2 lg:line-clamp-none">{project.title}</h3>
                  <p className="text-gray-400 mb-2 md:mb-8 text-[10px] sm:text-xs md:text-base leading-relaxed max-w-3xl line-clamp-3 lg:line-clamp-none">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 md:gap-3 mb-2 md:mb-8">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-1.5 py-0.5 md:px-3 md:py-1.5 text-[8px] sm:text-[9px] md:text-xs font-mono rounded bg-black/30 border border-white/10 text-gray-400 backdrop-blur-md tracking-wider whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-1 md:gap-2 text-white text-[10px] sm:text-[11px] md:text-sm font-bold w-fit group/btn group-hover:text-neon-blue transition-colors mt-auto">
                    <span className="hidden sm:inline">{project.linkText}</span>
                    <span className="sm:hidden">{t("Ver", "View")}</span>
                    <ArrowUpRight className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform w-3 h-3 md:w-4 md:h-4" />
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
