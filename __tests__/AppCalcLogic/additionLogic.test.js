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

describe("Calc's addition logic", () => {
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
    it('"2 + 2.2" ~> "4.2"', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('4.2')
    })
    it('"9 + 4 + 1" ~> "14"', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('14')
    })
    it('"1 + 0003 + 1.4 + 7" ~> "12.4"', () => {
        // addition
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
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('12.4')
    })
    it('"0.1 + 0.2" ~> "0.3"', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))

        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))

        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('0.3')
    })
    it('"0.1 + 0.002"', () => {
        // addition
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))

        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))

        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('0.102')
    })
    it('"2 + 2.11" ~> "4.11"', () => {
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnPlus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnTwo$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDecimalPoint$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('4.11')
    })
})
