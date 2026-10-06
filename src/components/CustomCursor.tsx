import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect hover over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest('button, a, input, textarea, .glass-card, [role="button"]');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Magnetic Ring Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none -z-10 shadow-neon-blue"
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 18),
          y: mousePosition.y - (isHovered ? 26 : 18),
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          borderColor: isHovered ? 'rgba(0, 240, 255, 0.9)' : 'rgba(139, 92, 246, 0.5)',
          scale: isClicked ? 0.85 : 1,
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 280,
          mass: 0.4,
        }}
      />

      {/* Inner Precision Neon Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-300 pointer-events-none shadow-[0_0_12px_#00f0ff]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicked ? 1.6 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#ec4899' : '#00f0ff',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </div>
  );
};
