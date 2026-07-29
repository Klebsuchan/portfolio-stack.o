import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Terminal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: 'Stack.O Terminal v1.0.0' },
    { type: 'output', text: `Type 'help' to see available commands.` }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    let output = '';
    switch (trimmedCmd) {
      case 'help':
        output = `Available commands:\n  whoami     - Info about you\n  services   - List our services\n  stack      - Our tech stack\n  hire       - Start a project\n  clear      - Clear terminal`;
        break;
      case 'whoami':
        output = `guest@visitor. You look like someone with a great vision. Type 'hire' to make it real.`;
        break;
      case 'services':
        output = `1. Web/App Dev\n2. Code Refactoring\n3. Dedicated Squads`;
        break;
      case 'stack':
        output = `React, Next.js, Node.js, Python, FastAPI, Supabase, AWS, Docker`;
        break;
      case 'hire':
        output = `Initializing contact sequence... Please scroll to the Contact section or email hello@stacko.dev`;
        // Or programmatically scroll
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for options.`;
    }

    setHistory(prev => [...prev, { type: 'input', text: cmd }, { type: 'output', text: output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      handleCommand(input);
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <div className="w-full flex justify-center pb-12 pt-6 bg-[#020204]">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-neon-blue transition-colors"
        >
          <TerminalIcon size={14} />
          <span>{t("Abrir Terminal Interativo", "Open Interactive Terminal")}</span>
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 px-6 bg-[#020204] relative z-20 flex justify-center border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-black rounded-lg border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm"
      >
        {/* Terminal Header */}
        <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-gray-800">
          <div className="flex gap-2">
            <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"></button>
          </div>
          <div className="text-gray-500 text-xs font-bold">root@stacko:~</div>
          <div className="w-12"></div> {/* Spacer for centering */}
        </div>
        
        {/* Terminal Body */}
        <div className="p-4 h-64 overflow-y-auto custom-scrollbar bg-black/90 text-gray-300">
          {history.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">
              {line.type === 'input' ? (
                <div><span className="text-green-400">guest@stacko:~$</span> {line.text}</div>
              ) : (
                <div className="text-gray-400">{line.text}</div>
              )}
            </div>
          ))}
          
          <form onSubmit={onSubmit} className="flex mt-2">
            <span className="text-green-400 mr-2">guest@stacko:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-700"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </form>
          <div ref={endRef} />
        </div>
      </motion.div>
    </section>
  );
}
