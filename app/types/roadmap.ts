export interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  description: string;
  timeline: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  features?: string[];
}

export interface RoadmapSectionProps {
  phases: RoadmapPhase[];
  title?: string;
  subtitle?: string;
}

export interface TimelineItemProps {
  phase: RoadmapPhase;
  index: number;
  isLast: boolean;
}