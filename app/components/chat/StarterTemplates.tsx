import { memo } from 'react';
import { classNames } from '~/utils/classNames';

const StarterTemplates = memo(() => {
  const templates = [
    {
      title: 'React App',
      description: 'Create a new React application',
      icon: 'i-logos:react'
    },
    {
      title: 'Next.js App',
      description: 'Build a Next.js application',
      icon: 'i-logos:nextjs-icon'
    },
    {
      title: 'Vue App',
      description: 'Create a Vue.js application',
      icon: 'i-logos:vue'
    }
  ];

  return (
    <div className="max-w-chat mx-auto px-4 lg:px-0">
      <h3 className="text-lg font-semibold text-bolt-elements-textPrimary mb-4">
        Starter Templates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template, index) => (
          <div
            key={index}
            className={classNames(
              'p-4 bg-bolt-elements-background-depth-1',
              'border border-bolt-elements-borderColor rounded-lg',
              'hover:bg-bolt-elements-background-depth-2 transition-colors cursor-pointer'
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={classNames(template.icon, 'text-2xl')} />
              <h4 className="font-medium text-bolt-elements-textPrimary">
                {template.title}
              </h4>
            </div>
            <p className="text-sm text-bolt-elements-textSecondary">
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

StarterTemplates.displayName = 'StarterTemplates';

export default StarterTemplates; 