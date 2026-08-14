import { motion } from 'motion/react';

export function PlatformVisualization() {
  return (
    <div className="mt-8 border border-white/10 rounded-xl overflow-hidden bg-[#020204]/80 backdrop-blur-sm relative h-[200px] md:h-[240px] group/viz">
      {/* Mac window header */}
      <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover/viz:bg-red-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover/viz:bg-yellow-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover/viz:bg-green-500/80 transition-colors"></div>
        </div>
      </div>
      
      {/* Dashboard body */}
      <div className="p-4 grid grid-cols-3 gap-4 h-full relative overflow-hidden">
        {/* Sidebar */}
        <div className="col-span-1 flex flex-col gap-3 border-r border-white/5 pr-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-white/20 border border-white/30" />
            <div className="h-2 flex-1 rounded bg-white/5" />
          </div>
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
              className={`h-1.5 rounded-full ${i === 0 ? 'bg-white/40' : 'bg-white/5'}`}
            />
          ))}
          
          <div className="mt-auto pb-4">
             <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="w-10 h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center relative"
             >
                <div className="w-full h-full rounded-full bg-white absolute animate-ping opacity-20" />
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
             </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 flex flex-col gap-4 relative z-10">
          {/* Top stats */}
          <div className="flex gap-3">
             {[...Array(2)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex-1 h-16 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-3 flex flex-col justify-between group-hover/viz:border-white/10 transition-colors"
              >
                 <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                 <div className="flex items-end gap-1">
                   <motion.div 
                     initial={{ width: "20%" }}
                     animate={{ width: i === 0 ? "85%" : "60%" }}
                     transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                     className={`h-2 rounded-full ${i === 0 ? 'bg-zinc-400 shadow-[0_0_8px_rgba(188,19,254,0.5)]' : 'bg-white shadow-[0_0_8px_rgba(56,189,248,0.5)]'}`}
                   />
                 </div>
              </motion.div>
             ))}
          </div>

          {/* Chart area */}
          <div className="flex-1 rounded-lg bg-white/5 border border-white/5 p-4 flex items-end gap-2 group-hover/viz:border-white/10 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            
            {[30, 50, 40, 70, 55, 85, 60, 100, 75, 90].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ 
                  delay: 0.8 + (i * 0.05), 
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex-1 bg-gradient-to-t from-zinc-400/20 to-white/60 rounded-t-sm relative z-10 hover:from-zinc-400/40 hover:to-white/80 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 blur-[50px] pointer-events-none rounded-full" />
      </div>
    </div>
  );
}
