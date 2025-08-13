'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const scale = useTransform(scrollY, [300, 400], [0.8, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-30 w-12 h-12 bg-gradient-to-br from-avalanche-red to-red-600 rounded-full flex items-center justify-center shadow-lg border border-avalanche-red/30 backdrop-blur-sm group"
      style={{ opacity, scale }}
      onClick={scrollToTop}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(232, 65, 66, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(232, 65, 66, 0.3)",
          "0 0 10px rgba(232, 65, 66, 0.6)",
          "0 0 0px rgba(232, 65, 66, 0.3)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-avalanche-red/20 rounded-full blur-md group-hover:bg-avalanche-red/40 transition-colors duration-300" />
      
      {/* Arrow icon */}
      <motion.svg
        className="w-6 h-6 text-cyber-white relative z-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{
          y: [0, -2, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </motion.svg>

      {/* Rotating border */}
      <motion.div
        className="absolute inset-0 rounded-full border border-avalanche-red/50"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.button>
  );
};

export default ScrollToTop;
