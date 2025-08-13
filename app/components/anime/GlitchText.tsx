'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  trigger?: 'hover' | 'auto' | 'none';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 'medium',
  trigger = 'hover'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  const intensitySettings = {
    low: { duration: 0.1, frequency: 0.3, charChange: 0.1 },
    medium: { duration: 0.2, frequency: 0.5, charChange: 0.2 },
    high: { duration: 0.3, frequency: 0.8, charChange: 0.4 }
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    if (trigger === 'auto') {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), settings.duration * 1000);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [trigger, settings.duration]);

  useEffect(() => {
    if (!isGlitching) {
      setGlitchText(text);
      return;
    }

    const glitchInterval = setInterval(() => {
      const newText = text
        .split('')
        .map(char => {
          if (Math.random() < settings.charChange && char !== ' ') {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');
      
      setGlitchText(newText);
    }, 50);

    const resetTimeout = setTimeout(() => {
      setGlitchText(text);
      setIsGlitching(false);
    }, settings.duration * 1000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(resetTimeout);
    };
  }, [isGlitching, text, settings]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsGlitching(false);
    }
  };

  return (
    <motion.span
      className={`relative inline-block cursor-hover ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #E84142, -2px 0 0 #00D4FF",
          "-2px 0 0 #E84142, 2px 0 0 #00D4FF",
          "0 0 0 transparent"
        ]
      } : {}}
      transition={{
        duration: 0.1,
        repeat: isGlitching ? Infinity : 0,
        repeatType: "reverse"
      }}
    >
      {glitchText}
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-avalanche-red opacity-70"
            animate={{
              x: [0, 2, -2, 1, -1, 0],
              opacity: [0.7, 0.3, 0.8, 0.2, 0.9, 0.7]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {glitchText}
          </motion.span>
          
          <motion.span
            className="absolute inset-0 text-cyan-400 opacity-50"
            animate={{
              x: [0, -2, 2, -1, 1, 0],
              opacity: [0.5, 0.8, 0.2, 0.9, 0.3, 0.5]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.05
            }}
          >
            {glitchText}
          </motion.span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;