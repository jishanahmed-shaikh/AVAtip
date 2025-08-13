'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LiquidMorphProps {
  className?: string;
  color?: string;
  size?: number;
}

const LiquidMorph: React.FC<LiquidMorphProps> = ({ 
  className = '', 
  color = '#E84142',
  size = 100 
}) => {
  const [morphPath, setMorphPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphPath(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const paths = [
    "M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z",
    "M50,5 C75,15 85,35 85,50 C85,65 75,85 50,95 C25,85 15,65 15,50 C15,35 25,15 50,5 Z",
    "M50,15 C65,5 85,25 95,50 C85,75 65,95 50,85 C35,95 15,75 5,50 C15,25 35,5 50,15 Z",
    "M50,8 C72,8 92,28 92,50 C92,72 72,92 50,92 C28,92 8,72 8,50 C8,28 28,8 50,8 Z"
  ];

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="absolute inset-0"
      >
        <motion.path
          d={paths[morphPath]}
          fill={color}
          opacity={0.1}
          animate={{
            d: paths,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d={paths[morphPath]}
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity={0.6}
          animate={{
            d: paths,
            strokeDasharray: ["0 100", "50 50", "100 0", "0 100"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default LiquidMorph;