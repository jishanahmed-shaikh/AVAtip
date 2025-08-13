'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { HeroSectionProps } from '../../types';
import TriLayerText from '../animations/TriLayerText';
import FloatingLogos from '../ui/FloatingLogos';
import LiquidMorph from '../anime/LiquidMorph';
import ParticleField from '../anime/ParticleField';
import MorphingText from '../anime/MorphingText';
import GlitchText from '../anime/GlitchText';
import FloatingOrbs from '../anime/FloatingOrbs';
import MagneticButton from '../anime/MagneticButton';

const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden"
    >
      {/* Floating Logos */}
      <FloatingLogos />

      {/* Floating Orbs */}
      <FloatingOrbs count={12} />

      {/* Particle Field */}
      <ParticleField particleCount={30} color="#E84142" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(232, 65, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 65, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} 
        />
      </div>

      {/* Geometric Elements with Anime-style Movement */}
      <motion.div 
        className="absolute top-20 right-20 w-px h-32 bg-gradient-to-b from-avalanche-red to-transparent"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-32 h-px bg-gradient-to-r from-avalanche-red to-transparent"
        animate={{
          scaleX: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Liquid Morphing Shapes */}
      <motion.div
        className="absolute top-1/4 left-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
      >
        <LiquidMorph size={60} color="#FFFFFF" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <LiquidMorph size={80} color="#E84142" />
      </motion.div>

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-4 h-4 border border-cyber-white"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        
        {/* Brand with Anime-style Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] // Anime-style easing
          }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-thin text-cyber-white tracking-tight">
            <GlitchText 
              text="AVA" 
              className="inline-block text-avalanche-red"
              intensity="medium"
              trigger="auto"
            />
            <span className="text-cyber-white font-light">tip</span>
          </h1>
          
          {/* Morphing Tagline */}
          <div className="mt-4 h-8">
            <MorphingText
              texts={[
                "Decentralized Social Rewards",
                "Instant Crypto Micropayments", 
                "Avalanche-Powered Platform",
                "Web3 Creator Economy"
              ]}
              className="text-lg text-gray-400 font-light"
              interval={2500}
            />
          </div>
        </motion.div>

        {/* Tri-Layer Animated Headline */}
        <div className="mb-12">
          <TriLayerText 
            lines={[
              "Transform social engagement",
              "into instant rewards",
              "on Avalanche network"
            ]}
            className="mb-8"
          />
          
          {/* Animated Divider */}
          <motion.div 
            className="w-24 h-px bg-avalanche-red mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          />
        </div>

        {/* Subtitle with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mb-16"
        >
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Decentralized micropayments for every like, share, and comment. 
            Built on Avalanche for instant, low-cost transactions.
          </p>
        </motion.div>

        {/* CTA Buttons with Magnetic Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <MagneticButton
            onClick={() => onCTAClick('get-started')}
            className="group relative bg-avalanche-red text-cyber-white px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 overflow-hidden"
            strength={0.4}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-avalanche-red"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyber-white" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-white" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-white" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyber-white" />
            
            <span className="relative z-10">Get Started</span>
          </MagneticButton>
          
          <MagneticButton
            onClick={() => onCTAClick('view-demo')}
            className="group relative bg-transparent text-cyber-white border border-gray-600 px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300"
            strength={0.3}
          >
            <span className="relative z-10">View Demo</span>
          </MagneticButton>
        </motion.div>

        {/* Stats with Depth Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          {[
            { value: "10K+", label: "Active Users", delay: 0 },
            { value: "$89.7K", label: "Rewards Distributed", delay: 0.2 },
            { value: "5", label: "Platforms", delay: 0.4 }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center group cursor-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 4.5 + stat.delay }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-3xl font-light text-cyber-white mb-2"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(232, 65, 66, 0)",
                    "0 0 5px rgba(232, 65, 66, 0.3)",
                    "0 0 0px rgba(232, 65, 66, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer cursor-hover"
        onClick={() => {
          const nextSection = document.getElementById('how-it-works');
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative">
          <motion.div 
            className="w-6 h-10 border border-gray-600 rounded-full flex justify-center"
            animate={{
              borderColor: ["#666666", "#E84142", "#666666"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 border border-avalanche-red rounded-full opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;