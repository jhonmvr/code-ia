import { memo } from 'react';
import { IconButton } from '~/components/ui/IconButton';
import { classNames } from '~/utils/classNames';

interface SpeechRecognitionButtonProps {
  isListening: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}

export const SpeechRecognitionButton = memo<SpeechRecognitionButtonProps>(({
  isListening,
  onStart,
  onStop,
  disabled
}) => {
  return (
    <IconButton
      title={isListening ? 'Stop listening' : 'Start voice input'}
      disabled={disabled}
      className={classNames(
        'transition-all',
        isListening ? 'text-bolt-elements-icon-error' : 'text-bolt-elements-textSecondary'
      )}
      onClick={isListening ? onStop : onStart}
    >
      {isListening ? (
        <div className="i-ph:microphone-slash text-xl animate-pulse" />
      ) : (
        <div className="i-ph:microphone text-xl" />
      )}
    </IconButton>
  );
});

SpeechRecognitionButton.displayName = 'SpeechRecognitionButton'; 