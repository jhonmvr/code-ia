import { useState } from 'react';
import { classNames } from '~/utils/classNames';
import type { ProviderInfo } from '~/types/model';

interface APIKeyManagerProps {
  provider: ProviderInfo;
  apiKey: string;
  setApiKey: (key: string) => void;
}

export const APIKeyManager = ({ provider, apiKey, setApiKey }: APIKeyManagerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mb-4 p-3 bg-bolt-elements-background-depth-1 rounded-lg border border-bolt-elements-borderColor">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-bolt-elements-textPrimary">
          {provider.name} API Key
        </label>
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      <input
        type={isVisible ? 'text' : 'password'}
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder={`Enter your ${provider.name} API key`}
        className={classNames(
          'w-full px-3 py-2 text-sm bg-bolt-elements-background-depth-2',
          'border border-bolt-elements-borderColor rounded-md',
          'text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary',
          'focus:outline-none focus:ring-2 focus:ring-bolt-elements-focus focus:border-transparent'
        )}
      />
    </div>
  );
};

export const getApiKeysFromCookies = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const apiKeysCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('apiKeys='));
    
    if (apiKeysCookie) {
      const apiKeysValue = apiKeysCookie.split('=')[1];
      return JSON.parse(decodeURIComponent(apiKeysValue));
    }
  } catch (error) {
    console.error('Error parsing API keys from cookies:', error);
  }
  
  return {};
}; 