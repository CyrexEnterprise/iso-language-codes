export const validateLocaleCode: (localeCode: string) => boolean;
export const validateLanguageCode: (languageCode: string) => boolean;
export const findCountryLanguages: (countryCode: string) => string[];
export const findCountryLocales: (countryCode: string) => string[];
export const locales: () => { [locale: string]: string };