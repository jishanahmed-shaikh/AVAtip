'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { RoadmapSectionProps } from '../../types';
import FadeInSection from '../animations/FadeInSection';
import TimelineItem from '../ui/TimelineItem';
import { staggerContainerVariants } from '../../utils/animationVariants';

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ 
  phases,
  title = "Roadmap",
  subtitle = "Our journey to revolutionize social media monetization"
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-avalanche-red/5 via-transparent to-transparent" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-avalanche-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-56 h-56 bg-neon-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeInSection className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-cyber-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </FadeInSection>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {phases.map((phase, index) => (
            <TimelineItem
              key={phase.id}
              phase={phase}
              index={index}
              isLast={index === phases.length - 1}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <FadeInSection delay={0.6} className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyber-white mb-4">
              Be Part of the Future
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community and help shape the future of social media monetization. 
              Get early access to new features and exclusive rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-avalanche-red text-cyber-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Join Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-cyber-white border-2 border-cyber-white px-8 py-3 rounded-lg font-semibold hover:bg-cyber-white hover:text-deep-black transition-colors duration-300"
              >
                View Documentation
              </motion.button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RoadmapSection;