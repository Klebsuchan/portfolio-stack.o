sed -i 's/text-3xl md:text-5xl font-black tracking-tight/text-4xl md:text-6xl font-black tracking-tighter/g' src/components/Pricing.tsx
sed -i 's/bg-neon-blue\/10 border border-neon-blue\/20 text-neon-blue/bg-white\/5 border border-white\/10 text-white backdrop-blur-md/g' src/components/Pricing.tsx
sed -i 's/from-neon-blue\/10 via-neon-purple\/10/from-white\/5 via-white\/2/g' src/components/Pricing.tsx
sed -i 's/border-neon-blue\/20/border-white\/10/g' src/components/Pricing.tsx
sed -i 's/bg-neon-purple\/20/bg-white\/5/g' src/components/Pricing.tsx
sed -i 's/from-neon-blue to-neon-purple opacity-50/from-white\/40 to-transparent opacity-30/g' src/components/Pricing.tsx
sed -i 's/from-neon-blue to-neon-purple text-white/from-white to-zinc-400 text-black/g' src/components/Pricing.tsx
sed -i 's/text-neon-blue mt-0.5/text-white mt-0.5/g' src/components/Pricing.tsx
