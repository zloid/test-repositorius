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

describe("Calc's division logic", () => {
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
    it('"99 / 3" ~> "33"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // division
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('33')
    })
    it('"99 / 3 / 10" ~> "3.3"', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // division
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnThree$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('3.3')
    })
    it('"0 / 0" ~> "Error" ', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // division
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('Error')
    })
    it('"0 / 0" ~> "Error" ~> "=", "=", "=" ~> "Error" ', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // division
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('Error')
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('Error')
    })
    it('"- 1 / 0" ~> "- Infinity" ~> "=", "=", "=" ~> "- Infinity" ', () => {
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // division
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))
        fireEvent.click(screen.getByRole(/^calcBtnDivision$/i))
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))
        // equal for
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('- Infinity')
    })

    // todo
    // '123 /' ~> '123 /'
})
