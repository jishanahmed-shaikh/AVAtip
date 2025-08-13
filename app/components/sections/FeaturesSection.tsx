'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FeaturesSectionProps } from '../../types';
import ScrollFadeCard from '../animations/ScrollFadeCard';
import LiquidMorph from '../anime/LiquidMorph';
import GlitchText from '../anime/GlitchText';
import MagneticButton from '../anime/MagneticButton';

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-32 px-6 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-cyber-white mb-6">
            Features
          </h2>
          <div className="w-24 h-px bg-avalanche-red mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for the modern creator economy
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollFadeCard
              key={feature.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              overlap={true}
              zIndex={10 + index}
              className="group"
            >
              <motion.div 
                className="relative bg-dark-gray border border-border-gray p-8 h-full hover:border-gray-600 transition-all duration-300 group-hover:bg-medium-gray/30 cursor-hover overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  borderColor: "#E84142"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Liquid Morph Background */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <LiquidMorph size={60} color="#E84142" />
                </div>
                
                {/* Animated Icon */}
                <motion.div 
                  className="text-4xl mb-6 text-gray-600 group-hover:text-gray-500 transition-colors duration-300"
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
                
                {/* Content with Glitch Effect */}
                <h3 className="text-xl font-medium text-cyber-white mb-4">
                  <GlitchText 
                    text={feature.title}
                    intensity="low"
                    trigger="hover"
                  />
                </h3>
                
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Animated Accent Line */}
                <motion.div 
                  className="w-8 h-px bg-avalanche-red mt-6"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Particles */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-avalanche-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-1 h-1 bg-avalanche-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-avalanche-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-avalanche-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-avalanche-red/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </ScrollFadeCard>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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