import iCreateElement from '../iCreateElement.js'
// const iCreateElement = require('../iCreateElement')
// import iCreateElement from './src/scripts/iCreateElement/index.js'

iCreateElement()
describe('iCreateElement()', () => { 
    it('1 + 2 to equal 3', () => {
        expect(iCreateElement(1, 2)).toBe(3)
    })
})
/* 
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
}) */