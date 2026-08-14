import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{x: number, y: number, id: number}[]>([]);
  const trailRef = useRef<{x: number, y: number, id: number}[]>([]);
  const idCounter = useRef(0);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newPoint = { x: e.clientX, y: e.clientY, id: idCounter.current++ };
      trailRef.current = [...trailRef.current, newPoint].slice(-10); // Keep last 10 points
      setTrail(trailRef.current);
      
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

  useEffect(() => {
    // Fade out trail periodically if mouse is still
    const interval = setInterval(() => {
      if (trailRef.current.length > 0) {
        trailRef.current = trailRef.current.slice(1);
        setTrail([...trailRef.current]);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.05 }}
      />
      
      {/* Glow / Hover Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{ 
          x: mousePosition.x - 24, 
          y: mousePosition.y - 24,
          scale: isHovering ? 1.2 : 0.4,
          opacity: isHovering ? 1 : 0.5,
          borderColor: isHovering ? '#ffffff' : 'rgba(255,255,255,0.4)',
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.5 }}
      />

      {/* Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-2 h-2 bg-zinc-400 rounded-full pointer-events-none z-[99] mix-blend-screen shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          style={{ 
            x: point.x - 4, 
            y: point.y - 4,
          }}
        />
      ))}
    </>
  );
}
