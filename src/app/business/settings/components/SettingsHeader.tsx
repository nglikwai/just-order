import { Save } from 'lucide-react';

import { Button } from '@/components/components/ui/button';

interface SettingsHeaderProps {
  hasChanges: boolean;
  onSave: () => void;
}

export function SettingsHeader({ hasChanges, onSave }: SettingsHeaderProps) {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Settings</h1>
      </div>

      {hasChanges && (
        <Button
          onClick={onSave}
          className='bg-emerald-600 hover:bg-emerald-700'
        >
          <Save className='w-4 h-4 mr-2' />
          Save Changes
        </Button>
      )}
    </div>
  );
}
