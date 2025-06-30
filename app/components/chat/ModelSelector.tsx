import { useState } from 'react';
import { classNames } from '~/utils/classNames';
import type { ProviderInfo } from '~/types/model';
import type { ModelInfo } from '~/lib/modules/llm/types';

interface ModelSelectorProps {
  model: string;
  setModel: (model: string) => void;
  modelList: ModelInfo[];
  provider: ProviderInfo;
  setProvider: (provider: ProviderInfo) => void;
  providerList: ProviderInfo[];
  apiKeys: Record<string, string>;
  modelLoading?: string | undefined;
}

export const ModelSelector = ({
  model,
  setModel,
  modelList,
  provider,
  setProvider,
  providerList,
  apiKeys,
  modelLoading
}: ModelSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const availableModels = modelList.filter(m => m.provider === provider.name);
  const hasApiKey = apiKeys[provider.name] || provider.name === 'OpenAILike';

  return (
    <div className="mb-4">
      <div className="flex gap-2">
        {/* Provider Selector */}
        <div className="relative flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={classNames(
              'w-full px-3 py-2 text-sm bg-bolt-elements-background-depth-1',
              'border border-bolt-elements-borderColor rounded-md',
              'text-bolt-elements-textPrimary flex items-center justify-between',
              'hover:bg-bolt-elements-background-depth-2 transition-colors'
            )}
          >
            <span>{provider.name}</span>
            <div className="i-ph:caret-down text-xs" />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor rounded-md shadow-lg z-10">
              {providerList.map((p) => (
                <button
                  key={p.name}
                  onClick={() => {
                    setProvider(p);
                    setIsOpen(false);
                  }}
                  className={classNames(
                    'w-full px-3 py-2 text-sm text-left',
                    'hover:bg-bolt-elements-background-depth-3',
                    p.name === provider.name ? 'bg-bolt-elements-background-depth-3' : ''
                  )}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Model Selector */}
        <div className="relative flex-1">
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!hasApiKey || modelLoading === provider.name}
            className={classNames(
              'w-full px-3 py-2 text-sm bg-bolt-elements-background-depth-1',
              'border border-bolt-elements-borderColor rounded-md',
              'text-bolt-elements-textPrimary',
              'focus:outline-none focus:ring-2 focus:ring-bolt-elements-focus',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {modelLoading === provider.name ? (
              <option>Loading models...</option>
            ) : !hasApiKey ? (
              <option>Enter API key first</option>
            ) : availableModels.length === 0 ? (
              <option>No models available</option>
            ) : (
              availableModels.map((m) => (
                <option key={m.name} value={m.name}>
                  {m.name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
    </div>
  );
}; 