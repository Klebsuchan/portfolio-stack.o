#!/bin/bash

# 1. Update Header.tsx
sed -i 's/text-sm font-medium/text-xs font-bold tracking-[0.15em]/g' src/components/Header.tsx
sed -i 's/rounded-full bg-white\/5/rounded-full bg-white\/5 backdrop-blur-md/g' src/components/Header.tsx
sed -i 's/INICIE SEU PROJETO/START PROJECT/g' src/components/Header.tsx

# 2. Update Hero.tsx
sed -i 's/text-4xl sm:text-5xl md:text-\[80px\] font-black leading-\[1.1\] md:leading-\[0.9\] tracking-tight/text-5xl sm:text-6xl md:text-[100px] font-black leading-[1] md:leading-[0.85] tracking-tighter/g' src/components/Hero.tsx
sed -i 's/bg-neon-blue\/10 border border-neon-blue\/20/bg-white\/5 border border-white\/10 backdrop-blur-md text-white/g' src/components/Hero.tsx
sed -i 's/text-neon-blue font-bold/text-white font-semibold/g' src/components/Hero.tsx

# 3. Update Services.tsx
sed -i 's/text-3xl md:text-5xl font-black tracking-tight/text-4xl md:text-6xl font-black tracking-tighter/g' src/components/Services.tsx
sed -i 's/bg-neon-blue\/10 border border-neon-blue\/20/bg-white\/5 border border-white\/10 backdrop-blur-md text-white/g' src/components/Services.tsx
sed -i 's/text-neon-blue font-bold/text-white font-semibold/g' src/components/Services.tsx

# 4. Update Portfolio.tsx
sed -i 's/text-3xl md:text-5xl font-black tracking-tight/text-4xl md:text-6xl font-black tracking-tighter/g' src/components/Portfolio.tsx
sed -i 's/bg-neon-purple\/10 border border-neon-purple\/20 text-neon-purple/bg-white\/5 border border-white\/10 backdrop-blur-md text-white/g' src/components/Portfolio.tsx
sed -i 's/text-neon-purple font-bold/text-white font-semibold/g' src/components/Portfolio.tsx

# 5. Update AboutUs.tsx
sed -i 's/text-3xl md:text-5xl font-black tracking-tight/text-4xl md:text-6xl font-black tracking-tighter/g' src/components/AboutUs.tsx
sed -i 's/bg-neon-blue\/10 border border-neon-blue\/20 text-neon-blue/bg-white\/5 border border-white\/10 backdrop-blur-md text-white/g' src/components/AboutUs.tsx
sed -i 's/bg-neon-purple\/10 border border-neon-purple\/20 text-neon-purple/bg-white\/5 border border-white\/10 backdrop-blur-md text-white/g' src/components/AboutUs.tsx

