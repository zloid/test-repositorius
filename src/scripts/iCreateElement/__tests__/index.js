import iCreateElement from '../iCreateElement.js'
// const domTestingLib = require('@testing-library/dom')
// const { queryHelpers } = domTestingLib
// import { queryHelpers } from '@testing-library/dom'
 
describe('iCreateElement()', () => { 
    it('1 + 2 to equal 3', () => {
        expect(iCreateElement(1, 2)).toBe(3)
    })
})
