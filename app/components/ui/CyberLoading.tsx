'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CyberLoadingProps {
  isLoading: boolean;
  onComplete: () => void;
  loadingText?: string;
  duration?: number;
}

const CyberLoading: React.FC<CyberLoadingProps> = ({
  isLoading,
  onComplete,
  loadingText = "AVAtip",
  duration = 3000
}) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'completing' | 'done'>('loading');

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 4;
        if (newProgress >= 100) {
          setPhase('completing');
          clearInterval(interval);
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 500);
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0.8,
      opacity: 0,
      rotateY: -90
    },
    animate: { 
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    initial: { 
      y: 20,
      opacity: 0,
      rotateX: -90
    },
    animate: { 
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!isLoading && phase === 'done') return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          animate="initial"
          exit="exit"
        >
          {/* Neural Network Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-avalanche-red/30 to-transparent"
                style={{
                  left: `${5 + i * 5}%`,
                  height: '100%'
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Scanning Grid */}
          <div className="absolute inset-0 cyber-grid opacity-10" />

          {/* Central Loading Interface */}
          <div className="relative z-10 text-center">
            
            {/* Logo Animation */}
            <motion.div
              className="mb-12"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex justify-center items-center gap-1">
                {loadingText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`text-6xl md:text-8xl font-thin ${
                      letter === 'A' || letter === 'V' || letter === 'A' 
                        ? 'text-avalanche-red neon-glow-red' 
                        : 'text-cyber-white'
                    }`}
                    variants={letterVariants}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Progress System */}
            <div className="space-y-8">
              
              {/* Hexagonal Progress Ring */}
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  {/* Progress Ring */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#E84142"
                    strokeWidth="2"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ 
                      strokeDashoffset: 283 - (283 * progress) / 100,
                      filter: [
                        'drop-shadow(0 0 5px #E84142)',
                        'drop-shadow(0 0 15px #E84142)',
                        'drop-shadow(0 0 5px #E84142)'
                      ]
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </svg>
                
                {/* Progress Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-cyber-white text-lg font-light"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {Math.round(progress)}%
                  </motion.span>
                </div>
              </div>

              {/* Status Text */}
              <motion.div
                className="space-y-4"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {phase === 'loading' && 'Initializing Neural Network...'}
                  {phase === 'completing' && 'Quantum Synchronization Complete'}
                  {phase === 'done' && 'System Ready'}
                </div>
                
                {/* Data Stream Indicator */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-6 bg-avalanche-red/40"
                      animate={{
                        scaleY: [0.4, 1, 0.4],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Particle Burst Effect */}
          {phase === 'completing' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-avalanche-red rounded-full"
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 800],
                    y: [0, (Math.random() - 0.5) * 600],
                    opacity: [1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: i * 0.05
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CyberLoading;
