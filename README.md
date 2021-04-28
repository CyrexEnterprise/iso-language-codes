[![Cloudoki](https://circleci.com/gh/Cloudoki/iso-language-codes.svg?style=shield)](https://app.circleci.com/pipelines/github/Cloudoki/iso-language-codes)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


# ISO Language Codes

Node util for ISO Language Codes (639-1 and 693-2) and IETF Language Types

Created using the data from [https://datahub.io/core/language-codes](https://datahub.io/core/language-codes).

Use this util to get and validate the languages codes, countries and languages names.

<br/>

# Usage
Install the latest version:

`npm i --save iso-lang-codes@latest`

Require the module in your code & start using:

`const codes = require('iso-lang-codes')`

`codes.validateLocaleCode('pt-PT')`


<br />

# Documentation

## validateLocaleCode

Takes a locale code and checks if exists in the data dictionary

### Parameters

-   `localeCode` **[string][1]** Language code (e.g. "en-GB")

Returns **[boolean][2]**

## validateLanguageCode

Takes a language code and checks if exists in the data dictionary

### Parameters

-   `languageCode` **[string][1]** Language code (e.g. "en")

Returns **[boolean][2]**

## findCountryLanguages

Takes a country code and returns the list of languages valid for it

### Parameters

-   `countryCode` **[string][1]** Country code (e.g. "PT")

Returns **[Array][3]&lt;[string][1]>** Languages list

## findCountryLocales

Takes a country code and returns the list of locales valid for it

### Parameters

-   `countryCode` **[string][1]** Country code (e.g. "PT")

Returns **[Array][3]&lt;[string][1]>** Locales list

## locales

Returns a list with a map of all existing locale codes and the respective country+countryCode

Returns **[Object][4]** Locales list in the form of a map: ['pt-PT'] => 'Portuguese (PT)'

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
