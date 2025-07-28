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
              ? 'bg-codeia-elements-bg-depth-2 ml-auto max-w-[80%]'
              : 'bg-codeia-elements-bg-depth-1 mr-auto max-w-[80%]'
          )}
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-codeia-elements-bg-depth-3 flex items-center justify-center">
            {message.role === 'user' ? (
              <div className="i-ph:user text-codeia-elements-textSecondary" />
            ) : (
              <div className="i-ph:robot text-codeia-elements-textSecondary" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-sm text-codeia-elements-textPrimary whitespace-pre-wrap">
              {renderContent(message.content)}
            </div>
            {isStreaming && index === messages.length - 1 && message.role === 'assistant' && (
              <div className="mt-2">
                <div className="inline-block w-2 h-4 bg-codeia-elements-textSecondary animate-pulse" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

Messages.displayName = 'Messages';

function renderContent(content: string | { type: string; text: string }[]) {
  if (typeof content === 'string') return content;

  if (Array.isArray(content)) {
    // Solo mostrar el texto limpio, sin metadatos
    const allText = content.map((block) => block.text).join('\n');
    // Opcional: si quieres eliminar líneas que empiecen con `[Model:` o `[Provider:`
    const filtered = allText
      .split('\n')
      .filter((line) => !line.startsWith('['))
      .join('\n')
      .trim();

    return filtered || '[Sin mensaje]';
  }

  return '[Contenido no soportado]';
}

