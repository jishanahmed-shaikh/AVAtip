'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HologramCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const HologramCard: React.FC<HologramCardProps> = ({ 
  children, 
  className = '',
  glowColor = '#00D4FF'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Hologram Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-electric-blue/5 to-transparent rounded-xl animate-hologram" />
      
      {/* Scan Lines */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/10 to-transparent animate-scan-line" />
      </div>

      {/* Glow Border */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 20px ${glowColor}40, inset 0 0 20px ${glowColor}20`
        }}
      />

      {/* Content */}
      <div 
        className="relative z-10 bg-cyber-black/80 backdrop-blur-md border border-electric-blue/30 rounded-xl p-6 h-full"
        style={{ transform: "translateZ(50px)" }}
      >
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-blue rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-blue rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-blue rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-blue rounded-br-xl" />
    </motion.div>
  );
};

export default HologramCard;