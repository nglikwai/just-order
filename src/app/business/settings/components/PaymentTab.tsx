interface PaymentTabProps {
  settings: any;
  handleInputChange: (section: string, field: string, value: any) => void;
}

export function PaymentTab({ settings, handleInputChange }: PaymentTabProps) {
  return (
    <div className='p-6 space-y-6'>
      <h2 className='text-xl font-semibold text-gray-900'>Payment Settings</h2>

      <div>
        <h3 className='font-medium text-gray-900 mb-4'>
          Accepted Payment Methods
        </h3>
        <div className='space-y-3'>
          <label className='flex items-center gap-3'>
            <input
              type='checkbox'
              checked={settings.payment.acceptCash}
              onChange={e =>
                handleInputChange('payment', 'acceptCash', e.target.checked)
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='font-medium'>Cash</span>
          </label>
          <label className='flex items-center gap-3'>
            <input
              type='checkbox'
              checked={settings.payment.acceptCard}
              onChange={e =>
                handleInputChange('payment', 'acceptCard', e.target.checked)
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='font-medium'>Credit/Debit Cards</span>
          </label>
          <label className='flex items-center gap-3'>
            <input
              type='checkbox'
              checked={settings.payment.acceptPaypal}
              onChange={e =>
                handleInputChange('payment', 'acceptPaypal', e.target.checked)
              }
              className='rounded border-gray-300 text-slate-600 focus:ring-slate-500'
            />
            <span className='font-medium'>PayPal</span>
          </label>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>
          Tax Rate (%)
        </label>
        <input
          type='number'
          step='0.1'
          value={settings.payment.taxRate}
          onChange={e =>
            handleInputChange('payment', 'taxRate', e.target.value)
          }
          className='w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500'
        />
      </div>
    </div>
  );
}
