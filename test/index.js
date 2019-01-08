const { assert } = require('chai')
const { validateLanguageCode } = require('../src')

describe('Just a test.', () => {
  it('should get you a foobar', () => {
    assert(validateLanguageCode('foo') === 'foobar')
  })
  
  it('should get you a bar', () => {
    assert(validateLanguageCode() === 'bar')
  })
})
