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

describe('App.js - calc logic', () => {
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('-GitHub Corners- is exist', () => {
        screen.getByRole(/^githubCorner$/i)
    })

    it('click on some calc buttons is correct', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // before click
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // click
        const elementBtn = screen.getByRole(/^calcBtnFour$/i)
        fireEvent.click(elementBtn)
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFive$/i))
        // calc screen after click
        expect(elementClcScrn.textContent.trim()).toBe('4105')
    })
    it('click "clear" button is clearing calc screen', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // click some buttons
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        // calc screen is not clear
        expect(elementClcScrn.textContent.trim()).not.toBe('0')
        // click clear
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
    })     
    it('v435132435, click on "=" for getting result ', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // division
        // 99 ÷ 11
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // click "="
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('9')
    })
    it('v56489, click on -calc screen- for getting result ', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')

        // division
        // 99 ÷ 3 ÷ 33
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        // click on screen
        fireEvent.click(screen.getByRole(/^calcMainScreen$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('1')
    })

})
