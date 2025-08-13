'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Set & Forget Automation',
    description: 'Once configured, AVAtip runs automatically in the background, rewarding your social engagement without any manual intervention.',
    icon: '🤖',
    gradient: 'from-avalanche-red to-red-600',
  },
  {
    title: 'Multi-Platform Integration',
    description: 'Connect multiple social media accounts and earn from all your platforms simultaneously.',
    icon: '🌐',
    gradient: 'from-neon-blue to-blue-600',
  },
  {
    title: 'Token Flexibility',
    description: 'Earn in AVAX, C-Chain tokens, or any supported cryptocurrency based on your preferences.',
    icon: '💎',
    gradient: 'from-neon-purple to-purple-600',
  },
  {
    title: 'Gamified Rewards',
    description: 'Level up your earning potential with streaks, multipliers, and achievement-based bonuses.',
    icon: '🎮',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Low Fees',
    description: 'Leverage Avalanche\'s low transaction costs to maximize your micropayment earnings.',
    icon: '💰',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Instant Settlement',
    description: 'Receive your crypto rewards instantly with Avalanche\'s sub-second finality.',
    icon: '⚡',
    gradient: 'from-pink-500 to-rose-600',
  },
]

export const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold mb-6 text-glow">
            Core <span className="text-avalanche-red">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make AVAtip the ultimate social-to-crypto platform
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <motion.div
                className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-avalanche-red/50 transition-all duration-300 h-full"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6 relative z-10"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-cyber-white group-hover:text-avalanche-red transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 30px rgba(232, 65, 66, 0.3)',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-avalanche-red to-red-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(232, 65, 66, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}