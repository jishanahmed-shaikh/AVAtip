'use client';

import { motion } from 'framer-motion';
import { AnimatedButtonProps } from '../../types';
import { glowButtonVariants } from '../../utils/animationVariants';

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glow = false,
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-deep-black';
  
  const variantClasses = {
    primary: glow 
      ? 'bg-avalanche-red text-cyber-white border-2 border-avalanche-red hover:bg-transparent focus:ring-avalanche-red' 
      : 'bg-avalanche-red text-cyber-white hover:bg-red-600 focus:ring-avalanche-red',
    secondary: 'bg-transparent text-avalanche-red border-2 border-avalanche-red hover:bg-avalanche-red hover:text-cyber-white focus:ring-avalanche-red',
    ghost: 'bg-transparent text-cyber-white border-2 border-cyber-white hover:bg-cyber-white hover:text-deep-black focus:ring-cyber-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (glow && !disabled) {
    return (
      <motion.button
        className={buttonClasses}
        variants={glowButtonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;