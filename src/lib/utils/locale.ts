/**
 * Locale utilities for multi-language support
 * Supports: English (en), German (de)
 */

export const SUPPORTED_LOCALES = ["en", "de"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/**
 * Locale display names for UI
 */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
};

/**
 * Checks if a string is a valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Gets locale from string with fallback to default
 */
export function getValidLocale(locale: string | undefined): Locale {
  if (!locale) return DEFAULT_LOCALE;
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}
