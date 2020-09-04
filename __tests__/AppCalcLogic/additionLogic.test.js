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

describe('App.js - calc addition logic', () => {
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('calc button "+" is working', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // addition
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))         
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('4.2')
    })
    it('v439872, calc button "+" is working', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // addition         
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('14')
    })
    it('v213456879, calc button "+" is working', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // addition         
        // 1 + 0003 + 1.4 + 7
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSeven$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('12.4')
    })
    // todo
    // 0.1 + 0.2
    // 2 + 2.11
})
