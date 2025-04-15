import { useState, useEffect } from 'react';
import { BusinessConfig, defaultConfig } from '../data/config';

export function useConfig() {
  const [config, setConfig] = useState<BusinessConfig>(defaultConfig);

  useEffect(() => {
    const savedConfig = localStorage.getItem('businessConfig');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setConfig(parsedConfig);
      } catch (error) {
        console.error('Error parsing saved config:', error);
      }
    }
  }, []);

  const updateConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    localStorage.setItem('businessConfig', JSON.stringify(newConfig));
  };

  return { config, updateConfig };
} 