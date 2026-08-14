import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const codeBefore = `// Legacy Code
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].active) {
      total = total + items[i].price;
    }
  }
  return total;
}`;

const codeAfter = `// Clean Code
const calculateTotal = (items) => 
  items
    .filter(item => item.active)
    .reduce((sum, item) => sum + item.price, 0);`;

export function InteractiveCodeEditor() {
  const { t } = useLanguage();
  const [isRefactored, setIsRefactored] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRun = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Simulate refactoring process
    setTimeout(() => {
      setIsRefactored(!isRefactored);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="mt-6 border border-white/10 rounded-xl overflow-hidden bg-[#020204]/80 backdrop-blur-sm relative group/editor">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <button
          onClick={handleRun}
          disabled={isAnimating}
          className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase bg-zinc-400/20 hover:bg-zinc-400/40 text-zinc-400 px-3 py-1 rounded transition-colors disabled:opacity-50"
        >
          {isAnimating ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
              <Play size={12} />
            </motion.div>
          ) : isRefactored ? (
            <>
              <CheckCircle2 size={12} /> {t('Revert', 'Revert')}
            </>
          ) : (
            <>
              <Play size={12} /> {t('Refatorar', 'Refactor')}
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 relative min-h-[140px] font-mono text-xs md:text-sm">
        <AnimatePresence mode="wait">
          {!isRefactored ? (
            <motion.div
              key="before"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400"
            >
              <pre>
                <code className="text-red-400/80">// Legacy Code{'\n'}</code>
                <code className="text-blue-300">function</code>{' '}
                <code className="text-yellow-200">calculateTotal</code>
                <code className="text-gray-300">(items) {'{\n'}</code>
                <code className="text-gray-400">  let total = 0;{'\n'}</code>
                <code className="text-gray-400">  for (let i = 0; i &lt; items.length; i++) {'{\n'}</code>
                <code className="text-gray-400">    if (items[i].active) {'{\n'}</code>
                <code className="text-gray-400">      total = total + items[i].price;{'\n'}</code>
                <code className="text-gray-400">    {'}\n'}</code>
                <code className="text-gray-400">  {'}\n'}</code>
                <code className="text-gray-400">  return total;{'\n'}</code>
                <code className="text-gray-300">{'}'}</code>
              </pre>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400"
            >
              <pre>
                <code className="text-green-400/80">// Clean Code{'\n'}</code>
                <code className="text-blue-300">const</code>{' '}
                <code className="text-yellow-200">calculateTotal</code>{' = '}
                <code className="text-gray-300">(items) =&gt;{'\n'}</code>
                <code className="text-gray-400">  items{'\n'}</code>
                <code className="text-white">    .filter</code>
                <code className="text-gray-400">(item =&gt; item.active){'\n'}</code>
                <code className="text-zinc-400">    .reduce</code>
                <code className="text-gray-400">((sum, item) =&gt; sum + item.price, 0);</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Scanning effect during animation */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-zinc-400/50 shadow-[0_0_10px_#bc13fe] z-10"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
