'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CyberButton from '../ui/CyberButton';
import GlitchText from '../anime/GlitchText';
import FloatingOrbs from '../anime/FloatingOrbs';

interface CTASectionProps {
  onConnectWallet?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onConnectWallet }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-deep-black overflow-hidden">
      {/* Background Elements */}
      <FloatingOrbs count={8} />
      
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

      {/* Geometric Accents */}
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-cyber-white mb-8 leading-tight"
            animate={{
              textShadow: [
                '0 0 0px rgba(232, 65, 66, 0)',
                '0 0 20px rgba(232, 65, 66, 0.3)',
                '0 0 0px rgba(232, 65, 66, 0)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Start earning from your
            <br />
            <GlitchText 
              text="social engagement"
              className="text-avalanche-red font-cyber"
              intensity="medium"
              trigger="auto"
            />
          </motion.h2>
          
          {/* Animated Divider */}
          <motion.div 
            className="w-24 h-px bg-avalanche-red mx-auto mb-12 relative"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-avalanche-red"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(232, 65, 66, 0.5)',
                  '0 0 20px rgba(232, 65, 66, 0.8)',
                  '0 0 5px rgba(232, 65, 66, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-display leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Connect your wallet and begin monetizing your social media presence 
            with <span className="text-cyber-white">instant AVAX rewards</span>.
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <CyberButton
              onClick={onConnectWallet}
              variant="primary"
              size="lg"
              className="group relative uppercase tracking-wider font-display font-medium px-12 py-6 text-lg"
              glitch={true}
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Connect Wallet
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </CyberButton>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "⚡", 
                title: "Instant Setup", 
                desc: "Connect and start earning in seconds",
                color: "#F1C40F"
              },
              { 
                icon: "💰", 
                title: "Real Rewards", 
                desc: "Earn actual AVAX tokens",
                color: "#E84142"
              },
              { 
                icon: "🔒", 
                title: "Secure", 
                desc: "Decentralized smart contracts",
                color: "#4ECDC4"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative bg-dark-gray border border-border-gray p-8 overflow-hidden cursor-hover"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`
                  }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-heading font-medium text-cyber-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-display leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;