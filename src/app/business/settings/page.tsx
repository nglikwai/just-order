'use client';

import { useState } from 'react';

import {
  Bell,
  Clock,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  Save,
  Shield,
  Smartphone,
} from 'lucide-react';

import { BusinessSidebar } from '@/components/BusinessSidebar';
import { Button } from '@/components/components/ui/button';

export default function BusinessSettings() {
  const [activeTab, setActiveTab] = useState<
    'general' | 'notifications' | 'payment' | 'security'
  >('general');
  const [settings, setSettings] = useState({
    general: {
      businessName: "Joe's Coffee Shop",
      description: 'Premium coffee and fresh food in downtown',
      address: '123 Main Street, Downtown',
      phone: '(555) 123-4567',
      email: 'info@joescoffee.com',
      website: 'www.joescoffee.com',
      timezone: 'America/New_York',
      currency: 'USD',
    },
    hours: {
      monday: { open: '07:00', close: '19:00', closed: false },
      tuesday: { open: '07:00', close: '19:00', closed: false },
      wednesday: { open: '07:00', close: '19:00', closed: false },
      thursday: { open: '07:00', close: '19:00', closed: false },
      friday: { open: '07:00', close: '20:00', closed: false },
      saturday: { open: '08:00', close: '20:00', closed: false },
      sunday: { open: '08:00', close: '18:00', closed: false },
    },
    notifications: {
      newOrderEmail: true,
      newOrderSMS: false,
      lowStockEmail: true,
      lowStockSMS: false,
      customerReviewEmail: true,
      weeklyReportEmail: true,
    },
    payment: {
      acceptCash: true,
      acceptCard: true,
      acceptPaypal: false,
      taxRate: '8.5',
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: '60',
      ipWhitelist: '',
    },
  });

  const [hasChanges, setHasChanges] = useState(false);

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
    setHasChanges(true);
  };

  const handleHoursChange = (day: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day as keyof typeof prev.hours],
          [field]: value,
        },
      },
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save settings logic here
    setHasChanges(false);
    // Show success message
  };

  const dayLabels = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      <BusinessSidebar />
      <div className='flex-1 lg:ml-0'>
        <div className='max-w-6xl mx-auto px-6 py-8'>
          {/* Header */}
          <div className='mb-8 lg:ml-0 ml-16'>
            <div className='flex justify-between items-center mb-6'>
              <div>
                <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                  Settings
                </h1>
                <p className='text-gray-600'>
                  Manage your business preferences and configuration
                </p>
              </div>

              {hasChanges && (
                <Button
                  onClick={handleSave}
                  className='bg-emerald-600 hover:bg-emerald-700'
                >
                  <Save className='w-4 h-4 mr-2' />
                  Save Changes
                </Button>
              )}
            </div>

            {/* Tabs */}
            <div className='border-b border-gray-200 mb-6'>
              <nav className='flex space-x-8'>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-slate-600 text-slate-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className='w-4 h-4' />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className='bg-white rounded-lg border border-gray-200 shadow-sm'>
              {activeTab === 'general' && (
                <div className='p-6 space-y-6'>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    General Settings
                  </h2>

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
                          handleInputChange(
                            'general',
                            'businessName',
                            e.target.value
                          )
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
                            handleInputChange(
                              'general',
                              'phone',
                              e.target.value
                            )
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
                            handleInputChange(
                              'general',
                              'email',
                              e.target.value
                            )
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
                            handleInputChange(
                              'general',
                              'website',
                              e.target.value
                            )
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
                        handleInputChange(
                          'general',
                          'description',
                          e.target.value
                        )
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
                          handleInputChange(
                            'general',
                            'address',
                            e.target.value
                          )
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
                      {Object.entries(settings.hours).map(([day, hours]) => (
                        <div key={day} className='flex items-center gap-4'>
                          <div className='w-24 text-sm font-medium text-gray-700'>
                            {dayLabels[day as keyof typeof dayLabels]}
                          </div>
                          <label className='flex items-center gap-2'>
                            <input
                              type='checkbox'
                              checked={!hours.closed}
                              onChange={e =>
                                handleHoursChange(
                                  day,
                                  'closed',
                                  !e.target.checked
                                )
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
                                  handleHoursChange(
                                    day,
                                    'close',
                                    e.target.value
                                  )
                                }
                                className='px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-500'
                              />
                            </>
                          )}
                          {hours.closed && (
                            <span className='text-sm text-gray-500 italic'>
                              Closed
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
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
                        <h3 className='font-medium text-gray-900'>
                          Low Stock Alerts
                        </h3>
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
                        <h3 className='font-medium text-gray-900'>
                          Customer Reviews
                        </h3>
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
                        <h3 className='font-medium text-gray-900'>
                          Weekly Reports
                        </h3>
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
              )}

              {activeTab === 'payment' && (
                <div className='p-6 space-y-6'>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    Payment Settings
                  </h2>

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
                            handleInputChange(
                              'payment',
                              'acceptCash',
                              e.target.checked
                            )
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
                            handleInputChange(
                              'payment',
                              'acceptCard',
                              e.target.checked
                            )
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
                            handleInputChange(
                              'payment',
                              'acceptPaypal',
                              e.target.checked
                            )
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
              )}

              {activeTab === 'security' && (
                <div className='p-6 space-y-6'>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    Security Settings
                  </h2>

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
                            handleInputChange(
                              'security',
                              'twoFactorAuth',
                              e.target.checked
                            )
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
                          handleInputChange(
                            'security',
                            'sessionTimeout',
                            e.target.value
                          )
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
