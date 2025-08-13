'use client';

import { motion } from 'framer-motion';

interface CTASectionProps {
  onConnectWallet?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onConnectWallet }) => {
  return (
    <section className="py-32 px-6 bg-deep-black">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-cyber-white mb-8 leading-tight">
            Start earning from your
            <br />
            <span className="text-avalanche-red">social engagement</span>
          </h2>
          
          <div className="w-24 h-px bg-avalanche-red mx-auto mb-12" />
          
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Connect your wallet and begin monetizing your social media presence 
            with instant AVAX rewards.
          </p>

          {/* CTA Button */}
          <button
            onClick={onConnectWallet}
            className="group relative bg-avalanche-red text-cyber-white px-12 py-6 text-lg font-medium uppercase tracking-wider transition-all duration-300 hover:bg-red-600 mb-16"
          >
            <div className="absolute inset-0 border border-avalanche-red group-hover:border-red-600 transition-colors duration-300" />
            <span className="relative">Connect Wallet</span>
          </button>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Instant Setup", desc: "Connect and start earning in seconds" },
              { icon: "💰", title: "Real Rewards", desc: "Earn actual AVAX tokens" },
              { icon: "🔒", title: "Secure", desc: "Decentralized smart contracts" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-gray border border-border-gray p-8"
              >
                <div className="text-3xl mb-4 text-gray-600">{item.icon}</div>
                <h3 className="text-lg font-medium text-cyber-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;