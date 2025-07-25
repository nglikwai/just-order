interface NotificationsTabProps {
  settings: any;
  handleInputChange: (section: string, field: string, value: any) => void;
}

export function NotificationsTab({
  settings,
  handleInputChange,
}: NotificationsTabProps) {
  return (
    <div className='p-6 space-y-6'>
      <h2 className='text-xl font-semibold text-gray-900'>
        Notification Preferences
      </h2>

      <div className='space-y-4'>
        <div className='flex items-center justify-between py-3 border-b border-gray-100'>
          <div>
            <h3 className='font-medium text-gray-900'>
              New Order Notifications
            </h3>
            <p className='text-sm text-gray-600'>
              Get notified when new orders are placed
            </p>
          </div>
          <div className='flex gap-4'>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={settings.notifications.newOrderEmail}
                onChange={e =>
                  handleInputChange(
                    'notifications',
                    'newOrderEmail',
                    e.target.checked
                  )
                }
                className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
              />
              <span className='text-sm'>Email</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={settings.notifications.newOrderSMS}
                onChange={e =>
                  handleInputChange(
                    'notifications',
                    'newOrderSMS',
                    e.target.checked
                  )
                }
                className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
              />
              <span className='text-sm'>SMS</span>
            </label>
          </div>
        </div>

        <div className='flex items-center justify-between py-3 border-b border-gray-100'>
          <div>
            <h3 className='font-medium text-gray-900'>Low Stock Alerts</h3>
            <p className='text-sm text-gray-600'>
              Alert when products are running low
            </p>
          </div>
          <div className='flex gap-4'>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={settings.notifications.lowStockEmail}
                onChange={e =>
                  handleInputChange(
                    'notifications',
                    'lowStockEmail',
                    e.target.checked
                  )
                }
                className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
              />
              <span className='text-sm'>Email</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={settings.notifications.lowStockSMS}
                onChange={e =>
                  handleInputChange(
                    'notifications',
                    'lowStockSMS',
                    e.target.checked
                  )
                }
                className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
              />
              <span className='text-sm'>SMS</span>
            </label>
          </div>
        </div>

        <div className='flex items-center justify-between py-3 border-b border-gray-100'>
          <div>
            <h3 className='font-medium text-gray-900'>Customer Reviews</h3>
            <p className='text-sm text-gray-600'>
              Notify when customers leave reviews
            </p>
          </div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={settings.notifications.customerReviewEmail}
              onChange={e =>
                handleInputChange(
                  'notifications',
                  'customerReviewEmail',
                  e.target.checked
                )
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='text-sm'>Email</span>
          </label>
        </div>

        <div className='flex items-center justify-between py-3'>
          <div>
            <h3 className='font-medium text-gray-900'>Weekly Reports</h3>
            <p className='text-sm text-gray-600'>
              Receive weekly business performance reports
            </p>
          </div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={settings.notifications.weeklyReportEmail}
              onChange={e =>
                handleInputChange(
                  'notifications',
                  'weeklyReportEmail',
                  e.target.checked
                )
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='text-sm'>Email</span>
          </label>
        </div>
      </div>
    </div>
  );
}
