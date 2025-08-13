'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingSequenceProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const LoadingSequence: React.FC<LoadingSequenceProps> = ({ 
  isLoading, 
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStage(1);
            setTimeout(() => {
              setStage(2);
              setTimeout(() => {
                onComplete?.();
              }, 800);
            }, 600);
          }, 400);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-deep-black z-50 flex items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Stage 0: Loading */}
        {stage === 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Logo */}
            <motion.div
              className="mb-12"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-6xl font-thin text-cyber-white">
                <span className="text-avalanche-red">AVA</span>tip
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-gradient-to-r from-avalanche-red to-red-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Loading Text */}
            <motion.div
              className="text-gray-400 font-mono text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Initializing Neural Network... {Math.floor(progress)}%
            </motion.div>

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-avalanche-red rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Stage 1: Success Animation */}
        {stage === 1 && (
          <motion.div
            className="text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20 
            }}
          >
            <motion.div
              className="w-20 h-20 border-4 border-avalanche-red rounded-full flex items-center justify-center mb-6 mx-auto"
              animate={{
                rotate: [0, 360],
                boxShadow: [
                  "0 0 0px rgba(232, 65, 66, 0)",
                  "0 0 30px rgba(232, 65, 66, 0.5)",
                  "0 0 0px rgba(232, 65, 66, 0)"
                ]
              }}
              transition={{
                rotate: { duration: 1, ease: "easeInOut" },
                boxShadow: { duration: 1.5, repeat: Infinity }
              }}
            >
              <motion.div
                className="text-3xl text-avalanche-red"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                ✓
              </motion.div>
            </motion.div>
            
            <motion.div
              className="text-cyber-white text-xl font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connection Established
            </motion.div>
          </motion.div>
        )}

        {/* Stage 2: Fade Out */}
        {stage === 2 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl font-thin text-cyber-white">
              <span className="text-avalanche-red">AVA</span>tip
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingSequence;