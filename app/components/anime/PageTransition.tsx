'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isLoading = false 
}) => {
  const [showContent, setShowContent] = useState(!isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Reveal Animation */}
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            {children}
          </motion.div>

          {/* Overlay Bars Animation */}
          <div className="fixed inset-0 pointer-events-none z-40">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 bg-avalanche-red"
                style={{
                  left: `${i * 20}%`,
                  width: '20%',
                  height: '100%',
                }}
                initial={{ y: '0%' }}
                animate={{ y: '-100%' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1 + 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;