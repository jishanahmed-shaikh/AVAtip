import { Feature, Step, LeaderboardEntry, RoadmapPhase } from '../types';

export const mockSteps: Step[] = [
  {
    id: 1,
    title: 'Connect Wallet',
    description: 'Link your Avalanche wallet to AVAtip using MetaMask, Core, or any compatible wallet. Your wallet stays secure and under your control.',
    icon: '🔗'
  },
  {
    id: 2,
    title: 'Link Social Account',
    description: 'Connect your social media accounts (Twitter, Instagram, TikTok, etc.) to start tracking your engagement and interactions.',
    icon: '📱'
  },
  {
    id: 3,
    title: 'Start Earning with Every Like',
    description: 'Begin earning AVAX tokens automatically for every like, share, comment, and interaction across all connected platforms.',
    icon: '💰'
  }
];

export const mockFeatures: Feature[] = [
  {
    id: 'automation',
    title: 'Set & Forget Automation',
    description: 'Once configured, AVAtip automatically tracks and rewards your social interactions without any manual intervention.',
    icon: '🤖'
  },
  {
    id: 'multi-platform',
    title: 'Multi-Platform Integration',
    description: 'Works seamlessly across Twitter, Instagram, TikTok, YouTube, and more. One account, all platforms covered.',
    icon: '🌐'
  },
  {
    id: 'token-flexibility',
    title: 'Token Flexibility',
    description: 'Earn in AVAX or choose from various C-Chain tokens. Customize your reward preferences to match your portfolio.',
    icon: '🪙'
  },
  {
    id: 'gamified-rewards',
    title: 'Gamified Rewards',
    description: 'Unlock achievements, climb leaderboards, and earn bonus multipliers for consistent engagement and milestones.',
    icon: '🎮'
  },
  {
    id: 'low-fees',
    title: 'Low Fees',
    description: 'Benefit from Avalanche\'s ultra-low transaction fees. Keep more of what you earn with minimal network costs.',
    icon: '💸'
  },
  {
    id: 'instant-settlement',
    title: 'Instant Settlement',
    description: 'Receive your rewards instantly thanks to Avalanche\'s sub-second finality. No waiting, no delays.',
    icon: '⚡'
  }
];

export const mockLeaderboardEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'CryptoInfluencer',
    earnings: 1247.89,
    change: 2,
    isOnline: true
  },
  {
    rank: 2,
    username: 'SocialMaven',
    earnings: 1156.34,
    change: -1,
    isOnline: true
  },
  {
    rank: 3,
    username: 'EngagementKing',
    earnings: 987.65,
    change: 1,
    isOnline: false
  },
  {
    rank: 4,
    username: 'ContentCreator',
    earnings: 876.43,
    change: 0,
    isOnline: true
  },
  {
    rank: 5,
    username: 'ViralVixen',
    earnings: 743.21,
    change: 3,
    isOnline: true
  },
  {
    rank: 6,
    username: 'TrendSetter',
    earnings: 698.87,
    change: -2,
    isOnline: false
  },
  {
    rank: 7,
    username: 'HashtagHero',
    earnings: 567.89,
    change: 1,
    isOnline: true
  },
  {
    rank: 8,
    username: 'LikeCollector',
    earnings: 456.78,
    change: -1,
    isOnline: false
  }
];

export const mockRoadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phase: 'Phase 1',
    title: 'Foundation & Core Features',
    description: 'Launch the core AVAtip platform with essential features for social media monetization and wallet integration.',
    timeline: 'Q1 2024',
    status: 'completed',
    features: [
      'Wallet connection and authentication',
      'Basic social media integration (Twitter, Instagram)',
      'AVAX reward distribution system',
      'User dashboard and analytics',
      'Smart contract deployment on Avalanche'
    ]
  },
  {
    id: 'phase-2',
    phase: 'Phase 2',
    title: 'Platform Expansion',
    description: 'Expand platform support and introduce advanced features for enhanced user experience and engagement.',
    timeline: 'Q2 2024',
    status: 'in-progress',
    features: [
      'TikTok and YouTube integration',
      'Advanced analytics and insights',
      'Referral program and bonuses',
      'Mobile app development',
      'Community features and leaderboards'
    ]
  },
  {
    id: 'phase-3',
    phase: 'Phase 3',
    title: 'DeFi Integration & Governance',
    description: 'Introduce DeFi features, governance token, and advanced monetization strategies for power users.',
    timeline: 'Q3 2024',
    status: 'upcoming',
    features: [
      'Governance token (AVAT) launch',
      'Staking and yield farming',
      'DAO governance implementation',
      'Advanced reward multipliers',
      'Cross-chain bridge development'
    ]
  },
  {
    id: 'phase-4',
    phase: 'Phase 4',
    title: 'Ecosystem & Partnerships',
    description: 'Build strategic partnerships and expand the AVAtip ecosystem with third-party integrations and enterprise solutions.',
    timeline: 'Q4 2024',
    status: 'upcoming',
    features: [
      'Brand partnership program',
      'Enterprise solutions for businesses',
      'API for third-party developers',
      'Cross-platform reward sharing',
      'Global expansion and localization'
    ]
  }
];