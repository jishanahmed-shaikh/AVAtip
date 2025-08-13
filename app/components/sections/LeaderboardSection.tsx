'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LeaderboardSectionProps } from '../../types';

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ 
  entries, 
  isLive = true,
  title = "Leaderboard",
  subtitle = "Top earners this week"
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-32 px-6 bg-cyber-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-light text-cyber-white">
              {title}
            </h2>
            {isLive && (
              <div className="flex items-center gap-2 bg-avalanche-red px-3 py-1 text-xs font-medium text-cyber-white uppercase tracking-wider">
                <div className="w-2 h-2 bg-cyber-white rounded-full animate-pulse" />
                Live
              </div>
            )}
          </div>
          <div className="w-24 h-px bg-avalanche-red mx-auto mb-8" />
          <p className="text-xl text-gray-400">{subtitle}</p>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-dark-gray border border-border-gray overflow-hidden"
        >
          {/* Header */}
          <div className="bg-medium-gray border-b border-border-gray px-8 py-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
              <div>Rank</div>
              <div>User</div>
              <div className="text-right">Earnings</div>
              <div className="text-right">Change</div>
            </div>
          </div>

          {/* Entries */}
          <div>
            {entries.map((entry, index) => (
              <motion.div
                key={`${entry.username}-${entry.rank}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-8 py-6 border-b border-border-gray last:border-b-0 hover:bg-medium-gray/30 transition-colors duration-300"
              >
                <div className="grid grid-cols-4 gap-4 items-center">
                  
                  {/* Rank */}
                  <div className="flex items-center">
                    <div className={`w-8 h-8 flex items-center justify-center text-sm font-medium ${
                      entry.rank <= 3 ? 'bg-avalanche-red text-cyber-white' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {entry.rank}
                    </div>
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 flex items-center justify-center text-cyber-white font-medium">
                      {entry.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-cyber-white font-medium">{entry.username}</div>
                      {entry.isOnline && (
                        <div className="flex items-center gap-1 text-xs text-green-400">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          Online
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Earnings */}
                  <div className="text-right">
                    <div className="text-cyber-white font-medium text-lg">
                      ${entry.earnings.toFixed(2)}
                    </div>
                    <div className="text-gray-500 text-sm">AVAX</div>
                  </div>

                  {/* Change */}
                  <div className="text-right">
                    {entry.change !== undefined && (
                      <div className={`text-sm font-medium ${
                        entry.change > 0 ? 'text-green-400' : 
                        entry.change < 0 ? 'text-red-400' : 'text-gray-400'
                      }`}>
                        {entry.change > 0 ? '+' : ''}{entry.change}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { value: "1,247", label: "Total Participants" },
            { value: "$89.7K", label: "Total Rewards" },
            { value: "24h", label: "Time Remaining" }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-dark-gray border border-border-gray p-8 text-center">
              <div className="text-3xl font-light text-cyber-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderboardSection;