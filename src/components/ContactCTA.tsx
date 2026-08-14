import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactCTA() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    idea: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.service || !formData.idea) return;

    const phoneNumber = "5554991064604"; // Replace with actual WhatsApp number
    const message = t(
      `Olá Stack.O! Gostaria de falar sobre um novo projeto.%0A%0A*Nome:* ${formData.name}%0A*Serviço Desejado:* ${formData.service}%0A*Sobre a Ideia:* ${formData.idea}`,
      `Hello Stack.O! I would like to talk about a new project.%0A%0A*Name:* ${formData.name}%0A*Desired Service:* ${formData.service}%0A*About the Idea:* ${formData.idea}`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-zinc-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neon-blue font-bold tracking-[0.2em] uppercase mb-6 w-fit">
              {t('Iniciar um Projeto', 'Start a Project')}
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-neon-blue leading-tight">
              {t('Vamos construir algo ', 'Let\'s build something ')}<span className="text-gradient">{t('incrível juntos.', 'amazing together.')}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {t(
                'Deixe-nos saber o que você tem em mente. Nossa equipe de engenheiros e designers está pronta para transformar sua visão em realidade com máxima performance e design premium.',
                'Let us know what you have in mind. Our team of engineers and designers is ready to transform your vision into reality with maximum performance and premium design.'
              )}
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-neon-blue" />
                </div>
                <span className="text-sm font-bold">{t('Orçamento sem compromisso', 'No-obligation quote')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-neon-purple" />
                </div>
                <span className="text-sm font-bold">{t('Resposta rápida via WhatsApp', 'Fast response via WhatsApp')}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#020204]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-zinc-400 to-white opacity-50 group-hover:opacity-100 transition-opacity" />
                <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t('Nome Completo', 'Full Name')}</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("Como devemos te chamar?", "What should we call you?")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neon-blue placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/5 transition-all"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t('Serviço Desejado', 'Desired Service')}</label>
                <div className="relative">
                  <select 
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neon-blue appearance-none focus:outline-none focus:border-zinc-400 focus:bg-white/5 transition-all cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0a0a0f]">{t('Selecione uma opção', 'Select an option')}</option>
                    <option value="Desenvolvimento de Site/App" className="bg-[#0a0a0f]">{t('Desenvolvimento de Site / App', 'Website / App Development')}</option>
                    <option value="Refatoração de Código" className="bg-[#0a0a0f]">{t('Refatoração de Código', 'Code Refactoring')}</option>
                    <option value="Marketing Digital e Criativos" className="bg-[#0a0a0f]">{t('Marketing Digital e Criativos', 'Digital Marketing and Creatives')}</option>
                    <option value="Trabalhos de Faculdade" className="bg-[#0a0a0f]">{t('Trabalhos de Faculdade / Acadêmicos', 'College / Academic Work')}</option>
                    <option value="Outros Serviços" className="bg-[#0a0a0f]">{t('Outros Serviços', 'Other Services')}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="idea" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t('Fale sobre a sua ideia', 'Tell us about your idea')}</label>
                <textarea 
                  id="idea"
                  name="idea"
                  required
                  rows={4}
                  value={formData.idea}
                  onChange={handleChange}
                  placeholder={t("Descreva brevemente o que você precisa...", "Briefly describe what you need...")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neon-blue placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/5 transition-all resize-none custom-scrollbar"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-neon-blue font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group/btn"
              >
                <MessageCircle size={20} className="group-hover/btn:scale-110 transition-transform" />
                {t('Enviar para o WhatsApp', 'Send via WhatsApp')}
                <Send size={16} className="opacity-70 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
