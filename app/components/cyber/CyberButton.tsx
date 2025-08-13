'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  glitchEffect?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  glitchEffect = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'relative font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-avalanche-red to-red-600 text-cyber-white border-2 border-avalanche-red',
    secondary: 'bg-gradient-to-r from-electric-blue to-neon-blue text-cyber-white border-2 border-electric-blue',
    ghost: 'bg-transparent text-electric-blue border-2 border-electric-blue hover:bg-electric-blue hover:text-cyber-black'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={glitchEffect && isHovered ? { x: [0, -2, 2, 0] } : {}}
      transition={{ duration: 0.1, repeat: glitchEffect && isHovered ? Infinity : 0 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current" />

      {/* Scan Line Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Cyber Glow */}
      <div 
        className={`absolute inset-0 rounded transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: variant === 'primary' 
            ? '0 0 20px #E84142, inset 0 0 20px rgba(232, 65, 66, 0.2)'
            : '0 0 20px #00D4FF, inset 0 0 20px rgba(0, 212, 255, 0.2)'
        }}
      />
    </motion.button>
  );
};

export default CyberButton;