'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HowItWorksSectionProps } from '../../types';
import ScrollFadeCard from '../animations/ScrollFadeCard';
import TriLayerText from '../animations/TriLayerText';

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 px-6 bg-cyber-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-1/4 w-8 h-8 border border-avalanche-red/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-6 h-6 border border-cyber-white/20"
          animate={{
            rotate: [0, -360],
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Subtle Grid Lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-800/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent" />
      </motion.div>

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header with Tri-Layer Animation */}
        <ScrollFadeCard direction="up" className="text-center mb-20">
          <TriLayerText 
            lines={[
              "How it",
              "works",
              "seamlessly"
            ]}
            className="mb-8"
          />
          
          <motion.div 
            className="w-24 h-px bg-avalanche-red mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Three simple steps to start earning from your social activity
          </motion.p>
        </ScrollFadeCard>

        {/* Steps with Overlapping Cards */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <ScrollFadeCard
                key={step.id}
                direction={isEven ? 'right' : 'left'}
                overlap={true}
                zIndex={10 + index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div className={`${isEven ? '' : 'lg:col-start-2'} relative`}>
                  {/* Step Number with Anime-style Animation */}
                  <motion.div 
                    className="flex items-center mb-8"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="relative w-12 h-12 bg-avalanche-red text-cyber-white flex items-center justify-center text-xl font-medium cursor-hover"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(232, 65, 66, 0.5)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(232, 65, 66, 0)",
                          "0 0 15px rgba(232, 65, 66, 0.3)",
                          "0 0 0px rgba(232, 65, 66, 0)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {step.id}
                      
                      {/* Corner Accents */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyber-white" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyber-white" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyber-white" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyber-white" />
                    </motion.div>
                    
                    <motion.div 
                      className="flex-1 h-px bg-gray-800 ml-6"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl font-light text-cyber-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Visual Card with Depth */}
                <div className={`${isEven ? 'lg:col-start-2' : ''} relative`}>
                  <motion.div 
                    className="relative bg-dark-gray border border-border-gray p-12 aspect-square flex items-center justify-center group cursor-hover"
                    initial={{ opacity: 0, scale: 0.8, rotateY: isEven ? -15 : 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: isEven ? 5 : -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Animated Corner Accents */}
                    <motion.div 
                      className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-avalanche-red"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-avalanche-red"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-avalanche-red"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-avalanche-red"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    />
                    
                    {/* Icon with Floating Animation */}
                    <motion.div 
                      className="text-6xl text-gray-600 group-hover:text-gray-500 transition-colors duration-300"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      {step.id === 1 && '🔗'}
                      {step.id === 2 && '📱'}
                      {step.id === 3 && '💰'}
                    </motion.div>
                    
                    {/* Subtle Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-avalanche-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </ScrollFadeCard>
            );
          })}
        </div>

        {/* CTA with Depth Animation */}
        <ScrollFadeCard direction="up" className="text-center mt-32">
          <motion.div 
            className="bg-dark-gray border border-border-gray p-12 max-w-2xl mx-auto cursor-hover"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
          >
            <motion.h3 
              className="text-2xl font-light text-cyber-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to get started?
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands earning from their social engagement
            </motion.p>
            
            <motion.button 
              className="bg-avalanche-red text-cyber-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-red-600 transition-colors duration-300 cursor-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(232, 65, 66, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Earning
            </motion.button>
          </motion.div>
        </ScrollFadeCard>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;