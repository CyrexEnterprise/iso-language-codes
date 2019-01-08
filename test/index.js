const { describe, it } = require('mocha')
const { assert } = require('chai')

const {
  validateLocaleCode,
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
