import iCreateElement from '../iCreateElement.js'
import { screen } from '@testing-library/dom'

describe('iCreateElement()', () => {
    it('DOM is empty', () => {
        const testElement = screen.queryByText(/new test div/i)
        //test
        expect(testElement).toBe(null)
        screen.debug()
    })
    it('created new HTMLElement in DOM: <div>new test div</div>', () => {
        iCreateElement({ inner: 'new test div' })
        //test
        const testElement = screen.getByText(/new test div/i)
        expect(testElement.tagName).toBe('DIV')
        expect(testElement.textContent).toBe('new test div')
        screen.debug()
    })
    it('created new HTMLElement in DOM: <h3>hello h3</h3>', () => {
        iCreateElement({ tag: 'h3', inner: 'hello h3' })
        //test
        const testElement = screen.getByText(/hello h3/i)
        expect(testElement.tagName).toBe('H3')
        expect(testElement.textContent).toBe('hello h3')
        screen.debug()
    })
    it('quick inserting any html code in DOM', () => {
        const testElement = screen.queryByText(/any html code/i)
        //test
        expect(testElement).toBe(null)
        //create
        iCreateElement({
            inner: '<span class="i-class"><p>any html code</p></span>',
        })
        //test
        const testElementTwo = screen.queryByText(/any html code/i)
        expect(testElementTwo.textContent).toBe('any html code')
        expect(testElementTwo.tagName).toBe('P')
        screen.debug()
    })
})
