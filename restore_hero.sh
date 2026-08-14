sed -i 's/colors={\["#ffffff", "#a1a1aa", "#d4d4d8", "#71717a", "#e4e4e7"\]}/colors={\["#00f2ff", "#bc13fe", "#ffffff", "#7000ff", "#38bdf8"\]}/g' src/components/Hero.tsx
sed -i 's/border-l-2 border-white\/20/border-l-4 border-neon-blue/g' src/components/Hero.tsx
sed -i 's/text-zinc-300 font-medium/text-neon-blue font-bold/g' src/components/Hero.tsx
sed -i 's/border border-zinc-800 backdrop-blur-none text-zinc-400/bg-neon-blue\/10 border border-neon-blue\/20 text-neon-blue/g' src/components/Hero.tsx
