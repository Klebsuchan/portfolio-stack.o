sed -i 's/colors={\["#00f2ff", "#bc13fe", "#ffffff", "#7000ff", "#38bdf8"\]}/colors={\["#ffffff", "#a1a1aa", "#d4d4d8", "#71717a", "#e4e4e7"\]}/g' src/components/Hero.tsx
sed -i 's/text-5xl sm:text-6xl md:text-\[100px\]/text-6xl sm:text-7xl md:text-\[130px\]/g' src/components/Hero.tsx
sed -i 's/min-h-\[90vh\]/min-h-screen/g' src/components/Hero.tsx
sed -i 's/max-w-\[600px\]/max-w-\[700px\] text-zinc-400 border-l border-zinc-800/g' src/components/Hero.tsx
sed -i 's/bg-white\/5 border border-white\/10 backdrop-blur-md/bg-transparent border border-zinc-800 backdrop-blur-none text-zinc-400/g' src/components/Hero.tsx
sed -i 's/text-white font-semibold/text-zinc-300 font-medium/g' src/components/Hero.tsx
