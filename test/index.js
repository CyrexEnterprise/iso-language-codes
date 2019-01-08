const { describe, it } = require('mocha')
const { assert, expect } = require('chai')

const {
  validateLocaleCode,
  findCountryLanguages,
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
})

describe('Code search tests.', () => {
  it('should return a list of languages', (done) => {
    const res = findCountryLanguages('US')
    expect(res).to.be.an('array')
    expect(res).to.have.lengthOf(2)
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

