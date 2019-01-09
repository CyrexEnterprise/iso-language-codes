const _ = require('lodash')
const data = require('../data.json')

/**
 * Takes a language code and checks if exists in the data dictionary
 * @param {string} localeCode - Language code (e.g. "en-GB")
 * @return {boolean}
 */
const validateLocaleCode = (localeCode) => {
  return _.findIndex(data, (l) => l.code === localeCode) !== -1
}

/**
 * Takes a country code and returns the list of languages valid for it
 * @param {string} countryCode - Country code (e.g. "PT")
 * @return {string[]} Languages list
 */
const findCountryLanguages = (countryCode) => {
  const countryEntries = _.filter(data, (l) => l.countryCode === countryCode)
  const langSet = new Set()

  for (let i = 0; i < countryEntries.length; i++) {
    langSet.add(countryEntries[i].langCode)
  }

  return Array.from(langSet)
}

/**
 * Takes a country code and returns the list of locales valid for it
 * @param {string} countryCode - Country code (e.g. "PT")
 * @return {string[]} Locales list
 */
const findCountryLocales = (countryCode) => {
  const countryEntries = _.filter(data, (l) => l.countryCode === countryCode)
  const localeSet = new Set()

  for (let i = 0; i < countryEntries.length; i++) {
    localeSet.add(countryEntries[i].code)
  }

  return Array.from(localeSet)
}


module.exports = {
  validateLocaleCode,
  findCountryLanguages,
  findCountryLocales,
}
