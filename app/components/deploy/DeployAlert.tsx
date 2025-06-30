import { memo } from 'react';
import { classNames } from '~/utils/classNames';
import type { DeployAlert } from '~/types/actions';

interface DeployChatAlertProps {
  alert: DeployAlert;
  clearAlert: () => void;
  postMessage: (message: string | undefined) => void;
}

const DeployChatAlert = memo<DeployChatAlertProps>(({ alert, clearAlert, postMessage }) => {
  return (
    <div className="bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-bolt-elements-textPrimary">
          {alert.title}
        </h4>
        <button
          onClick={clearAlert}
          className="text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary"
        >
          <div className="i-ph:x text-lg" />
        </button>
      </div>
      <p className="text-sm text-bolt-elements-textSecondary mb-3">
        {alert.description}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => postMessage(alert.content)}
          className="px-3 py-1 text-sm bg-bolt-elements-background-depth-3 text-bolt-elements-textPrimary rounded hover:bg-bolt-elements-background-depth-4"
        >
          Deploy
        </button>
        <button
          onClick={clearAlert}
          className="px-3 py-1 text-sm bg-bolt-elements-background-depth-1 text-bolt-elements-textSecondary rounded hover:bg-bolt-elements-background-depth-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

DeployChatAlert.displayName = 'DeployChatAlert';

export default DeployChatAlert; 