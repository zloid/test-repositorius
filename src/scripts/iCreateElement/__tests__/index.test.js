import iCreateElement from '../iCreateElement.js'
import { screen } from '@testing-library/dom'

describe('iCreateElement()', () => {
    it('1: does tstng-lbr working?', () => {
        screen.debug()
        const someNode = screen.queryByText(/text inside h3 - in prm - 333/i)
        console.log('foooooooo: ', someNode)
        expect(someNode).toBe(null)
    })
    it('2: does tstng-lbr working?', () => {        
        iCreateElement(111, 222)
        screen.debug()
        const someNode = screen.getByText(/text inside h3 - in prm - 333/i)
        console.log('baaaaaaaaar: ', someNode.textContent)
        expect(someNode.textContent).toBe('text inside h3 - in prm - 333')
    })
})
