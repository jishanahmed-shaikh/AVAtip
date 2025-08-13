import { ParticleConfig, ParticleIntensity, DeviceType } from '../types';

export const createParticleConfig = (
  intensity: ParticleIntensity = 'medium',
  deviceType: DeviceType = 'desktop'
): ParticleConfig => {
  const baseConfig = getBaseConfig();
  const intensityConfig = getIntensityConfig(intensity);
  const deviceConfig = getDeviceConfig(deviceType);

  return {
    ...baseConfig,
    particles: {
      ...baseConfig.particles,
      number: { value: intensityConfig.particleCount * deviceConfig.multiplier },
      opacity: {
        ...baseConfig.particles.opacity,
        value: intensityConfig.opacity,
      },
      size: {
        ...baseConfig.particles.size,
        value: intensityConfig.size,
      },
      line_linked: {
        ...baseConfig.particles.line_linked,
        distance: intensityConfig.linkDistance,
        opacity: intensityConfig.linkOpacity,
      },
      move: {
        ...baseConfig.particles.move,
        speed: intensityConfig.speed,
      },
    },
    interactivity: {
      ...baseConfig.interactivity,
      events: {
        ...baseConfig.interactivity.events,
        onhover: {
          enable: deviceConfig.enableInteractions,
          mode: 'grab',
        },
        onclick: {
          enable: deviceConfig.enableInteractions,
          mode: 'push',
        },
      },
    },
  };
};

const getBaseConfig = (): ParticleConfig => ({
  particles: {
    number: { value: 80 },
    color: { value: '#E84142' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#F8F9FA',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

const getIntensityConfig = (intensity: ParticleIntensity) => {
  switch (intensity) {
    case 'low':
      return {
        particleCount: 30,
        opacity: 0.3,
        size: 2,
        speed: 3,
        linkDistance: 100,
        linkOpacity: 0.2,
      };
    case 'high':
      return {
        particleCount: 120,
        opacity: 0.7,
        size: 4,
        speed: 8,
        linkDistance: 200,
        linkOpacity: 0.6,
      };
    default: // medium
      return {
        particleCount: 80,
        opacity: 0.5,
        size: 3,
        speed: 6,
        linkDistance: 150,
        linkOpacity: 0.4,
      };
  }
};

const getDeviceConfig = (deviceType: DeviceType) => {
  switch (deviceType) {
    case 'mobile':
      return {
        multiplier: 0.3,
        enableInteractions: false,
      };
    case 'tablet':
      return {
        multiplier: 0.6,
        enableInteractions: true,
      };
    default: // desktop
      return {
        multiplier: 1,
        enableInteractions: true,
      };
  }
};

export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};