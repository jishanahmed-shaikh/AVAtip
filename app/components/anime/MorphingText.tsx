'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className = '',
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative min-h-[2rem] flex items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            y: 20, 
            opacity: 0,
            filter: "blur(5px)",
            scale: 0.95
          }}
          animate={{ 
            y: 0, 
            opacity: 1,
            filter: "blur(0px)",
            scale: 1
          }}
          exit={{ 
            y: -20, 
            opacity: 0,
            filter: "blur(5px)",
            scale: 1.05
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 flex items-center justify-center font-display"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;