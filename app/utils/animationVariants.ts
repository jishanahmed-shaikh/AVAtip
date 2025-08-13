import { Variants } from 'framer-motion';

export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

export const glowButtonVariants: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 0 5px #E84142, 0 0 10px #E84142, 0 0 15px #E84142"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 0 20px #E84142, 0 0 30px #E84142, 0 0 40px #E84142",
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: 0.1 
    }
  }
};

export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const countUpVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export const timelineItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

export const cardHoverVariants: Variants = {
  initial: { 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(232, 65, 66, 0.3), 0 10px 10px -5px rgba(232, 65, 66, 0.1)",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

export const getResponsiveVariants = (isMobile: boolean, baseVariants: Variants): Variants => {
  if (!isMobile) return baseVariants;
  
  // Reduce animation intensity for mobile
  const mobileVariants: Variants = {};
  
  Object.keys(baseVariants).forEach(key => {
    const variant = baseVariants[key];
    if (typeof variant === 'object' && variant.transition) {
      mobileVariants[key] = {
        ...variant,
        transition: {
          ...variant.transition,
          duration: (variant.transition.duration || 0.6) * 0.7, // Reduce duration by 30%
        }
      };
    } else {
      mobileVariants[key] = variant;
    }
  });
  
  return mobileVariants;
};