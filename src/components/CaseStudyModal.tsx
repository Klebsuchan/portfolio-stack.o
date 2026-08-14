import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, BarChart3, Database } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import * as d3 from 'd3';

function MetricsChart({ data }: { data: any[] }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current || !data) return;
    
    d3.select(chartRef.current).selectAll('*').remove();
    
    const width = chartRef.current.clientWidth;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 0]).nice()
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .attr('color', 'rgba(255,255,255,0.4)')
      .selectAll('text')
      .attr('dy', '1em')
      .style('font-family', 'var(--font-mono)')
      .style('font-size', '10px');
      
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => d + '%'))
      .attr('color', 'rgba(255,255,255,0.4)')
      .selectAll('text')
      .style('font-family', 'var(--font-mono)')
      .style('font-size', '10px');

    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').attr('stroke', 'rgba(255,255,255,0.1)');

    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'bar-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');
      
    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#ffffff');
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#a1a1aa');

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.label) || 0)
      .attr('y', height - margin.bottom)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .attr('fill', 'url(#bar-gradient)')
      .attr('rx', 4)
      .transition()
      .duration(1000)
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value));

  }, [data]);

  return <div ref={chartRef} className="w-full h-[250px]" />;
}

function ArchitectureDiagram({ nodes, links }: { nodes: any[], links: any[] }) {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !nodes || !links) return;
    const width = svgRef.current.clientWidth;
    const height = 300;

    d3.select(svgRef.current).selectAll('*').remove();

    // Deep copy nodes and links for simulation so it doesn't mutate original
    const simNodes = nodes.map(d => ({ ...d }));
    const simLinks = links.map(d => ({ ...d }));

    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    const simulation = d3.forceSimulation(simNodes)
      .force('link', d3.forceLink(simLinks).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(simLinks)
      .enter()
      .append('line')
      .attr('stroke', 'rgba(188, 19, 254, 0.4)')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4, 4');

    const node = svg.append('g')
      .selectAll('g')
      .data(simNodes)
      .enter()
      .append('g');

    node.append('circle')
      .attr('r', 25)
      .attr('fill', 'rgba(2, 2, 4, 0.9)')
      .attr('stroke', (d: any) => d.type === 'db' ? '#a1a1aa' : '#ffffff')
      .attr('stroke-width', 3);

    node.append('text')
      .text((d: any) => d.label)
      .attr('x', 0)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .attr('fill', '#fff')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('font-family', 'var(--font-mono)');
      
    // Icon inside circle depending on type
    node.append('text')
      .text((d: any) => d.type === 'db' ? 'DB' : 'API')
      .attr('x', 0)
      .attr('y', 4)
      .attr('text-anchor', 'middle')
      .attr('fill', (d: any) => d.type === 'db' ? '#a1a1aa' : '#ffffff')
      .style('font-size', '10px')
      .style('font-family', 'var(--font-mono)');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => Math.max(25, Math.min(width - 25, d.source.x)))
        .attr('y1', (d: any) => Math.max(25, Math.min(height - 25, d.source.y)))
        .attr('x2', (d: any) => Math.max(25, Math.min(width - 25, d.target.x)))
        .attr('y2', (d: any) => Math.max(25, Math.min(height - 25, d.target.y)));

      node.attr('transform', (d: any) => `translate(${Math.max(25, Math.min(width - 25, d.x))},${Math.max(25, Math.min(height - 25, d.y))})`);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes, links]);

  return <div ref={svgRef} className="w-full h-[300px]" />;
}

export function CaseStudyModal({ project, isOpen, onClose }: { project: any, isOpen: boolean, onClose: () => void }) {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020204]/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl bg-[#0a0a0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
          >
            <div className="absolute top-0 right-0 p-6 z-30">
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-black/40 hover:bg-zinc-400/20 border border-white/10 hover:border-zinc-400 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="h-[250px] md:h-[350px] relative w-full overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#020204]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  {project.icon && <project.icon size={200} className="text-white blur-[2px]" />}
                </div>

                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                  <div className="inline-block px-3 py-1 bg-white/20 border border-white/30 rounded-full text-[10px] text-white font-bold tracking-[0.2em] uppercase mb-4 w-fit backdrop-blur-md">
                    {t('Estudo de Caso', 'Case Study')}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 text-xs font-mono rounded bg-black/50 border border-white/10 text-gray-300 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <ExternalLink className="text-white" size={20} /> {t('O Desafio & Solução', 'The Challenge & Solution')}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {project.description} {t(' Este projeto exigiu uma reformulação completa da arquitetura base para suportar alta escalabilidade e concorrência, focando em performance, zero-downtime e segurança em nível corporativo.', ' This project required a complete overhaul of the core architecture to support high scalability and concurrency, focusing on performance, zero-downtime, and enterprise-grade security.')}
                    </p>
                    
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <BarChart3 className="text-zinc-400" size={20} /> {t('Métricas de Sucesso', 'Success Metrics')}
                    </h3>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                      <MetricsChart data={project.metrics} />
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Database className="text-white" size={20} /> {t('Arquitetura (ERD Dinâmico)', 'Architecture (Dynamic ERD)')}
                    </h3>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-8 relative overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
                      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-zinc-400/5 blur-[100px] pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] pointer-events-none" />
                      <ArchitectureDiagram nodes={project.architecture.nodes} links={project.architecture.links} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 blur-xl group-hover:bg-white/40 transition-colors" />
                        <div className="text-3xl md:text-5xl font-black text-white mb-2">+{project.metrics[0]?.value || 400}%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{t('Aumento em ', 'Increase in ')}{project.metrics[0]?.label || t('Performance', 'Performance')}</div>
                      </div>
                      <div className="bg-gradient-to-br from-zinc-400/10 to-transparent border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-400/20 blur-xl group-hover:bg-zinc-400/40 transition-colors" />
                        <div className="text-3xl md:text-5xl font-black text-zinc-400 mb-2">99.99%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{t('Uptime Garantido', 'Guaranteed Uptime')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
