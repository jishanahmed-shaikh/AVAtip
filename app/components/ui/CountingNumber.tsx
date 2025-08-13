'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CountingNumberProps } from '../../types';
import { countUpVariants } from '../../utils/animationVariants';

const CountingNumber: React.FC<CountingNumberProps> = ({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value === 0) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <motion.span
      variants={countUpVariants}
      initial="hidden"
      animate="visible"
      className={`font-bold ${isAnimating ? 'text-avalanche-red' : 'text-cyber-white'} transition-colors duration-300`}
    >
      {prefix}{formatNumber(displayValue)}{suffix}
    </motion.span>
  );
};

export default CountingNumber;