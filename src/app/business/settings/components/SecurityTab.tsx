interface SecurityTabProps {
  settings: any;
  handleInputChange: (section: string, field: string, value: any) => void;
}

export function SecurityTab({ settings, handleInputChange }: SecurityTabProps) {
  return (
    <div className='p-6 space-y-6'>
      <h2 className='text-xl font-semibold text-gray-900'>Security Settings</h2>

      <div className='space-y-4'>
        <div className='flex items-center justify-between py-3 border-b border-gray-100'>
          <div>
            <h3 className='font-medium text-gray-900'>
              Two-Factor Authentication
            </h3>
            <p className='text-sm text-gray-600'>
              Add an extra layer of security to your account
            </p>
          </div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={settings.security.twoFactorAuth}
              onChange={e =>
                handleInputChange('security', 'twoFactorAuth', e.target.checked)
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='text-sm'>Enabled</span>
          </label>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Session Timeout (minutes)
          </label>
          <select
            value={settings.security.sessionTimeout}
            onChange={e =>
              handleInputChange('security', 'sessionTimeout', e.target.value)
            }
            className='w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
          >
            <option value='30'>30 minutes</option>
            <option value='60'>1 hour</option>
            <option value='120'>2 hours</option>
            <option value='240'>4 hours</option>
            <option value='480'>8 hours</option>
          </select>
        </div>
      </div>
    </div>
  );
}
