export interface LeaderboardEntry {
  rank: number;
  username: string;
  earnings: number;
  avatar?: string;
  change?: number; // Position change from previous period
  isOnline?: boolean;
}

export interface LeaderboardSectionProps {
  entries: LeaderboardEntry[];
  isLive?: boolean;
  title?: string;
  subtitle?: string;
}

export interface CountingNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}