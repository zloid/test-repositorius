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

describe('App.js - calc mixed logic', () => {
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('v98034298, calc button "÷" is working', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // mixed
        // 99 ÷ 3 + 11
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('44')
    })
})
