export interface ParticleConfig {
  particles: {
    number: { value: number };
    color: { value: string };
    shape: { type: string };
    opacity: { 
      value: number;
      random: boolean;
      anim: {
        enable: boolean;
        speed: number;
        opacity_min: number;
        sync: boolean;
      };
    };
    size: { 
      value: number;
      random: boolean;
      anim: {
        enable: boolean;
        speed: number;
        size_min: number;
        sync: boolean;
      };
    };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
    move: {
      enable: boolean;
      speed: number;
      direction: string;
      random: boolean;
      straight: boolean;
      out_mode: string;
      bounce: boolean;
      attract: {
        enable: boolean;
        rotateX: number;
        rotateY: number;
      };
    };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: { 
        enable: boolean; 
        mode: string;
      };
      onclick: { 
        enable: boolean; 
        mode: string;
      };
      resize: boolean;
    };
    modes: {
      grab: {
        distance: number;
        line_linked: {
          opacity: number;
        };
      };
      bubble: {
        distance: number;
        size: number;
        duration: number;
        opacity: number;
        speed: number;
      };
      repulse: {
        distance: number;
        duration: number;
      };
      push: {
        particles_nb: number;
      };
      remove: {
        particles_nb: number;
      };
    };
  };
  retina_detect: boolean;
}

export interface ResponsiveParticleConfig {
  mobile: {
    particles: { count: number; interactions: boolean };
    animations: { reduced: boolean };
  };
  tablet: {
    particles: { count: number; interactions: boolean };
    animations: { reduced: boolean };
  };
  desktop: {
    particles: { count: number; interactions: boolean };
    animations: { full: boolean };
  };
}

export type ParticleIntensity = 'low' | 'medium' | 'high';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';