'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Logo {
  id: string;
  symbol: string;
  name: string;
  x: number;
  y: number;
  delay: number;
}

const FloatingLogos: React.FC = () => {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    const logoData = [
      { symbol: 'A', name: 'Avalanche' },
      { symbol: 'Ⓣ', name: 'Twitter' },
      { symbol: 'Ⓘ', name: 'Instagram' },
      { symbol: 'Ⓨ', name: 'YouTube' },
      { symbol: 'Ⓣ', name: 'TikTok' },
      { symbol: '₿', name: 'Bitcoin' },
    ];

    const generatedLogos = logoData.map((logo, index) => ({
      id: `logo-${index}`,
      symbol: logo.symbol,
      name: logo.name,
      x: Math.random() * 80 + 10, // 10% to 90% of screen width
      y: Math.random() * 60 + 20, // 20% to 80% of screen height
      delay: Math.random() * 2,
    }));

    setLogos(generatedLogos);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute cursor-hover pointer-events-auto"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            opacity: { delay: logo.delay, duration: 1 },
            scale: { delay: logo.delay, duration: 0.5 },
            y: { 
              duration: 8 + Math.random() * 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: logo.delay 
            },
            x: { 
              duration: 6 + Math.random() * 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: logo.delay + 1 
            },
          }}
          whileHover={{
            scale: 1.2,
            opacity: 0.8,
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <div className="relative group">
            {/* Logo Container */}
            <div className="w-12 h-12 bg-dark-gray border border-border-gray flex items-center justify-center text-cyber-white font-bold text-lg group-hover:border-avalanche-red transition-all duration-300">
              {logo.symbol}
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-avalanche-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-cyber-black text-cyber-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {logo.name}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLogos;