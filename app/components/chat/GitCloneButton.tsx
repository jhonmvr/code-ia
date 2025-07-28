import { useState } from 'react';
import { IconButton } from '~/components/ui/IconButton';
import { classNames } from '~/utils/classNames';
import type { Message } from 'ai';

interface GitCloneButtonProps {
  importChat: (description: string, messages: Message[]) => Promise<void>;
}

const GitCloneButton = ({ importChat }: GitCloneButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [repoUrl, setRepoUrl] = useState('');

  const handleClone = async () => {
    if (!repoUrl.trim()) return;

    try {
      // This would typically make an API call to clone the repo
      const mockMessages: Message[] = [
        {
          id: '1',
          role: 'user',
          content: `Clone repository: ${repoUrl}`,
          createdAt: new Date()
        },
        {
          id: '2',
          role: 'assistant',
          content: `Repository ${repoUrl} has been cloned successfully.`,
          createdAt: new Date()
        }
      ];

      await importChat(`Cloned repository: ${repoUrl}`, mockMessages);
      setIsOpen(false);
      setRepoUrl('');
    } catch (error) {
      console.error('Error cloning repository:', error);
    }
  };

  return (
    <div className="relative">
      <IconButton
        title="Clone Git repository"
        className="transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="i-ph:git-branch text-xl"></div>
      </IconButton>

      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-80 bg-codeia-elements-background-depth-2 border border-codeia-elements-borderColor rounded-lg p-4 shadow-lg">
          <h4 className="text-sm font-medium text-codeia-elements-textPrimary mb-2">
            Clone Git Repository
          </h4>
          <input
            type="text"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/user/repo.git"
            className={classNames(
              'w-full px-3 py-2 text-sm bg-codeia-elements-background-depth-1',
              'border border-codeia-elements-borderColor rounded-md mb-3',
              'text-codeia-elements-textPrimary placeholder-codeia-elements-textTertiary',
              'focus:outline-none focus:ring-2 focus:ring-codeia-elements-focus'
            )}
          />
          <div className="flex gap-2">
            <button
              onClick={handleClone}
              className="px-3 py-1 text-sm bg-codeia-elements-background-depth-3 text-codeia-elements-textPrimary rounded hover:bg-codeia-elements-background-depth-4"
            >
              Clone
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 text-sm bg-codeia-elements-background-depth-1 text-codeia-elements-textSecondary rounded hover:bg-codeia-elements-background-depth-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitCloneButton; 