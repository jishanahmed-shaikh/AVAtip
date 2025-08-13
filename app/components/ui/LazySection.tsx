'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <LoadingSkeleton />, 
  className = '' 
}) => {
  return (
    <Suspense fallback={fallback}>
      <div className={className}>
        {children}
      </div>
    </Suspense>
  );
};

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="loading-skeleton h-8 w-64 mx-auto mb-8 rounded" />
        <div className="loading-skeleton h-4 w-96 mx-auto mb-16 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="loading-skeleton h-48 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LazySection;