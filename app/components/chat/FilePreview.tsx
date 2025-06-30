import { memo } from 'react';
import { classNames } from '~/utils/classNames';
import { IconButton } from '~/components/ui/IconButton';

interface FilePreviewProps {
  files: File[];
  imageDataList: string[];
  onRemove: (index: number) => void;
}

const FilePreview = memo<FilePreviewProps>(({ files, imageDataList, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="relative bg-bolt-elements-background-depth-1 border border-bolt-elements-borderColor rounded-lg p-2"
          >
            {file.type.startsWith('image/') && imageDataList[index] && (
              <img
                src={imageDataList[index]}
                alt={file.name}
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div className="text-xs text-bolt-elements-textSecondary mt-1 max-w-20 truncate">
              {file.name}
            </div>
            <IconButton
              title="Remove file"
              className="absolute -top-1 -right-1 w-5 h-5 bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor"
              onClick={() => onRemove(index)}
            >
              <div className="i-ph:x text-xs"></div>
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
});

FilePreview.displayName = 'FilePreview';

export default FilePreview; 