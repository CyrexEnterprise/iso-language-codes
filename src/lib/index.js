const data = require('../data.json')

/**
 * Takes a locale code and checks if exists in the data dictionary
 * @param {string} localeCode - Language code (e.g. "en-GB")
 * @return {boolean}
 */
const validateLocaleCode = (localeCode) => {
  return data.findIndex((l) => l.code === localeCode) !== -1
}

/**
 * Takes a language code and checks if exists in the data dictionary
 * @param {string} languageCode - Language code (e.g. "en")
 * @return {boolean}
 */
const validateLanguageCode = (languageCode) => {
  return data.findIndex((l) => l.langCode === languageCode) !== -1
}

/**
 * Takes a country code and returns the list of languages valid for it
 * @param {string} countryCode - Country code (e.g. "PT")
 * @return {string[]} Languages list
 */
const findCountryLanguages = (countryCode) => {
  const countryEntries = data.filter((l) => l.countryCode === countryCode)
  const langSet = new Set()

  countryEntries.forEach((e, i) => langSet.add(countryEntries[i].langCode))

  return Array.from(langSet)
}

/**
 * Takes a country code and returns the list of locales valid for it
 * @param {string} countryCode - Country code (e.g. "PT")
 * @return {string[]} Locales list
 */
const findCountryLocales = (countryCode) => {
  const countryEntries = data.filter((l) => l.countryCode === countryCode)
  const localeSet = new Set()

  countryEntries.forEach((e, i) => localeSet.add(countryEntries[i].code))

  return Array.from(localeSet)
}

/**
 * Returns a list with a map of all existing locale codes and the respective country+language
 * @return {Object} Locales list in the form of a map: ['pt-PT'] => 'Portuguese (PT)'
 */
const locales = () => {
  const map = {}
  for (const l of data) {
    map[l.code] = `${l.language} (${l.countryCode})`
  }
  return map
}

module.exports = {
  locales,
  validateLocaleCode,
  validateLanguageCode,
  findCountryLanguages,
  findCountryLocales,
}
