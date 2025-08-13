'use client';

import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import { ParticleBackgroundProps } from '../../types';
import { useResponsiveParticles } from '../../hooks/useResponsiveParticles';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  intensity = 'medium',
  interactive = true,
  className = '',
}) => {
  const { particleConfig, isMobile } = useResponsiveParticles(intensity);
  const prefersReducedMotion = useReducedMotion();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Adjust config based on interactive prop
  const finalConfig = useMemo(() => {
    if (!interactive) {
      return {
        ...particleConfig,
        interactivity: {
          ...particleConfig.interactivity,
          events: {
            ...particleConfig.interactivity.events,
            onhover: { enable: false, mode: 'grab' },
            onclick: { enable: false, mode: 'push' },
          },
        },
      };
    }
    return particleConfig;
  }, [particleConfig, interactive]);

  // Fallback for reduced motion preference or very low-end devices
  if (prefersReducedMotion || (isMobile && typeof window !== 'undefined' && 'deviceMemory' in navigator)) {
    const deviceMemory = typeof window !== 'undefined' && 'deviceMemory' in navigator 
      ? (navigator as any).deviceMemory 
      : 8;
    
    if (prefersReducedMotion || (deviceMemory && deviceMemory < 4)) {
      return (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-deep-black via-deep-black to-gray-900 ${className}`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(232, 65, 66, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(248, 249, 250, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(232, 65, 66, 0.05) 0%, transparent 50%)
            `
          }}
          role="img"
          aria-label="Decorative background gradient"
        />
      );
    }
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Particles
        id="particle-background"
        init={particlesInit}
        options={finalConfig}
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Interactive particle network background"
      />
    </div>
  );
};

export default ParticleBackground;