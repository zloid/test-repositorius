import { screen } from '@testing-library/dom'
// import mapAllDispatch from '../../src/utils/mapAllDispatch'
import CalcUi from '../../src/components/calcUi/CalcUi'

// creating DOM div #root
// mapAllDispatch.create({ id: 'root', cut: 'all' })
// document.getElementById('root').innerHTML = CalcUi()
document.body.innerHTML = CalcUi()

describe('CalcUi.js', () => {
    it('calc screen is exist', () => {
        screen.getByRole(/^calcMainScreen$/i)
    })
    it('calc screen data is -zero-', () => {
        const element = screen.getByRole(/^calcMainScreen$/i)
        expect(element.textContent).toBe('0')
        // expect(getNodeText(screen.getByRole(/^calcMainScreen$/i))).toBe('0')
    })
    it('calc button -7- is exist, with text 7', () => {
        const element = screen.getByRole(/^calcBtn7$/i)

        expect(element.textContent.trim()).toBe('7')
    })
    it('calc button -8- is exist, with text 8', () => {
        const element = screen.getByRole(/^calcBtn8$/i)

        expect(element.textContent.trim()).toBe('8')
    })
    it('calc button -9- is exist, with text 9', () => {
        const element = screen.getByRole(/^calcBtn9$/i)

        expect(element.textContent.trim()).toBe('9')
    })
    it('calc button -4- is exist, with text 4', () => {
        const element = screen.getByRole(/^calcBtn4$/i)

        expect(element.textContent.trim()).toBe('4')
    })
    it('calc button -5- is exist, with text 5', () => {
        const element = screen.getByRole(/^calcBtn5$/i)

        expect(element.textContent.trim()).toBe('5')
    })
    it('calc button -6- is exist, with text 6', () => {
        const element = screen.getByRole(/^calcBtn6$/i)

        expect(element.textContent.trim()).toBe('6')
    })
    it('calc button -1- is exist, with text 1', () => {
        const element = screen.getByRole(/^calcBtn1$/i)

        expect(element.textContent.trim()).toBe('1')
    })
    it('calc button -2- is exist, with text 2', () => {
        const element = screen.getByRole(/^calcBtn2$/i)

        expect(element.textContent.trim()).toBe('2')
    })
    it('calc button -3- is exist, with text 3', () => {
        const element = screen.getByRole(/^calcBtn3$/i)

        expect(element.textContent.trim()).toBe('3')
    })
    it('calc button -0- is exist, with text 0', () => {
        const element = screen.getByRole(/^calcBtn0$/i)

        expect(element.textContent.trim()).toBe('0')
    })
    it('calc button -decimal point- is exist, with text "."', () => {
        const element = screen.getByRole(/^calcBtnPoint$/i)

        expect(element.textContent.trim()).toBe('.')
    })
    it('calc button -plus- is exist, with text "+"', () => {
        const element = screen.getByRole(/^calcBtnPlus$/i)

        expect(element.textContent.trim()).toBe('+')
    })
    it('calc button -minus- is exist, with text "-"', () => {
        const element = screen.getByRole(/^calcBtnMinus$/i)

        expect(element.textContent.trim()).toBe('-')
    })
    it('calc button -multiply- is exist, with text "*"', () => {
        const element = screen.getByRole(/^calcBtnMultiply$/i)

        expect(element.textContent.trim()).toBe('*')
    })
    it('calc button -division- is exist, with text "÷"', () => {
        const element = screen.getByRole(/^calcBtnDivision$/i)

        expect(element.textContent.trim()).toBe('÷')
    })
    it('calc button -equal- is exist, with text "="', () => {
        const element = screen.getByRole(/^calcBtnEqual$/i)

        expect(element.textContent.trim()).toBe('=')
    })
    it('calc button -clear- is exist, with text "c"', () => {
        const element = screen.getByRole(/^calcBtnClear$/i)

        expect(element.textContent.toLowerCase().trim()).toBe('c')
    })
    it('list of Calc Features for users is exist', () => {
        const element = screen.getAllByRole(/^calcFeaturesForUsers$/i)

        expect(element.length).toBe(2)
    })
})
