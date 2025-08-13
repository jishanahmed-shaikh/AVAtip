'use client';

import { motion } from 'framer-motion';
import { TimelineItemProps } from '../../types';
import { timelineItemVariants } from '../../utils/animationVariants';

const TimelineItem: React.FC<TimelineItemProps> = ({ phase, index, isLast }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 border-green-400';
      case 'in-progress':
        return 'bg-avalanche-red border-avalanche-red animate-pulse';
      default:
        return 'bg-gray-600 border-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⚡';
      default:
        return '○';
    }
  };

  return (
    <motion.div
      variants={timelineItemVariants}
      className="relative flex items-start gap-6 pb-12"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent" />
      )}

      {/* Status Indicator */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-cyber-white font-bold ${getStatusColor(phase.status)}`}>
          {getStatusIcon(phase.status)}
        </div>
        {phase.status === 'in-progress' && (
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-avalanche-red/30 animate-ping" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Phase Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-cyber-white mb-1">
              {phase.phase}
            </h3>
            <h4 className="text-xl text-avalanche-red font-semibold">
              {phase.title}
            </h4>
          </div>
          <div className="mt-2 sm:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700">
              {phase.timeline}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4">
          {phase.description}
        </p>

        {/* Features */}
        {phase.features && phase.features.length > 0 && (
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Key Features
            </h5>
            <ul className="space-y-1">
              {phase.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-avalanche-red rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Status Badge */}
        <div className="mt-4">
          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
            phase.status === 'completed' 
              ? 'bg-green-900/50 text-green-300 border border-green-700'
              : phase.status === 'in-progress'
              ? 'bg-red-900/50 text-red-300 border border-red-700'
              : 'bg-gray-900/50 text-gray-400 border border-gray-700'
          }`}>
            {phase.status === 'completed' && 'Completed'}
            {phase.status === 'in-progress' && 'In Progress'}
            {phase.status === 'upcoming' && 'Upcoming'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;