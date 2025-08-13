'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInRightVariants } from '../../utils/animationVariants';

interface SlideInFromRightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const SlideInFromRight: React.FC<SlideInFromRightProps> = ({
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
      variants={slideInRightVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRight;