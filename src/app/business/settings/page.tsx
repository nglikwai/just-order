'use client';

import { useState } from 'react';

import { GeneralSettingsTab } from './components/GeneralSettingsTab';
import { NotificationsTab } from './components/NotificationsTab';
import { PaymentTab } from './components/PaymentTab';
import { SecurityTab } from './components/SecurityTab';
import { SettingsHeader } from './components/SettingsHeader';
import { SettingsTabs } from './components/SettingsTabs';

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
    <>
      <SettingsHeader hasChanges={hasChanges} onSave={handleSave} />
      <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className='bg-white rounded-lg border border-gray-200 shadow-sm'>
        {activeTab === 'general' && (
          <GeneralSettingsTab
            settings={settings}
            dayLabels={dayLabels}
            handleInputChange={handleInputChange}
            handleHoursChange={handleHoursChange}
          />
        )}

        {activeTab === 'notifications' && (
          <NotificationsTab
            settings={settings}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === 'payment' && (
          <PaymentTab
            settings={settings}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === 'security' && (
          <SecurityTab
            settings={settings}
            handleInputChange={handleInputChange}
          />
        )}
      </div>
    </>
  );
}
