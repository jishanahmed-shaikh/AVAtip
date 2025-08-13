'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FeaturesSectionProps } from '../../types';
import EnhancedScrollCard from '../ui/EnhancedScrollCard';
import LiquidMorph from '../anime/LiquidMorph';
import GlitchText from '../anime/GlitchText';
import CyberCard from '../ui/CyberCard';

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section className="py-32 px-6 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-heading text-cyber-white mb-6">
            Features
          </h2>
          <div className="w-24 h-px bg-avalanche-red mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-display">
            Built for the modern creator economy
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={gridInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <EnhancedScrollCard
                direction={index % 2 === 0 ? 'left' : 'right'}
                index={index}
                className="h-full"
              >
              <CyberCard
                variant="neural"
                interactive={true}
                glowColor="#E84142"
                className="h-full p-8"
              >
                {/* Animated Icon */}
                <motion.div 
                  className="text-4xl mb-6 text-gray-600 group-hover:text-avalanche-red transition-colors duration-300"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Content with Enhanced Typography */}
                <h3 className="text-xl font-medium text-cyber-white mb-4">
                  <GlitchText 
                    text={feature.title}
                    intensity="low"
                    trigger="hover"
                  />
                </h3>
                
                <motion.p 
                  className="text-gray-400 leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Enhanced Accent Line with Gradient */}
                <motion.div 
                  className="w-full h-px bg-gradient-to-r from-avalanche-red via-cyber-blue to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </CyberCard>
              </EnhancedScrollCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Sub-second transactions" },
              { icon: "🔒", title: "Secure", desc: "Decentralized & trustless" },
              { icon: "🌐", title: "Multi-Platform", desc: "Works everywhere" }
            ].map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-4 text-gray-600">{item.icon}</div>
                <h4 className="text-lg font-medium text-cyber-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;