import { useRef } from 'react';
import { IconButton } from '~/components/ui/IconButton';
import type { Message } from 'ai';

interface ImportButtonsProps {
  importChat: (description: string, messages: Message[]) => Promise<void>;
}

export const ImportButtons = ({ importChat }: ImportButtonsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (data.description && data.messages) {
        await importChat(data.description, data.messages);
      }
    } catch (error) {
      console.error('Error importing chat:', error);
    }
  };

  return (
    <>
      <IconButton
        title="Import chat"
        className="transition-all"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="i-ph:upload text-xl"></div>
      </IconButton>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />
    </>
  );
}; 