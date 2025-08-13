'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from './components/sections/HeroSection';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LazySection from './components/ui/LazySection';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import PageTransition from './components/anime/PageTransition';
import CyberLoading from './components/ui/CyberLoading';
import CyberNavbar from './components/ui/CyberNavbar';
import ScrollToTop from './components/ui/ScrollToTop';
import CyberBackground from './components/ui/CyberBackground';
import { NotificationSystem, useNotifications } from './components/ui/NotificationSystem';
import { mockSteps, mockFeatures, mockLeaderboardEntries, mockRoadmapPhases } from './data/mockData';

// Lazy load non-critical sections
const HowItWorksSection = dynamic(() => import('./components/sections/HowItWorksSection'), {
  loading: () => <div className="h-96 bg-dark-gray/30 animate-pulse" />
});

const FeaturesSection = dynamic(() => import('./components/sections/FeaturesSection'), {
  loading: () => <div className="h-96 bg-dark-gray/30 animate-pulse" />
});

const LeaderboardSection = dynamic(() => import('./components/sections/LeaderboardSection'), {
  loading: () => <div className="h-96 bg-dark-gray/30 animate-pulse" />
});

const RoadmapSection = dynamic(() => import('./components/sections/RoadmapSection'), {
  loading: () => <div className="h-96 bg-dark-gray/30 animate-pulse" />
});

const CTASection = dynamic(() => import('./components/sections/CTASection'), {
  loading: () => <div className="h-96 bg-dark-gray/30 animate-pulse" />
});

const Footer = dynamic(() => import('./components/sections/Footer'), {
  loading: () => <div className="h-64 bg-dark-gray/30 animate-pulse" />
});

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { notifications, removeNotification, showSuccess, showInfo, showError } = useNotifications();

  // Simulate initial loading
  const handleLoadingComplete = () => {
    setIsLoading(false);
    showSuccess('System Online', 'Neural network synchronized. Welcome to AVAtip!');
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
    showInfo('Connecting...', 'Establishing secure connection to Avalanche network...');
    
    // Simulate connection delay
    setTimeout(() => {
      setIsWalletConnected(true);
      showSuccess('Wallet Connected', 'Successfully connected to Core wallet on Avalanche C-Chain!');
    }, 2000);
  };

  return (
    <ErrorBoundary>
      <CyberLoading isLoading={isLoading} onComplete={handleLoadingComplete} />
      <CyberBackground />
      <CyberNavbar 
        onConnectWallet={handleConnectWallet} 
        isWalletConnected={isWalletConnected} 
      />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Notification System */}
      <NotificationSystem 
        notifications={notifications} 
        onRemove={removeNotification} 
      />
      
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
          <Suspense fallback={<div className="h-96 bg-dark-gray/30 animate-pulse" />}>
            <HowItWorksSection steps={mockSteps} />
          </Suspense>
        </div>

        {/* Features Section */}
        <div id="features">
          <Suspense fallback={<div className="h-96 bg-dark-gray/30 animate-pulse" />}>
            <FeaturesSection features={mockFeatures} />
          </Suspense>
        </div>

        {/* Leaderboard Section */}
        <div id="leaderboard">
          <Suspense fallback={<div className="h-96 bg-dark-gray/30 animate-pulse" />}>
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
          <Suspense fallback={<div className="h-96 bg-dark-gray/30 animate-pulse" />}>
            <RoadmapSection 
              phases={mockRoadmapPhases}
              title="Roadmap"
              subtitle="Our journey to revolutionize social media monetization"
            />
          </Suspense>
        </div>

        {/* Call to Action Section */}
        <div id="cta">
          <Suspense fallback={<div className="h-96 bg-dark-gray/30 animate-pulse" />}>
            <CTASection onConnectWallet={handleConnectWallet} />
          </Suspense>
        </div>

        {/* Footer */}
        <Suspense fallback={<div className="h-64 bg-dark-gray/30 animate-pulse" />}>
          <Footer />
        </Suspense>
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}