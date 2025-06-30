import type { Message } from 'ai';
import { memo } from 'react';
import { classNames } from '~/utils/classNames';

interface MessagesProps {
  className?: string;
  messages: Message[];
  isStreaming?: boolean;
}

export const Messages = memo<MessagesProps>(({ className, messages, isStreaming }) => {
  return (
    <div className={classNames('flex flex-col gap-4', className)}>
      {messages.map((message, index) => (
        <div
          key={message.id || index}
          className={classNames(
            'flex gap-3 p-4 rounded-lg',
            message.role === 'user'
              ? 'bg-bolt-elements-background-depth-2 ml-auto max-w-[80%]'
              : 'bg-bolt-elements-background-depth-1 mr-auto max-w-[80%]'
          )}
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bolt-elements-background-depth-3 flex items-center justify-center">
            {message.role === 'user' ? (
              <div className="i-ph:user text-bolt-elements-textSecondary" />
            ) : (
              <div className="i-ph:robot text-bolt-elements-textSecondary" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-bolt-elements-textPrimary whitespace-pre-wrap">
              {typeof message.content === 'string' ? message.content : 'Content not available'}
            </div>
            {isStreaming && index === messages.length - 1 && message.role === 'assistant' && (
              <div className="mt-2">
                <div className="inline-block w-2 h-4 bg-bolt-elements-textSecondary animate-pulse" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

Messages.displayName = 'Messages'; 