'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EnhancedScrollCardProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  index?: number;
}

const EnhancedScrollCard: React.FC<EnhancedScrollCardProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  index = 0,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  const directionVariants = {
    up: {
      hidden: { y: 60, opacity: 0, scale: 0.9 },
      visible: { y: 0, opacity: 1, scale: 1 }
    },
    down: {
      hidden: { y: -60, opacity: 0, scale: 0.9 },
      visible: { y: 0, opacity: 1, scale: 1 }
    },
    left: {
      hidden: { x: -60, opacity: 0, scale: 0.9 },
      visible: { x: 0, opacity: 1, scale: 1 }
    },
    right: {
      hidden: { x: 60, opacity: 0, scale: 0.9 },
      visible: { x: 0, opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      transition={{
        duration: 0.8,
        delay: delay + (index * 0.1),
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedScrollCard;
