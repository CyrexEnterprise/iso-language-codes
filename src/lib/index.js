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

const findCountryLanguages = (countryCode) => {
  return _.filter(data, (l) => l.countryCode === countryCode)
}

module.exports = {
  validateLocaleCode,
  findCountryLanguages,
}
