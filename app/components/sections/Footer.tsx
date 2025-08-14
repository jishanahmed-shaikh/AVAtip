'use client';

import { motion } from 'framer-motion';
import GlitchText from '../anime/GlitchText';
import FloatingOrbs from '../anime/FloatingOrbs';
import CyberButton from '../cyber/CyberButton';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'How it Works', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Forum', href: '#' }
      ]
    }
  ];

  return (
    <footer className="relative bg-cyber-black border-t border-border-gray overflow-hidden">
      {/* Background Elements */}
      <FloatingOrbs count={4} />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(232, 65, 66, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 65, 66, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} 
        />
      </div>

      {/* Geometric Accents */}
      <motion.div
        className="absolute top-10 left-1/4 w-6 h-6 border border-avalanche-red/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.h3 
              className="text-3xl font-heading font-light text-cyber-white mb-6 relative"
              animate={{
                textShadow: [
                  '0 0 0px rgba(232, 65, 66, 0)',
                  '0 0 10px rgba(232, 65, 66, 0.3)',
                  '0 0 0px rgba(232, 65, 66, 0)'
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GlitchText 
                text="AVA"
                className="font-heading font-thin"
                intensity="low"
                trigger="auto"
              />
              <span className="text-avalanche-red font-heading">tip</span>
            </motion.h3>
            
            {/* Corner accents for brand section */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-avalanche-red/60" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-avalanche-red/60" />
            
            <p className="text-gray-400 leading-relaxed max-w-sm font-display">
              Transform social engagement into instant cryptocurrency rewards 
              on the Avalanche network.
            </p>
            
            {/* Tech badges */}
            <motion.div 
              className="flex items-center gap-4 mt-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-2 bg-dark-gray border border-avalanche-red/30 px-3 py-1 text-xs font-display text-cyber-white uppercase tracking-wider"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 10px rgba(232, 65, 66, 0.3)'
                }}
              >
                <motion.div 
                  className="w-2 h-2 bg-avalanche-red rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Live on Avalanche
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.h4 
                className="text-cyber-white font-heading font-medium mb-6 text-lg relative"
                whileHover={{
                  textShadow: '0 0 8px rgba(232, 65, 66, 0.4)'
                }}
              >
                {section.title}
                {/* Underline accent */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-px bg-avalanche-red origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.h4>
              
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index + 1) * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-white transition-all duration-300 font-display relative group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {/* Hover accent */}
                      <motion.div
                        className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-px bg-avalanche-red opacity-0 group-hover/link:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-dark-gray border border-border-gray p-8 mb-12 overflow-hidden group"
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-avalanche-red/5 via-transparent to-avalanche-red/5 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
          />
          
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-avalanche-red/40" />
          <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-avalanche-red/40" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-avalanche-red/40" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-avalanche-red/40" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h4 
              className="text-2xl font-heading font-light text-cyber-white mb-4"
              animate={{
                textShadow: [
                  '0 0 0px rgba(232, 65, 66, 0)',
                  '0 0 8px rgba(232, 65, 66, 0.3)',
                  '0 0 0px rgba(232, 65, 66, 0)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Stay <span className="text-avalanche-red">Connected</span>
            </motion.h4>
            
            <p className="text-gray-400 mb-8 font-display text-lg">
              Get the latest updates on features, rewards, and community events
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-medium-gray border border-border-gray px-6 py-4 text-cyber-white placeholder-gray-500 focus:outline-none focus:border-avalanche-red focus:ring-1 focus:ring-avalanche-red transition-all duration-300 font-display"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: '0 0 0 1px rgba(232, 65, 66, 0.3)'
                }}
              />
              
              <CyberButton
                variant="primary"
                onClick={() => {}}
                className="px-8 py-4 text-lg font-heading"
              >
                Subscribe
              </CyberButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative pt-8 border-t border-border-gray flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-avalanche-red to-transparent opacity-0"
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="text-gray-500 text-sm font-display flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <span>© 2025 AVAtip. All rights reserved.</span>
            <motion.div
              className="hidden sm:block w-px h-4 bg-border-gray"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-gray-600">Powered by Innovation</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6 text-sm text-gray-500"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="font-display"
              whileHover={{ 
                color: '#E84142',
                textShadow: '0 0 8px rgba(232, 65, 66, 0.4)'
              }}
            >
              Built on Avalanche
            </motion.span>
            
            <motion.div 
              className="relative w-8 h-8 bg-gradient-to-br from-avalanche-red to-red-600 flex items-center justify-center text-cyber-white text-sm font-heading font-bold overflow-hidden group cursor-pointer"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: '0 0 15px rgba(232, 65, 66, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-600 to-avalanche-red opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">A</span>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyber-white/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyber-white/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;