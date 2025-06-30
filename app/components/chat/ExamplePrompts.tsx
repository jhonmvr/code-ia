import { memo } from 'react';
import { classNames } from '~/utils/classNames';

interface ExamplePromptsProps {
  onPromptClick: (event: React.MouseEvent, messageInput?: string) => void;
}

export const ExamplePrompts = memo<ExamplePromptsProps>(({ onPromptClick }) => {
  const examples = [
    {
      title: 'Create a React app',
      description: 'Build a modern React application',
      prompt: 'Create a React app with TypeScript and Tailwind CSS'
    },
    {
      title: 'Build a landing page',
      description: 'Design a beautiful landing page',
      prompt: 'Create a modern landing page for a SaaS product'
    },
    {
      title: 'Add authentication',
      description: 'Implement user authentication',
      prompt: 'Add authentication to my Next.js app using NextAuth'
    }
  ];

  return (
    <div className="max-w-chat mx-auto px-4 lg:px-0">
      <h3 className="text-lg font-semibold text-bolt-elements-textPrimary mb-4">
        Try these examples
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={(e) => onPromptClick(e, example.prompt)}
            className={classNames(
              'p-4 text-left bg-bolt-elements-background-depth-1',
              'border border-bolt-elements-borderColor rounded-lg',
              'hover:bg-bolt-elements-background-depth-2 transition-colors'
            )}
          >
            <h4 className="font-medium text-bolt-elements-textPrimary mb-1">
              {example.title}
            </h4>
            <p className="text-sm text-bolt-elements-textSecondary">
              {example.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
});

ExamplePrompts.displayName = 'ExamplePrompts'; 