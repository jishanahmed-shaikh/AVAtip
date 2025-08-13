'use client';

import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'holographic' | 'neural';
  interactive?: boolean;
  glowColor?: string;
}

const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  variant = 'default',
  interactive = true,
  glowColor = '#E84142'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;

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
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const variantClasses = {
    default: 'bg-dark-gray border border-border-gray',
    glass: 'glass-morphism-strong',
    holographic: 'bg-dark-gray border border-border-gray holographic',
    neural: 'bg-gradient-to-br from-dark-gray via-medium-gray to-dark-gray border border-avalanche-red/30'
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${variantClasses[variant]} ${className}`}
      style={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: interactive ? 1.02 : 1,
        y: interactive ? -5 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Animated border gradient */}
      {variant === 'neural' && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `conic-gradient(from 0deg, ${glowColor}, transparent, ${glowColor})`,
            padding: '1px',
          }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        >
          <div className="w-full h-full bg-dark-gray rounded-lg" />
        </motion.div>
      )}

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      {/* Neural wave scanner */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-lg"
        initial={false}
        animate={{
          background: isHovered
            ? `linear-gradient(45deg, transparent, ${glowColor}20, transparent)`
            : 'transparent'
        }}
      >
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-avalanche-red to-transparent"
          animate={{
            y: isHovered ? ['0%', '100%'] : '0%',
            opacity: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: isHovered
            ? `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20, 0 0 60px ${glowColor}10`
            : 'none',
        }}
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Corner indicators */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
    </motion.div>
  );
};

export default CyberCard;
