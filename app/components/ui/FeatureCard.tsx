'use client';

import { motion } from 'framer-motion';
import { FeatureCardProps } from '../../types';
import { cardHoverVariants, staggerItemVariants } from '../../utils/animationVariants';

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, inView }) => {
  return (
    <motion.div
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group cursor-pointer"
      variants={staggerItemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      whileHover="hover"
    >
      <motion.div
        variants={cardHoverVariants}
        className="relative z-10"
      >
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 bg-avalanche-red/20 rounded-lg flex items-center justify-center group-hover:bg-avalanche-red/30 transition-colors duration-300">
            <span className="text-2xl text-avalanche-red">{feature.icon}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-cyber-white mb-3 group-hover:text-avalanche-red transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-avalanche-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl border border-avalanche-red/0 group-hover:border-avalanche-red/30 transition-colors duration-300" />
    </motion.div>
  );
};

export default FeatureCard;