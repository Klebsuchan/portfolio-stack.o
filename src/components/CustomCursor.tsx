import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_#00f2ff]"
        animate={{ 
          x: mousePosition.x - 6, 
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-neon-purple rounded-full pointer-events-none z-[100] mix-blend-screen bg-neon-purple/10 backdrop-blur-[2px]"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#00f2ff' : '#bc13fe',
          backgroundColor: isHovering ? 'rgba(0,242,255,0.1)' : 'rgba(188,19,254,0.1)'
        }}
        transition={{ type: 'tween', ease: 'circOut', duration: 0.4 }}
      />
    </>
  );
}
