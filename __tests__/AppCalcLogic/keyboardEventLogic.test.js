import { screen, fireEvent, getNodeText } from '@testing-library/dom'
// -myLib- must be here, there all dispatch actions
import myLib from '../../src/utils/myLib'
import App from '../../src/app/App'
import store from '../../src/app/store'
import { uiDidMount } from '../../src/utils/uiDidMount'

// creating DOM div #root
document.body.innerHTML = '<div id="root" data-testid="mainRootDiv"></div>'
// first render App to #root
App.render()
// run some scripts after App did render
uiDidMount()
// render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
})

describe('Keyboard and Numpad is working for calc App', () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen by click main keyboard key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' })
        // calc screen is clear
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('0')
    })
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('"1234567890 + 1234567890" ~> "2469135780"', () => {
        // main keyboard pressing: 1234567890
        /* for (let i = 1; i < 10; i++) {
            fireEvent.keyDown(document, {
                key: `${i}`,
                code: `Digit${i}`,
            })
        } */
        Array(9)
            .fill()
            .forEach((_, i) =>
                fireEvent.keyDown(document, {
                    key: `${i + 1}`,
                    code: `Digit${i + 1}`,
                })
            )
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })

        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard pressing: 1234567890
        Array(9)
            .fill()
            .forEach((_, i) =>
                fireEvent.keyDown(document, {
                    key: `${i + 1}`,
                    code: `Numpad${i + 1}`,
                })
            )
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })

        // equal, keyboard key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '2469135780'
        )
    })
    it('"1234567890.1 + 1234567890,1" ~> "2469135780.2"', () => {
        // main keyboard pressing: 1234567890.1
        Array(9)
            .fill()
            .forEach((_, i) =>
                fireEvent.keyDown(document, {
                    key: `${i + 1}`,
                    code: `Digit${i + 1}`,
                })
            )
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })
        // point is work
        fireEvent.keyDown(document, { key: '.', code: 'Period' })
        fireEvent.keyDown(document, { key: '1', code: 'Digit1' })

        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard pressing: 1234567890.1
        Array(9)
            .fill()
            .forEach((_, i) =>
                fireEvent.keyDown(document, {
                    key: `${i + 1}`,
                    code: `Numpad${i + 1}`,
                })
            )
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })
        // comma is work
        fireEvent.keyDown(document, { key: ',', code: 'NumpadDecimal' })
        fireEvent.keyDown(document, { key: '1', code: 'Numpad1' })

        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '2469135780.2'
        )
    })
    it('"- 9 - 9 + 1 * 17 / 17" ~> "- 17"', () => {
        // main keyboard
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        fireEvent.keyDown(document, { key: '9' })
        // '-' on numPad
        fireEvent.keyDown(document, { key: '-', code: 'NumpadSubtract' })
        fireEvent.keyDown(document, { key: '9' })
        // '+'
        fireEvent.keyDown(document, { key: '+' })
        fireEvent.keyDown(document, { key: '1' })
        // '*'
        fireEvent.keyDown(document, { key: '*' })
        fireEvent.keyDown(document, { key: '1' })
        fireEvent.keyDown(document, { key: '7' })
        // '/'
        fireEvent.keyDown(document, { key: '/' })
        fireEvent.keyDown(document, { key: '1' })
        fireEvent.keyDown(document, { key: '7' })
        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('- 17')
    })
})
