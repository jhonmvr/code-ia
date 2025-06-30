import { memo } from 'react';
import { classNames } from '~/utils/classNames';

export const SupabaseConnection = memo(() => {
  return (
    <div className="flex items-center gap-2 text-xs text-bolt-elements-textTertiary">
      <div className="w-2 h-2 bg-bolt-elements-textTertiary rounded-full" />
      <span>Supabase</span>
    </div>
  );
});

SupabaseConnection.displayName = 'SupabaseConnection'; 