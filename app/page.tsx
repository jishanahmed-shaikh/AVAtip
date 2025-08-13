'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from './components/sections/HeroSection';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LazySection from './components/ui/LazySection';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import PageTransition from './components/anime/PageTransition';
import LoadingSequence from './components/anime/LoadingSequence';
import { mockSteps, mockFeatures, mockLeaderboardEntries, mockRoadmapPhases } from './data/mockData';

// Lazy load non-critical sections
const HowItWorksSection = dynamic(() => import('./components/sections/HowItWorksSection'), {
  loading: () => <LazySection fallback={<div className="h-96 loading-skeleton" />} />
});

const FeaturesSection = dynamic(() => import('./components/sections/FeaturesSection'), {
  loading: () => <LazySection fallback={<div className="h-96 loading-skeleton" />} />
});

const LeaderboardSection = dynamic(() => import('./components/sections/LeaderboardSection'), {
  loading: () => <LazySection fallback={<div className="h-96 loading-skeleton" />} />
});

const RoadmapSection = dynamic(() => import('./components/sections/RoadmapSection'), {
  loading: () => <LazySection fallback={<div className="h-96 loading-skeleton" />} />
});

const CTASection = dynamic(() => import('./components/sections/CTASection'), {
  loading: () => <LazySection fallback={<div className="h-96 loading-skeleton" />} />
});

const Footer = dynamic(() => import('./components/sections/Footer'), {
  loading: () => <LazySection fallback={<div className="h-64 loading-skeleton" />} />
});

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleCTAClick = (action: 'get-started' | 'view-demo') => {
    if (action === 'get-started') {
      // Scroll to how it works section or trigger wallet connection
      const howItWorksSection = document.getElementById('how-it-works');
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === 'view-demo') {
      // Scroll to leaderboard section to show live demo
      const leaderboardSection = document.getElementById('leaderboard');
      if (leaderboardSection) {
        leaderboardSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleConnectWallet = () => {
    // Simulate wallet connection
    console.log('Connecting wallet...');
    // In a real app, this would integrate with MetaMask, Core, etc.
    setIsWalletConnected(true);
  };

  return (
    <ErrorBoundary>
      <LoadingSequence isLoading={isLoading} onComplete={handleLoadingComplete} />
      <CustomCursor />
      <ScrollProgress />
      
      <PageTransition isLoading={isLoading}>
        <main className="min-h-screen bg-deep-black text-cyber-white overflow-x-hidden">
        {/* Hero Section - Critical, load immediately */}
        <ErrorBoundary fallback={
          <div className="min-h-screen bg-deep-black flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-cyber-white mb-4">AVAtip</h1>
              <p className="text-xl text-gray-300">Turn Every Like Into AVAX</p>
            </div>
          </div>
        }>
          <HeroSection onCTAClick={handleCTAClick} />
        </ErrorBoundary>

        {/* How It Works Section */}
        <div id="how-it-works">
          <Suspense fallback={<LazySection />}>
            <HowItWorksSection steps={mockSteps} />
          </Suspense>
        </div>

        {/* Features Section */}
        <div id="features">
          <Suspense fallback={<LazySection />}>
            <FeaturesSection features={mockFeatures} />
          </Suspense>
        </div>

        {/* Leaderboard Section */}
        <div id="leaderboard">
          <Suspense fallback={<LazySection />}>
            <LeaderboardSection 
              entries={mockLeaderboardEntries}
              isLive={true}
              title="Live Leaderboard"
              subtitle="Top earners this week"
            />
          </Suspense>
        </div>

        {/* Roadmap Section */}
        <div id="roadmap">
          <Suspense fallback={<LazySection />}>
            <RoadmapSection 
              phases={mockRoadmapPhases}
              title="Roadmap"
              subtitle="Our journey to revolutionize social media monetization"
            />
          </Suspense>
        </div>

        {/* Call to Action Section */}
        <div id="cta">
          <Suspense fallback={<LazySection />}>
            <CTASection onConnectWallet={handleConnectWallet} />
          </Suspense>
        </div>

        {/* Footer */}
        <Suspense fallback={<LazySection />}>
          <Footer />
        </Suspense>
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}