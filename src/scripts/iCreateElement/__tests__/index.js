import iCreateElement from '../iCreateElement.js'
// const { queryHelpers } = domTestingLib
import { screen } from '@testing-library/dom'

describe('iCreateElement()', () => {
    it('1: does tstng-lbr working?', () => {
        screen.debug()
    })
    it('2: does tstng-lbr working?', () => {
        iCreateElement()
        screen.debug()
    })
    it('tstng-lbr correct?', () => {
        const someNode = screen.getByText(/text inside/i)
        console.log('my new tstng-lbr-tst: someNode.innerHTML')
    })
})
