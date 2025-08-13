'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const range = 100 * speed;
    switch (direction) {
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, range]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -range]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, range]);
      default: // up
        return useTransform(scrollYProgress, [0, 1], [0, -range]);
    }
  };

  const transform = getTransform();

  const getMotionStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: transform };
    }
    return { y: transform };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={getMotionStyle()}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;