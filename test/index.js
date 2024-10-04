const { describe, it } = require('node:test')
const assert = require('assert')

const {
  locales,
  validateLocaleCode,
  validateLanguageCode,
  findCountryLanguages,
  findCountryLocales
} = require('../src')

describe('Validation tests.', () => {
  it('should validate the locale code', () => {
    assert.strictEqual(validateLocaleCode('pt-PT'), true)
  })

  it('should not validate the locale code', () => {
    assert.strictEqual(validateLocaleCode('pt-XX'), false)
  })

  it('should not validate the locale code (undefined)', () => {
    assert.strictEqual(validateLocaleCode(), false)
  })

  it('should not validate the locale code (null)', () => {
    assert.strictEqual(validateLocaleCode(null), false)
  })

  it('should validate the language code', () => {
    assert.strictEqual(validateLanguageCode('es'), true)
  })

  it('should not validate the language code', () => {
    assert.strictEqual(validateLanguageCode('aa'), false)
  })

  it('should not validate the language code (undefined)', () => {
    assert.strictEqual(validateLanguageCode(), false)
  })

  it('should not validate the language code (null)', () => {
    assert.strictEqual(validateLanguageCode(null), false)
  })
})

describe('Language code by country search tests.', () => {
  it('should return a list of languages', () => {
    const res = findCountryLanguages('US')
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 2)
    assert.deepStrictEqual(res, ['en', 'es'])
  })

  it('should return an empty list', () => {
    const res = findCountryLanguages('XXX')
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 0)
  })

  it('should return an empty list again', () => {
    const res = findCountryLanguages(346592)
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 0)
  })
})

describe('Locale code by country search tests.', () => {
  it('should return a list of locales', () => {
    const res = findCountryLocales('BE')
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 4)
    assert.deepStrictEqual(res, ['de-BE', 'en-BE', 'fr-BE', 'nl-BE'])
  })

  it('should return an empty list', () => {
    const res = findCountryLocales('YYY')
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 0)
  })

  it('should return an empty list again', () => {
    const res = findCountryLocales(77236)
    assert(Array.isArray(res))
    assert.strictEqual(res.length, 0)
  })
})

describe('Locales map', () => {
  it('should find the right name for a locale', () => {
    const res = locales()
    assert.strictEqual(typeof res, 'object')
    assert.strictEqual(res['pt-PT'], 'Portuguese (PT)')
  })
})
