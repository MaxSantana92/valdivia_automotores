import { es } from './es';
import { en } from './en';

export type Locale = 'es' | 'en';
export type Translations = typeof es;

export const translations: Record<Locale, Translations> = { es, en };

export function getLangFromUrl(url: URL): Locale {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = url.pathname;
  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || '/';
  }
  const seg = pathname.split('/').filter(Boolean);
  if (seg[0] === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Locale): Translations {
  return translations[lang];
}

export function getLocalePath(lang: Locale, path = ''): string {
  const base = import.meta.env.BASE_URL;
  const suffix = path.startsWith('/') ? path : path ? `/${path}` : '';
  if (lang === 'es') {
    if (!suffix) return base === '/' ? '/' : base;
    return `${base.replace(/\/$/, '')}${suffix}`;
  }
  return `${base.replace(/\/$/, '')}/en${suffix}`;
}

export { es, en };
