import { memo } from 'react';
import { classNames } from '~/utils/classNames';
import type { ActionAlert } from '~/types/actions';

interface ChatAlertProps {
  alert: ActionAlert;
  clearAlert: () => void;
  postMessage: (message: string) => void;
}

const ChatAlert = memo<ChatAlertProps>(({ alert, clearAlert, postMessage }) => {
  return (
    <div className="bg-codeia-elements-background-depth-2 border border-codeia-elements-borderColor rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-codeia-elements-textPrimary">
          {alert.title}
        </h4>
        <button
          onClick={clearAlert}
          className="text-codeia-elements-textSecondary hover:text-codeia-elements-textPrimary"
        >
          <div className="i-ph:x text-lg" />
        </button>
      </div>
      <p className="text-sm text-codeia-elements-textSecondary mb-3">
        {alert.description}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => postMessage(alert.content)}
          className="px-3 py-1 text-sm bg-codeia-elements-background-depth-3 text-codeia-elements-textPrimary rounded hover:bg-codeia-elements-background-depth-4"
        >
          Execute
        </button>
        <button
          onClick={clearAlert}
          className="px-3 py-1 text-sm bg-codeia-elements-background-depth-1 text-codeia-elements-textSecondary rounded hover:bg-codeia-elements-background-depth-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

ChatAlert.displayName = 'ChatAlert';

export default ChatAlert; 