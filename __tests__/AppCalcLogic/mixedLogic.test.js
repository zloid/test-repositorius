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

describe('App.js - calc mixed logic is working', () => {
    beforeEach(() => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
    })
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('"99 ÷ 3 + 11" ~> "44"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
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
    it('"0 / 0 + 1 / 1234567890" ~> "Error"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFive$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSix$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSeven$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEight$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('Error')
    })
    it('exponential number: "00 + 1 / 1234567890" ~> "8.1e-10"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFive$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSix$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSeven$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEight$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('8.1e-10')
    })
    it('"1 / 1234567890 + 1" ~> "1.00000000081"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFive$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSix$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSeven$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEight$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('1.00000000081')
    })
    it('"- 1 / 0 " ~> "- Infinity"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })
    it('"- 1 / 0 - 1" ~> "- Infinity"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })
    it('"- Infinity - 1" ~> "- Infinity"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })
    it('"- Infinity123 - 123" ~> "- Infinity"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })
    it('"Infinity - Infinity" ~> "Error"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
         // mixed logic
         fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
         fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
         fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
         // equal to get '- Infinity'
         fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
         expect(elementClcScrn.textContent.trim()).toBe('Error')
    })
    it('"- Infinity - Infinity" ~> "- Infinity"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
         // mixed logic
         fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
         fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
         fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
         // equal to get '- Infinity'
         fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
         expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })

    /* 
    pattern

    // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // mixed logic        
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('9999999')
    
    */
})
