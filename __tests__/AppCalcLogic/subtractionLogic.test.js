import { screen, fireEvent, getNodeText } from '@testing-library/dom'
// -connectDispatch- must be here, there all dispatch actions
import connectDispatch from '../../src/utils/connectDispatch'
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

describe("Calc's subtraction logic", () => {
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
    it('"99 - 3" ~> "96"', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('96')
    })
    it('"99 - 3 - 10" ~> "86"', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn3$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('86')
    })
    it('"0 - 7" ~> "- 7"', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn7$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('- 7')
    })
    it('"1 - 100" ~> "- 99"', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn1$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        fireEvent.click(screen.getByRole(/^calcBtn0$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('- 99')
    })
    it('"- 9", "=", "=", "=" ~> "- 9"', () => {
        // subtraction
        fireEvent.click(screen.getByRole(/^calcBtnMinus$/i))
        fireEvent.click(screen.getByRole(/^calcBtn9$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('- 9')
    })
})
