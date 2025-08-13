'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import CyberButton from './CyberButton';

interface NavbarProps {
  onConnectWallet?: () => void;
  isWalletConnected?: boolean;
}

const CyberNavbar: React.FC<NavbarProps> = ({ 
  onConnectWallet, 
  isWalletConnected = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(10, 10, 10, 0.95)']
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  );

  const navItems = [
    { id: 'hero', label: 'Home', href: '#' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'leaderboard', label: 'Leaderboard', href: '#leaderboard' },
    { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{ backgroundColor }}
    >
      {/* Animated border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-avalanche-red to-transparent"
        style={{ opacity: borderOpacity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('#', 'hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-avalanche-red to-red-600 rounded-lg flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 5px rgba(232, 65, 66, 0.3)',
                    '0 0 15px rgba(232, 65, 66, 0.6)',
                    '0 0 5px rgba(232, 65, 66, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-cyber-white font-bold text-sm">A</span>
              </motion.div>
            </div>
            
            <motion.span 
              className="text-cyber-white font-light text-xl tracking-wide"
              animate={{
                textShadow: [
                  '0 0 0px rgba(232, 65, 66, 0)',
                  '0 0 5px rgba(232, 65, 66, 0.3)',
                  '0 0 0px rgba(232, 65, 66, 0)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              AVAtip
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-avalanche-red' 
                    : 'text-gray-300 hover:text-cyber-white'
                }`}
                onClick={() => handleNavClick(item.href, item.id)}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-px bg-avalanche-red"
                    layoutId="activeNav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isWalletConnected ? (
              <CyberButton
                onClick={onConnectWallet}
                variant="primary"
                size="sm"
                className="font-medium"
              >
                Connect Wallet
              </CyberButton>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-neon-green text-sm font-medium">Connected</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-cyber-white transition-all duration-300"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-cyber-white transition-all duration-300"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-cyber-white transition-all duration-300"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-avalanche-red border-l-2 border-avalanche-red bg-avalanche-red/5' 
                    : 'text-gray-300 hover:text-cyber-white hover:bg-gray-800/30'
                }`}
                onClick={() => handleNavClick(item.href, item.id)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -20, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMenuOpen ? index * 0.1 : 0 
                }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <div className="px-4 pt-4 border-t border-border-gray">
              {!isWalletConnected ? (
                <CyberButton
                  onClick={onConnectWallet}
                  variant="primary"
                  size="sm"
                  className="w-full font-medium"
                >
                  Connect Wallet
                </CyberButton>
              ) : (
                <div className="flex items-center space-x-3 px-4 py-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-neon-green text-sm font-medium">Wallet Connected</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default CyberNavbar;
