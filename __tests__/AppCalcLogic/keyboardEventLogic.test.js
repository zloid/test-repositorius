import { screen, fireEvent } from '@testing-library/dom'
// -myLib- must be here, there all dispatch actions
import myLib from '../../src/utils/myLib'
import App from '../../src/app/App'
import store from '../../src/app/store'

// creating DOM div #root
document.body.innerHTML = '<div id="root" data-testid="mainRootDiv"></div>'
// first render App to #root
App.render()
// render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
})

describe('App.js - calc keyboard events logic', () => {
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('v321654, calc keyboard keys is working, (1234567890 + 1234567890)', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // main keyboard key
        // '1234567890'
        ;[...Array(9)].forEach((e, k) => {
            fireEvent.keyDown(document, {
                key: `${k + 1}`,
                code: `Digit${k + 1}`,
            })
        })
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })

        // keyboard key '+'
        // fireEvent.keyDown(document, { key: '+' })
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard key
        // `1234567890`
        ;[...Array(9)].forEach((e, k) => {
            fireEvent.keyDown(document, {
                key: `${k + 1}`,
                code: `Numpad${k + 1}`,
            })
        })
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })

        // equal
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('2469135780')
    })
})
