'use client';

import { useState, useEffect } from 'react';
import { ParticleIntensity, DeviceType } from '../types';
import { createParticleConfig, getDeviceType } from '../utils/particleConfigs';

export const useResponsiveParticles = (intensity: ParticleIntensity = 'medium') => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
  const [particleConfig, setParticleConfig] = useState(() => 
    createParticleConfig(intensity, 'desktop')
  );

  useEffect(() => {
    const updateDeviceType = () => {
      const newDeviceType = getDeviceType();
      setDeviceType(newDeviceType);
      setParticleConfig(createParticleConfig(intensity, newDeviceType));
    };

    // Initial setup
    updateDeviceType();

    // Listen for resize events
    window.addEventListener('resize', updateDeviceType);
    
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, [intensity]);

  return {
    deviceType,
    particleConfig,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  };
};