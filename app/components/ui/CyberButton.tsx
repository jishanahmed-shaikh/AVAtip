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
  glitch?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  glitch = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = 'relative font-medium transition-all duration-300 cursor-pointer select-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-avalanche-red to-red-600 text-cyber-white border-gradient-animated',
    secondary: 'bg-dark-gray border border-border-gray text-cyber-white hover:border-avalanche-red',
    ghost: 'text-avalanche-red border border-avalanche-red bg-transparent hover:bg-avalanche-red hover:text-cyber-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${glitch ? 'animate-quantum-flicker' : ''}`}
      onClick={onClick}
      disabled={disabled}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-avalanche-red via-red-400 to-avalanche-red opacity-0 blur-xl"
        animate={{
          opacity: isHovered && !disabled ? [0, 0.3, 0] : 0,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      {/* Neural wave effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          animate={{
            x: isHovered && !disabled ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default CyberButton;
