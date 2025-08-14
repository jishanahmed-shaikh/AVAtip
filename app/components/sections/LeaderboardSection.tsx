'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LeaderboardSectionProps } from '../../types';
import GlitchText from '../anime/GlitchText';
import FloatingOrbs from '../anime/FloatingOrbs';

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ 
  entries, 
  isLive = true,
  title = "Leaderboard",
  subtitle = "Top earners this week"
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative py-32 px-6 bg-cyber-black overflow-hidden">
      {/* Background Elements */}
      <FloatingOrbs count={6} />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(232, 65, 66, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 65, 66, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      {/* Enhanced Geometric Accents */}
      <motion.div
        className="absolute top-20 right-1/4 w-8 h-8 border border-avalanche-red/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute bottom-32 left-1/3 w-4 h-16 bg-gradient-to-t from-avalanche-red/20 to-transparent"
        animate={{
          scaleY: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-12 w-12 h-px bg-avalanche-red/40"
        animate={{
          scaleX: [0.5, 2, 0.5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Enhanced Header with Data Streams */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          {/* Data stream effect */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-avalanche-red/60"
                animate={{
                  height: [4, 12, 4],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.h2 
              className="text-4xl md:text-6xl font-heading text-cyber-white relative"
              animate={{
                textShadow: [
                  '0 0 0px rgba(232, 65, 66, 0)',
                  '0 0 15px rgba(232, 65, 66, 0.4)',
                  '0 0 0px rgba(232, 65, 66, 0)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GlitchText 
                text={title}
                className="font-heading"
                intensity="low"
                trigger="auto"
              />
              {/* Cyber brackets */}
              <motion.span
                className="absolute -left-8 top-0 text-avalanche-red text-2xl opacity-60"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                [
              </motion.span>
              <motion.span
                className="absolute -right-8 top-0 text-avalanche-red text-2xl opacity-60"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ]
              </motion.span>
            </motion.h2>
            
            {isLive && (
              <motion.div 
                className="flex items-center gap-3 bg-gradient-to-r from-avalanche-red to-red-600 px-4 py-2 text-sm font-heading font-medium text-cyber-white uppercase tracking-wider border border-avalanche-red"
                animate={{
                  boxShadow: [
                    '0 0 5px rgba(232, 65, 66, 0.5)',
                    '0 0 20px rgba(232, 65, 66, 0.8)',
                    '0 0 5px rgba(232, 65, 66, 0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="w-2 h-2 bg-cyber-white rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Live
              </motion.div>
            )}
          </div>
          
          {/* Animated Divider */}
          <motion.div 
            className="w-24 h-px bg-avalanche-red mx-auto mb-8 relative"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-avalanche-red"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(232, 65, 66, 0.5)',
                  '0 0 15px rgba(232, 65, 66, 0.8)',
                  '0 0 5px rgba(232, 65, 66, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-400 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Enhanced Leaderboard with Matrix Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative bg-dark-gray border border-border-gray overflow-hidden"
        >
          {/* Matrix-style falling code effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-px bg-gradient-to-b from-neon-green/30 via-neon-green/10 to-transparent"
                style={{ left: `${10 + i * 12}%`, height: '100%' }}
                animate={{
                  y: ['-100%', '100%'],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          {/* Enhanced scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-avalanche-red/20 to-transparent opacity-0"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear"
            }}
          />
          
          {/* Pulse grid overlay */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(46, 204, 113, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(46, 204, 113, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Enhanced Header with holographic effect */}
          <div className="relative bg-medium-gray border-b border-border-gray px-8 py-6 overflow-hidden">
            {/* Holographic shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="relative z-10 grid grid-cols-4 gap-4 text-sm font-heading font-medium text-gray-400 uppercase tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-avalanche-red rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Rank
              </div>
              <div>User</div>
              <div className="text-right">Earnings</div>
              <div className="text-right flex items-center justify-end gap-2">
                Change
                <motion.div
                  className="w-1 h-3 bg-neon-green/60"
                  animate={{ scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Entries */}
          <div className="relative">
            {entries.map((entry, index) => (
              <motion.div
                key={`${entry.username}-${entry.rank}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                className="group relative px-8 py-6 border-b border-border-gray last:border-b-0 hover:bg-medium-gray/30 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-avalanche-red/5 via-transparent to-avalanche-red/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 grid grid-cols-4 gap-4 items-center">
                  
                  {/* Enhanced Rank with holographic effects */}
                  <div className="flex items-center">
                    <motion.div 
                      className={`w-10 h-10 flex items-center justify-center text-sm font-heading font-bold border-2 relative overflow-hidden ${
                        entry.rank <= 3 
                          ? 'bg-gradient-to-br from-avalanche-red to-red-600 text-cyber-white border-avalanche-red' 
                          : 'bg-dark-gray text-gray-300 border-border-gray'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Holographic overlay for top 3 */}
                      {entry.rank <= 3 && (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20"
                            animate={{
                              opacity: [0, 0.7, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              boxShadow: [
                                '0 0 0px rgba(232, 65, 66, 0)',
                                '0 0 15px rgba(232, 65, 66, 0.6)',
                                '0 0 0px rgba(232, 65, 66, 0)'
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      )}
                      <span className="relative z-10">{entry.rank}</span>
                    </motion.div>
                  </div>

                  {/* Enhanced User with profile matrix */}
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="relative w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border border-border-gray flex items-center justify-center text-cyber-white font-heading font-bold text-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Digital grid background */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(232, 65, 66, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(232, 65, 66, 0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '4px 4px'
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-avalanche-red/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Profile scan line */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-px bg-neon-green/60"
                        animate={{
                          y: [0, 48, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: "linear"
                        }}
                      />
                      
                      <span className="relative z-10">
                        {entry.username.charAt(0).toUpperCase()}
                      </span>
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-cyber-white font-heading font-medium flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        {entry.username}
                        {entry.rank <= 3 && (
                          <motion.span
                            className="text-xs text-avalanche-red"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            ★
                          </motion.span>
                        )}
                      </motion.div>
                      {entry.isOnline && (
                        <motion.div 
                          className="flex items-center gap-2 text-xs text-neon-green font-display"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-neon-green rounded-full relative"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-neon-green rounded-full"
                              animate={{
                                scale: [1, 2, 1],
                                opacity: [1, 0, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity
                              }}
                            />
                          </motion.div>
                          Online
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Earnings with data visualization */}
                  <div className="text-right relative">
                    <motion.div 
                      className="text-cyber-white font-heading font-bold text-lg flex items-center justify-end gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-8 h-1 bg-gradient-to-r from-transparent to-avalanche-red/60"
                        animate={{
                          scaleX: [0.3, 1, 0.3],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      ${entry.earnings.toFixed(2)}
                    </motion.div>
                    <div className="text-gray-500 text-sm font-display uppercase tracking-wider flex items-center justify-end gap-1">
                      <motion.div
                        className="w-2 h-2 bg-avalanche-red/40 rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      AVAX
                    </div>
                  </div>

                  {/* Change */}
                  <div className="text-right">
                    {entry.change !== undefined && (
                      <motion.div 
                        className={`text-sm font-heading font-bold ${
                          entry.change > 0 ? 'text-neon-green' : 
                          entry.change < 0 ? 'text-red-400' : 'text-gray-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          textShadow: entry.change > 0 ? [
                            '0 0 0px rgba(46, 204, 113, 0)',
                            '0 0 10px rgba(46, 204, 113, 0.5)',
                            '0 0 0px rgba(46, 204, 113, 0)'
                          ] : undefined
                        }}
                        transition={{
                          duration: 2,
                          repeat: entry.change > 0 ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        {entry.change > 0 ? '+' : ''}{entry.change}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Rank indicator glow */}
                {entry.rank <= 3 && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-avalanche-red"
                    animate={{
                      boxShadow: [
                        '0 0 5px rgba(232, 65, 66, 0.5)',
                        '0 0 15px rgba(232, 65, 66, 0.8)',
                        '0 0 5px rgba(232, 65, 66, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { value: "1,247", label: "Total Participants", icon: "👥", color: "#4ECDC4" },
            { value: "$89.7K", label: "Total Rewards", icon: "💰", color: "#E84142" },
            { value: "24h", label: "Time Remaining", icon: "⏰", color: "#F1C40F" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="group relative bg-dark-gray border border-border-gray p-8 text-center overflow-hidden cursor-hover"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 1 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)`
                }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className="text-3xl mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div 
                  className="text-3xl font-heading font-light text-cyber-white mb-3"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(255, 255, 255, 0)',
                      `0 0 10px ${stat.color}40`,
                      '0 0 0px rgba(255, 255, 255, 0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm text-gray-400 uppercase tracking-wider font-display">
                  {stat.label}
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-avalanche-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
