import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}

export function InfoModal({ isOpen, onClose, title, content }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-3xl bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar text-gray-300 leading-relaxed text-sm md:text-base">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
