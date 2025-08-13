'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface NotificationProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

interface NotificationSystemProps {
  notifications: NotificationProps[];
  onRemove: (index: number) => void;
}

const NotificationItem: React.FC<NotificationProps & { onRemove: () => void }> = ({
  type,
  title,
  message,
  duration = 5000,
  onClose,
  onRemove
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove();
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onRemove, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-neon-green/10',
          border: 'border-neon-green/30',
          icon: '✓',
          iconColor: 'text-neon-green'
        };
      case 'error':
        return {
          bg: 'bg-avalanche-red/10',
          border: 'border-avalanche-red/30',
          icon: '⚠',
          iconColor: 'text-avalanche-red'
        };
      case 'warning':
        return {
          bg: 'bg-quantum-yellow/10',
          border: 'border-quantum-yellow/30',
          icon: '⚡',
          iconColor: 'text-quantum-yellow'
        };
      case 'info':
      default:
        return {
          bg: 'bg-cyber-blue/10',
          border: 'border-cyber-blue/30',
          icon: 'ℹ',
          iconColor: 'text-cyber-blue'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <motion.div
      className={`relative overflow-hidden backdrop-blur-md border rounded-lg p-4 shadow-lg ${styles.bg} ${styles.border}`}
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            `0 0 0px ${styles.border.split('/')[0].replace('border-', '')}`,
            `0 0 20px ${styles.border.split('/')[0].replace('border-', '')}40`,
            `0 0 0px ${styles.border.split('/')[0].replace('border-', '')}`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Progress bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 ${styles.border.replace('border-', 'bg-').replace('/30', '/60')}`}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />

      <div className="flex items-start space-x-3 relative z-10">
        {/* Icon */}
        <motion.div
          className={`text-xl ${styles.iconColor} mt-0.5`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {styles.icon}
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-cyber-white font-medium text-sm mb-1">
            {title}
          </h4>
          <p className="text-gray-300 text-xs leading-relaxed">
            {message}
          </p>
        </div>

        {/* Close button */}
        <motion.button
          onClick={onRemove}
          className="text-gray-400 hover:text-cyber-white transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-white/5 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export const NotificationSystem: React.FC<NotificationSystemProps> = ({
  notifications,
  onRemove
}) => {
  return (
    <div className="fixed top-20 right-6 z-50 space-y-3 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            {...notification}
            onRemove={() => onRemove(index)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Hook for managing notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const addNotification = (notification: Omit<NotificationProps, 'onClose'>) => {
    setNotifications(prev => [...prev, notification]);
  };

  const removeNotification = (index: number) => {
    setNotifications(prev => prev.filter((_, i) => i !== index));
  };

  const showSuccess = (title: string, message: string) => {
    addNotification({ type: 'success', title, message });
  };

  const showError = (title: string, message: string) => {
    addNotification({ type: 'error', title, message });
  };

  const showInfo = (title: string, message: string) => {
    addNotification({ type: 'info', title, message });
  };

  const showWarning = (title: string, message: string) => {
    addNotification({ type: 'warning', title, message });
  };

  return {
    notifications,
    removeNotification,
    showSuccess,
    showError,
    showInfo,
    showWarning
  };
};

export default NotificationSystem;
