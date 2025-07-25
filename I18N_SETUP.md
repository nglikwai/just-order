# Internationalization (i18n) Setup

This project has been configured with internationalization support for English and Traditional Chinese using `next-intl`.

## Features Implemented

### 1. Package Installation ✅

- Installed `next-intl` package
- Configured Next.js with the internationalization plugin

### 2. Configuration Files ✅

- `/src/lib/i18n.ts` - Core i18n configuration with supported locales
- `/src/i18n/config.ts` - Next-intl configuration
- `/src/middleware.ts` - Locale routing middleware
- Updated `next.config.ts` with next-intl plugin

### 3. Translation Files ✅

- `/src/i18n/messages/en.json` - English translations
- `/src/i18n/messages/zh-TW.json` - Traditional Chinese translations

### 4. Utility Functions ✅

- `/src/lib/server-i18n.ts` - Server-side translation utilities
- `/src/lib/client-i18n.ts` - Client-side translation utilities

### 5. Components ✅

- `LanguageSwitcher.tsx` - Language switching component
- `Navigation.tsx` - Localized navigation
- Updated `HeroSection.tsx` - Server-side translation example
- Updated `CartSummary.tsx` - Client-side translation example

## Supported Locales

- `en` - English (default)
- `zh-TW` - Traditional Chinese

## Usage Examples

### Server Components

```typescript
import { getT } from '@/lib/server-i18n';

export async function MyServerComponent() {
  const t = await getT('common');

  return <h1>{t('title')}</h1>;
}
```

### Client Components

```typescript
'use client';
import { useT } from '@/lib/client-i18n';

export function MyClientComponent() {
  const t = useT('common');

  return <button>{t('save')}</button>;
}
```

## URL Structure

- English: `/` or `/en/`
- Traditional Chinese: `/zh-TW/`

The middleware automatically handles locale detection and routing.

## Translation Keys Structure

```json
{
  "common": {
    "loading": "Loading...",
    "save": "Save",
    "cancel": "Cancel"
  },
  "navigation": {
    "home": "Home",
    "features": "Features"
  },
  "hero": {
    "title": "Order Food Online",
    "subtitle": "Delicious food delivered to your door"
  }
}
```

## Note

The current implementation has a routing conflict between the existing `[businessName]` dynamic route and the new `[locale]` route. To fully integrate this i18n setup, you would need to:

1. Restructure the app directory to use `[locale]/[businessName]` pattern
2. Update all existing page components to be within the locale structure
3. Update all internal links to include locale prefixes

This setup provides the foundation for a fully internationalized application with both server-side and client-side translation support.
