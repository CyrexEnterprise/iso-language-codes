const { describe, it } = require('mocha')
const { assert, expect } = require('chai')

const {
  locales,
  validateLocaleCode,
  validateLanguageCode,
  findCountryLanguages,
  findCountryLocales,
} = require('../src')

describe('Validation tests.', () => {
  it('should validate the locale code', () => {
    assert(validateLocaleCode('pt-PT') === true)
  })

  it('should not validate the locale code', () => {
    assert(validateLocaleCode('pt-XX') === false)
  })

  it('should not validate the locale code (undefined)', () => {
    assert(validateLocaleCode() === false)
  })

  it('should not validate the locale code (null)', () => {
    assert(validateLocaleCode(null) === false)
  })


  it('should validate the language code', () => {
    assert(validateLanguageCode('es') === true)
  })

  it('should not validate the locale code', () => {
    assert(validateLanguageCode('aa') === false)
  })

  it('should not validate the locale code (undefined)', () => {
    assert(validateLanguageCode() === false)
  })

  it('should not validate the locale code (null)', () => {
    assert(validateLanguageCode(null) === false)
  })
})

describe('Language code by country search tests.', () => {
  it('should return a list of languages', (done) => {
    const res = findCountryLanguages('US')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(2)
    expect(res).to.deep.equal(['en', 'es'])
    done()
  })

  it('should return an empty list', (done) => {
    const res = findCountryLanguages('XXX')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })

  it('should return an empty list again', (done) => {
    const res = findCountryLanguages(346592)
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })
})

describe('Locale code by country search tests.', () => {
  it('should return a list of locales', (done) => {
    const res = findCountryLocales('BE')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(4)
    expect(res).to.deep.equal(['de-BE', 'en-BE', 'fr-BE', 'nl-BE'])
    done()
  })

  it('should return an empty list', (done) => {
    const res = findCountryLocales('YYY')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })

  it('should return an empty list again', (done) => {
    const res = findCountryLocales(77236)
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })
})

describe('Locale code by country search tests.', () => {
  it('should return a list of locales', (done) => {
    const res = findCountryLocales('BE')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(4)
    expect(res).to.deep.equal(['de-BE', 'en-BE', 'fr-BE', 'nl-BE'])
    done()
  })

  it('should return an empty list', (done) => {
    const res = findCountryLocales('YYY')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })

  it('should return an empty list again', (done) => {
    const res = findCountryLocales(77236)
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(0)
    done()
  })
})

describe('Locales map', () => {
  it('should find the right name for a locale', (done) => {
    const res = locales()
    expect(res).to.be.an('object')
    expect(res['pt-PT']).to.equal('Portuguese (PT)')
    done()
  })
})
