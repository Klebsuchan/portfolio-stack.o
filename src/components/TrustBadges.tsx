import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const partners = [
  "Farmácias São João", "Google", "Sicredi", "HSVP", "AWS", "Tramontina", "UPF", "Stripe", "Gerdau", "Be8", "Microsoft", "Comercial Zaffari", "Banrisul", "Vercel", "Atitus", "Marcopolo", "Amazon", "Coleurb", "Randon", "Cloudflare"
];

export function TrustBadges() {
  const { t } = useLanguage();
  return (
    <section className="py-12 border-b border-white/5 bg-[#020204]/80 backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="w-full text-center mb-6">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{t('Empresas e tecnologias que confiam em nós', 'Companies and technologies that trust us')}</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#020204] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#020204] to-transparent z-10"></div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-16 items-center px-8"
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="text-xl md:text-2xl font-black text-white/20 tracking-tighter uppercase grayscale hover:grayscale-0 hover:text-white/80 transition-all duration-300 cursor-default">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
