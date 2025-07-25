import { Clock, Globe, Mail, MapPin, Smartphone } from 'lucide-react';

interface GeneralSettingsTabProps {
  settings: any;
  dayLabels: Record<string, string>;
  handleInputChange: (section: string, field: string, value: any) => void;
  handleHoursChange: (day: string, field: string, value: any) => void;
}

export function GeneralSettingsTab({
  settings,
  dayLabels,
  handleInputChange,
  handleHoursChange,
}: GeneralSettingsTabProps) {
  return (
    <div className='p-6 space-y-6'>
      <h2 className='text-xl font-semibold text-gray-900'>General Settings</h2>

      {/* Business Info */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Business Name
          </label>
          <input
            type='text'
            value={settings.general.businessName}
            onChange={e =>
              handleInputChange('general', 'businessName', e.target.value)
            }
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Phone Number
          </label>
          <div className='relative'>
            <Smartphone className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input
              type='tel'
              value={settings.general.phone}
              onChange={e =>
                handleInputChange('general', 'phone', e.target.value)
              }
              className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Email
          </label>
          <div className='relative'>
            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input
              type='email'
              value={settings.general.email}
              onChange={e =>
                handleInputChange('general', 'email', e.target.value)
              }
              className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Website
          </label>
          <div className='relative'>
            <Globe className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input
              type='url'
              value={settings.general.website}
              onChange={e =>
                handleInputChange('general', 'website', e.target.value)
              }
              className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
            />
          </div>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Description
        </label>
        <textarea
          value={settings.general.description}
          onChange={e =>
            handleInputChange('general', 'description', e.target.value)
          }
          rows={3}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Address
        </label>
        <div className='relative'>
          <MapPin className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
          <textarea
            value={settings.general.address}
            onChange={e =>
              handleInputChange('general', 'address', e.target.value)
            }
            rows={2}
            className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
          />
        </div>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className='text-lg font-medium text-gray-900 mb-4 flex items-center gap-2'>
          <Clock className='w-5 h-5' />
          Business Hours
        </h3>
        <div className='space-y-3'>
          {Object.entries(settings.hours).map(([day, hours]: [string, any]) => (
            <div key={day} className='flex items-center gap-4'>
              <div className='w-24 text-sm font-medium text-gray-700'>
                {dayLabels[day as keyof typeof dayLabels]}
              </div>
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={!hours.closed}
                  onChange={e =>
                    handleHoursChange(day, 'closed', !e.target.checked)
                  }
                  className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
                />
                <span className='text-sm text-gray-600'>Open</span>
              </label>
              {!hours.closed && (
                <>
                  <input
                    type='time'
                    value={hours.open}
                    onChange={e =>
                      handleHoursChange(day, 'open', e.target.value)
                    }
                    className='px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-500'
                  />
                  <span className='text-gray-500'>to</span>
                  <input
                    type='time'
                    value={hours.close}
                    onChange={e =>
                      handleHoursChange(day, 'close', e.target.value)
                    }
                    className='px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-500'
                  />
                </>
              )}
              {hours.closed && (
                <span className='text-sm text-gray-500 italic'>Closed</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
