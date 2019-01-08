const fs = require('fs')

const ietfLanguages = require('./ietf-language-tags_json')
const languagesCode = require('./language-codes-full_json')
const countriesList = require('./countries_code_json')

const langs = ietfLanguages.map((obj) => {
  const country = countriesList.find((ob) => {
    return ob.Code === obj.territory
  })
  const languageData = languagesCode.find((ob) => {
    return ob.alpha2 === obj.langType
  })

  const countryName = country && country.Name ? country.Name : null
  const language = languageData && languageData.English ? languageData.English : null
  if (!countryName || !language) {
    return null
  } 
  return {
    code: obj.lang,
    langCode: obj.langType,
    countryCode: obj.territory,
    country: countryName,
    language,
  }
})

const result = langs.filter((lang) => {
  return lang
})

fs.writeFile('./src/data.json', JSON.stringify(result, null, 2), 'utf8', function (err) {
  if (err) throw err
  console.log('Data file created.')
})
