import enMessages from '@/i18n/messages/en';

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => {
    return current && current[key] ? current[key] : path;
  }, obj);
}

export function getT(namespace?: string) {
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNestedValue(enMessages, fullKey);
  };
}

export function getLocale() {
  return 'en';
}
