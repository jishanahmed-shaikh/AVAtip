'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const steps = [
  {
    id: 1,
    title: 'Connect Wallet',
    description: 'Link your Avalanche wallet to get started with AVAtip',
    icon: '🔗',
    color: 'text-avalanche-red',
  },
  {
    id: 2,
    title: 'Link Social Account',
    description: 'Connect your social media accounts for seamless integration',
    icon: '📱',
    color: 'text-neon-blue',
  },
  {
    id: 3,
    title: 'Start Earning with Every Like',
    description: 'Receive instant AVAX micropayments for every social interaction',
    icon: '⚡',
    color: 'text-neon-purple',
  },
]

export const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const [activeStep, setActiveStep] = useState(0)

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

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold mb-6 text-glow"
            variants={stepVariants}
          >
            How It <span className="text-avalanche-red">Works</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={stepVariants}
          >
            Get started with AVAtip in three simple steps and start earning crypto for your social engagement
          </motion.p>
        </motion.div>

        {/* Desktop Horizontal Layout */}
        <div className="hidden lg:block">
          <motion.div
            className="flex justify-between items-center relative"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-avalanche-red via-neon-blue to-neon-purple opacity-30 transform -translate-y-1/2 z-0" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative z-10 flex flex-col items-center max-w-sm cursor-pointer"
                variants={stepVariants}
                onHoverStart={() => setActiveStep(index)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-24 h-24 rounded-full border-4 border-current ${step.color} flex items-center justify-center text-4xl mb-6 bg-deep-black relative`}
                  animate={{
                    boxShadow: activeStep === index 
                      ? `0 0 30px ${step.color === 'text-avalanche-red' ? '#E84142' : step.color === 'text-neon-blue' ? '#00D4FF' : '#8B5CF6'}`
                      : '0 0 10px rgba(255,255,255,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-current ${step.color} flex items-center justify-center text-deep-black font-bold text-sm`}>
                    {step.id}
                  </div>
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-4 ${step.color} text-center`}>
                  {step.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex items-start space-x-6"
              variants={stepVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`w-16 h-16 rounded-full border-4 border-current ${step.color} flex items-center justify-center text-2xl bg-deep-black flex-shrink-0 relative`}>
                {step.icon}
                <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-current ${step.color} flex items-center justify-center text-deep-black font-bold text-xs`}>
                  {step.id}
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}