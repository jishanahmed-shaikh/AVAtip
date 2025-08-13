'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TriLayerTextProps {
  lines: [string, string, string];
  className?: string;
  triggerRef?: React.RefObject<HTMLElement>;
}

const TriLayerText: React.FC<TriLayerTextProps> = ({ 
  lines, 
  className = '',
  triggerRef 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const trigger = triggerRef?.current || containerRef.current;

    // Set initial states
    gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
      x: (index) => index % 2 === 0 ? 100 : -100,
      opacity: 0,
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    // Animate lines with staggered delays
    tl.to(line1Ref.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    })
    .to(line2Ref.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    }, "-=0.7")
    .to(line3Ref.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    }, "-=0.7");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [triggerRef]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={line1Ref} className="text-4xl md:text-6xl lg:text-7xl font-light text-cyber-white leading-tight">
        {lines[0]}
      </div>
      <div ref={line2Ref} className="text-4xl md:text-6xl lg:text-7xl font-light text-avalanche-red leading-tight">
        {lines[1]}
      </div>
      <div ref={line3Ref} className="text-4xl md:text-6xl lg:text-7xl font-light text-cyber-white leading-tight">
        {lines[2]}
      </div>
    </div>
  );
};

export default TriLayerText;