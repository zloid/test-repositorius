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
        // fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // main keyboard key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' })
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // main keyboard key 0-9
        // '1234567890'
        /* 
        ;[...Array(9)].forEach((e, k) => {
            fireEvent.keyDown(document, {
                key: `${k + 1}`,
                code: `Digit${k + 1}`,
            })
        })
    */
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Digit${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })

        // keyboard key '+'
        // fireEvent.keyDown(document, { key: '+' })
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard key 0-9
        // `1234567890`
        /* ;[...Array(9)].forEach((e, k) => {
            fireEvent.keyDown(document, {
                key: `${k + 1}`,
                code: `Numpad${k + 1}`,
            })
        }) */
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Numpad${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })

        // equal, keyboard key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' })
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('2469135780')
    })

    it('v7865654, calc keyboard keys is working', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        // numPad key Delete
        fireEvent.keyDown(document, { key: 'Delete', code: 'NumpadDecimal' })
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // main keyboard key 0-9
        // '1234567890.1'         
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Digit${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })
        // point is work
        fireEvent.keyDown(document, { key: '.', code: 'Period' })
        fireEvent.keyDown(document, { key: '1', code: 'Digit1' })

        // keyboard key '+'
        // fireEvent.keyDown(document, { key: '+' })
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad keyboard key 0-9
        // `1234567890,1`        
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Numpad${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })
        // comma is work
        fireEvent.keyDown(document, { key: ',', code: 'NumpadDecimal' })
        fireEvent.keyDown(document, { key: '1', code: 'Numpad1' })

        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('2469135780.2')
    })
    it('v289562, calc keyboard keys is working: +,-,*,/, Delete, Enter', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        // key Delete
        fireEvent.keyDown(document, { key: 'Delete' })
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // total
        // '1234567890.1 + 1234567890,1 - 9 - 9 + 18 * 1 / 1'

        // main keyboard key 0-9
        // '1234567890.1'         
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Digit${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Digit0' })
        // point is work
        fireEvent.keyDown(document, { key: '.', code: 'Period' })
        fireEvent.keyDown(document, { key: '1', code: 'Digit1' })

        // Numpad key '+'
        fireEvent.keyDown(document, { key: '+', code: 'NumpadAdd' })

        // Numpad key 0-9
        // `1234567890,1`        
        for (let i = 0; i < 9; i++) {
            fireEvent.keyDown(document, {
                key: `${i + 1}`,
                code: `Numpad${i + 1}`,
            })
        }
        fireEvent.keyDown(document, { key: '0', code: 'Numpad0' })
        // comma is work
        fireEvent.keyDown(document, { key: ',', code: 'NumpadDecimal' })
        fireEvent.keyDown(document, { key: '1', code: 'Numpad1' })

        // '-' on keyboard
        fireEvent.keyDown(document, { key: '-', code: 'Minus' })
        fireEvent.keyDown(document, { key: '9' })
         // '-' on numPad
         fireEvent.keyDown(document, { key: '-', code: 'NumpadSubtract' })
         fireEvent.keyDown(document, { key: '9' })         
         // '+'
         fireEvent.keyDown(document, { key: '+' })
         fireEvent.keyDown(document, { key: '1' })
         fireEvent.keyDown(document, { key: '8' })
         // '*'
         fireEvent.keyDown(document, { key: '*' })
         fireEvent.keyDown(document, { key: '1' })
         // '/'
         fireEvent.keyDown(document, { key: '/' })
         fireEvent.keyDown(document, { key: '1' })

        // equal, numPad key Enter
        fireEvent.keyDown(document, { key: 'Enter', code: 'NumpadEnter' })
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('2469135780.2')
    })
})
