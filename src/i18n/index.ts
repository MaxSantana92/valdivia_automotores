import { es } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';
export type Translations = typeof es;

export const translations: Record<Locale, Translations> = { es, en };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Locale): Translations {
  return translations[lang];
}

export function getLocalePath(lang: Locale, path = ''): string {
  if (lang === 'es') return path || '/';
  return `/en${path || ''}`;
}

export { es, en };
