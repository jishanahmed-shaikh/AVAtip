export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing: string;
  viewport?: {
    once: boolean;
    margin: string;
  };
}

export interface SectionAnimation {
  initial: object;
  animate: object;
  exit?: object;
  transition: AnimationConfig;
}

export interface ParallaxConfig {
  speed: number;
  direction: 'up' | 'down' | 'left' | 'right';
  scale?: number;
}

export type AnimationVariant = 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideUp' | 'scaleIn';

export interface ResponsiveAnimationConfig {
  mobile: {
    reduced: boolean;
    disableParallax: boolean;
  };
  tablet: {
    reduced: boolean;
    disableParallax: boolean;
  };
  desktop: {
    full: boolean;
  };
}