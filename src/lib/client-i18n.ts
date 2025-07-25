'use client';

import { useI18n } from '@/providers/I18nProvider';

export function useT(namespace?: string) {
  const { t } = useI18n();

  return (key: string) => t(key, namespace);
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}
