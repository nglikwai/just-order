import { Bell, CreditCard, Globe, Shield } from 'lucide-react';

interface SettingsTabsProps {
  activeTab: 'general' | 'notifications' | 'payment' | 'security';
  onTabChange: (
    tab: 'general' | 'notifications' | 'payment' | 'security'
  ) => void;
}

export function SettingsTabs({ activeTab, onTabChange }: SettingsTabsProps) {
  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
  ] as const;

  return (
    <div className='border-b border-gray-200 mb-6'>
      <nav className='flex space-x-8'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
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
  );
}
