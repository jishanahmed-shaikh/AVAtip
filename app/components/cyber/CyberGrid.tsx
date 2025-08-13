'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CyberGridProps {
  className?: string;
  animated?: boolean;
}

const CyberGrid: React.FC<CyberGridProps> = ({ className = '', animated = true }) => {
  const [gridLines, setGridLines] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    const lines = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 2
    }));
    setGridLines(lines);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Horizontal Lines */}
      <div className="absolute inset-0">
        {gridLines.slice(0, 10).map((line) => (
          <motion.div
            key={`h-${line.id}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent"
            style={{ top: `${(line.id + 1) * 10}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={animated ? { 
              scaleX: [0, 1, 0], 
              opacity: [0, 0.6, 0] 
            } : { scaleX: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              delay: line.delay,
              repeat: animated ? Infinity : 0,
              repeatDelay: 2
            }}
          />
        ))}
      </div>

      {/* Vertical Lines */}
      <div className="absolute inset-0">
        {gridLines.slice(10).map((line) => (
          <motion.div
            key={`v-${line.id}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent"
            style={{ left: `${(line.id - 9) * 10}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={animated ? { 
              scaleY: [0, 1, 0], 
              opacity: [0, 0.6, 0] 
            } : { scaleY: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              delay: line.delay + 1,
              repeat: animated ? Infinity : 0,
              repeatDelay: 2
            }}
          />
        ))}
      </div>

      {/* Intersection Points */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={`point-${i}`}
            className="absolute w-1 h-1 bg-electric-blue rounded-full"
            style={{
              left: `${(i % 5) * 25 + 12.5}%`,
              top: `${Math.floor(i / 5) * 25 + 12.5}%`
            }}
            animate={animated ? {
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            } : { scale: 1, opacity: 0.8 }}
            transition={{
              duration: 2,
              delay: (i * 0.1) % 2,
              repeat: animated ? Infinity : 0,
              repeatDelay: 3
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberGrid;