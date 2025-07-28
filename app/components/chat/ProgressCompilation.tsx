import { memo } from 'react';
import type { ProgressAnnotation } from '~/types/context';

interface ProgressCompilationProps {
  data: ProgressAnnotation[];
}

const ProgressCompilation = memo<ProgressCompilationProps>(({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-4 p-3 bg-codeia-elements-background-depth-1 border border-codeia-elements-borderColor rounded-lg">
      <h4 className="text-sm font-medium text-codeia-elements-textPrimary mb-2">
        Progress
      </h4>
      <div className="space-y-2">
        {data.map((progress, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-codeia-elements-textSecondary rounded-full" />
            <span className="text-sm text-codeia-elements-textSecondary">
              {progress.message || 'Processing...'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

ProgressCompilation.displayName = 'ProgressCompilation';

export default ProgressCompilation; 