import { memo } from 'react';
import { IconButton } from '~/components/ui/IconButton';

interface ExportChatButtonProps {
  exportChat: () => void;
}

export const ExportChatButton = memo<ExportChatButtonProps>(({ exportChat }) => {
  return (
    <IconButton title="Export chat" className="transition-all" onClick={exportChat}>
      <div className="i-ph:download text-xl"></div>
    </IconButton>
  );
});

ExportChatButton.displayName = 'ExportChatButton'; 