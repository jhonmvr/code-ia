import { memo } from 'react';
import { classNames } from '~/utils/classNames';

interface SendButtonProps {
  show: boolean;
  isStreaming: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const SendButton = memo<SendButtonProps>(({ show, isStreaming, disabled, onClick }) => {
  if (!show) return null;

  return (
    <button
      className={classNames(
        'absolute right-2 top-2 w-10 h-10 rounded-lg flex items-center justify-center transition-all',
        'bg-bolt-elements-background-depth-3 hover:bg-bolt-elements-background-depth-4',
        'text-bolt-elements-textPrimary hover:text-bolt-elements-textSecondary',
        'disabled:opacity-50 disabled:cursor-not-allowed'
      )}
      onClick={onClick}
      disabled={disabled}
      title={isStreaming ? 'Stop' : 'Send'}
    >
      {isStreaming ? (
        <div className="i-ph:stop-fill text-lg" />
      ) : (
        <div className="i-ph:paper-plane-right-fill text-lg" />
      )}
    </button>
  );
});

SendButton.displayName = 'SendButton'; 