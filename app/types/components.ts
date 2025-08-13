export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  animation?: string; // Lottie animation file path
  icon?: string;
}

export interface HeroSectionProps {
  onCTAClick: (action: 'get-started' | 'view-demo') => void;
}

export interface HowItWorksSectionProps {
  steps: Step[];
}

export interface FeaturesSectionProps {
  features: Feature[];
}

export interface ParticleBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  className?: string;
}

export interface AnimatedButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
  inView: boolean;
}