import { screen, fireEvent, getNodeText } from '@testing-library/dom'
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

describe("Calc's mixed logic", () => {
    beforeEach(() => {
        //initial, must be here
        document.getElementById('root').innerHTML += ''
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('0')
    })
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })
    it('"99 / 3 + 11" ~> "44"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('44')
    })
    it('"Error + 1 / 12345" ~> "Error"', () => {
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
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('Error')
    })
    it('exponential number: "00 + 1 / 1234567890" ~> "8.1e-10"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '8.1e-10'
        )
    })
    it('"1 / 1234567890 + 1" ~> "1.00000000081"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '1.00000000081'
        )
    })
    it('exponential: "1 * 123456789012345678901234567890" ~> "=","=","=" ~> "1.2345678901234568e+29" ~> "+ 2" ~> "1.2345678901234568e+29" ', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        //
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
        //
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
        //
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
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '1.2345678901234568e+29'
        )
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '1.2345678901234568e+29'
        )
    })
    it('"- 1 / 0 " ~> "- Infinity"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"- 1 / 0 - 1" ~> "- Infinity"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"- Infinity - 1" ~> "- Infinity"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"- Infinity123 - 123" ~> "- Infinity"', () => {
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"Infinity - Infinity" ~> "Error"', () => {
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
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('Error')
    })
    it('"- Infinity - Infinity" ~> "- Infinity"', () => {
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
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"- Infinity ." ~> "- Infinity"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            '- Infinity'
        )
    })
    it('"Infinity ..." ~> "Infinity"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get 'Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        // equal
        //  fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            'Infinity'
        )
    })
    it('"- Infinity ... + 7" ~> "- Infinity + 7"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get '- Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnSeven$/i))
        // equal
        //  fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            ' - Infinity + 7'
        )
    })
    it('"Infinity - 0.1" ~> "Infinity"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get 'Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            'Infinity'
        )
    })
    it('"Infinity + 0.1" ~> "Infinity"', () => {
        // mixed logic
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal to get 'Infinity'
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // fire next
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe(
            'Infinity'
        )
    })
})
