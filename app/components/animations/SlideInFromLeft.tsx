'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInLeftVariants } from '../../utils/animationVariants';

interface SlideInFromLeftProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const SlideInFromLeft: React.FC<SlideInFromLeftProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.2,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={slideInLeftVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromLeft;