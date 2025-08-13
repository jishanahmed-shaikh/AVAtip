'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFadeCardProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  overlap?: boolean;
  zIndex?: number;
}

const ScrollFadeCard: React.FC<ScrollFadeCardProps> = ({
  children,
  className = '',
  direction = 'up',
  overlap = false,
  zIndex = 1,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || typeof window === 'undefined') return;

    const card = cardRef.current;

    // Set initial state based on direction
    const initialState = {
      up: { y: 100, opacity: 0 },
      down: { y: -100, opacity: 0 },
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
    };

    gsap.set(card, {
      ...initialState[direction],
      scale: overlap ? 0.9 : 1,
    });

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        scrub: overlap ? 1 : false,
        toggleActions: overlap ? undefined : "play none none reverse",
        onUpdate: (self) => {
          if (overlap) {
            // Create depth effect with scaling and z-index changes
            const progress = self.progress;
            const scale = 0.9 + (progress * 0.1);
            const newZIndex = Math.floor(progress * 10) + zIndex;
            
            gsap.set(card, {
              scale: scale,
              zIndex: newZIndex,
            });
          }
        }
      }
    });

    // Animate to final state
    tl.to(card, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: overlap ? 1 : 0.8,
      ease: overlap ? "none" : "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, overlap, zIndex]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeCard;