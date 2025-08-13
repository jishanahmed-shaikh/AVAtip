'use client';

import { motion } from 'framer-motion';

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
    <footer className="bg-cyber-black border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-cyber-white mb-4">
              <span className="font-thin">AVA</span>
              <span className="text-avalanche-red">tip</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Transform social engagement into instant cryptocurrency rewards 
              on the Avalanche network.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-cyber-white font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-dark-gray border border-border-gray p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-light text-cyber-white mb-4">
              Stay updated
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest updates on features and community events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-medium-gray border border-border-gray px-4 py-3 text-cyber-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-avalanche-red text-cyber-white px-6 py-3 font-medium hover:bg-red-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border-gray flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-500 text-sm">
            © 2024 AVAtip. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Built on Avalanche</span>
            <div className="w-6 h-6 bg-avalanche-red flex items-center justify-center text-cyber-white text-xs font-bold">
              A
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;