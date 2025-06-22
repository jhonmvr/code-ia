import React from 'react';

interface ControlPanelProps {
  open: boolean;
  onClose: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Settings panel content goes here.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}; 