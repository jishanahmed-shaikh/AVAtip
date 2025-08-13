'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 w-12 h-12 bg-avalanche-red rounded-full opacity-20 animate-float"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-8 h-8 bg-neon-blue rounded-full opacity-30 animate-float"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-cyber font-black mb-6 text-glow"
          variants={itemVariants}
        >
          Turn Every{' '}
          <span className="text-avalanche-red animate-glow">Like</span>
          <br />
          Into{' '}
          <span className="text-neon-blue">AVAX</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          AVAtip rewards every social action with instant crypto micropayments.
          <br />
          <span className="text-avalanche-red font-semibold">Connect. Engage. Earn.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-avalanche-red text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-red"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(232, 65, 66, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold text-lg rounded-lg hover:bg-neon-blue hover:text-deep-black transition-all duration-300 transform hover:scale-105"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Floating Social Icons */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8"
          variants={itemVariants}
        >
          {['💰', '🔗', '⚡'].map((icon, index) => (
            <motion.div
              key={index}
              className="text-3xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}