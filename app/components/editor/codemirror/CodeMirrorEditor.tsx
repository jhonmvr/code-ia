import React from 'react';

export interface EditorDocument {
  filePath: string;
  value: string;
}

export interface ScrollPosition {
  top: number;
  left: number;
}

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
  filePath?: string;
}

export const CodeMirrorEditor: React.FC<CodeMirrorEditorProps> = ({ value, onChange, filePath }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full p-4 font-mono text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-0 outline-none resize-none"
      placeholder="Start coding..."
    />
  );
}; 