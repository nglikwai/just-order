'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import enMessages from '@/i18n/messages/en';
import zhTWMessages from '@/i18n/messages/zh-TW';

type Locale = 'en' | 'zh-TW';

interface I18nContextType {
  locale: Locale;
  messages: any;
  t: (key: string, namespace?: string) => string;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

const messages = {
  en: enMessages,
  'zh-TW': zhTWMessages,
};

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => {
    return current && current[key] ? current[key] : path;
  }, obj);
}

function detectBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language || navigator.languages?.[0];

  if (browserLang?.startsWith('zh')) {
    // Check for Traditional Chinese variants
    if (
      browserLang.includes('TW') ||
      browserLang.includes('HK') ||
      browserLang.includes('MO')
    ) {
      return 'zh-TW';
    }
  }

  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved locale from localStorage or detect from browser
    const savedLocale = localStorage.getItem('locale') as Locale;
    const detectedLocale = savedLocale || detectBrowserLanguage();
    setLocaleState(detectedLocale);
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string, namespace?: string) => {
    const currentMessages = messages[locale];
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(currentMessages, fullKey);
  };

  // Don't render until we've detected the language on client side
  if (!mounted) {
    return null;
  }

  return (
    <I18nContext
      value={{
        locale,
        messages: messages[locale],
        t,
        setLocale,
      }}
    >
      {children}
    </I18nContext>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
