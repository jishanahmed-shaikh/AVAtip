'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CyberBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -2 }}>
      
      {/* Dynamic Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 65, 66, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 65, 66, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: [
            '0px 0px',
            '50px 50px'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Data Streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-avalanche-red/20 to-transparent"
          style={{
            left: `${10 + i * 12}%`,
            height: '100vh',
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Neural Network Nodes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyber-blue/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.8, 0.2],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(232, 65, 66, 0.1) 0%, rgba(78, 205, 196, 0.05) 30%, transparent 70%)`,
          x: mousePosition.x * window.innerWidth - 400,
          y: mousePosition.y * window.innerHeight - 400,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Quantum Field Effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from ${i * 60}deg, transparent, rgba(232, 65, 66, 0.02), transparent)`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Horizontal Scan Lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: 'linear-gradient(transparent 98%, rgba(232, 65, 66, 0.5) 100%)',
          backgroundSize: '100% 4px',
        }}
        animate={{
          backgroundPositionY: ['0px', '4px'],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-avalanche-red/30"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-avalanche-red/30"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-avalanche-red/30"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-avalanche-red/30"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>
    </div>
  );
};

export default CyberBackground;
