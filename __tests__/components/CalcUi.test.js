import { screen } from '@testing-library/dom'
import myLib from '../../src/utils/myLib'
import CalcUi from '../../src/components/calcUi/CalcUi'

// creating DOM div #root
// myLib.create({ id: 'root', cut: 'all' })
// document.getElementById('root').innerHTML = CalcUi()
document.body.innerHTML = CalcUi()

describe('CalcUi.js', () => {   
    it('calc screen is exist', () => {           
        screen.getByRole(/^calcMainScreen$/i)   
        // screen.debug()
    })
     it('calc screen data is -zero-', () => {
        const element = screen.getByRole(/^calcMainScreen$/i) 
        
        expect(element.textContent.trim()).toBe('0')
    })
    it('calc button -7- is exist, with text 7', () => {
        const element = screen.getByRole(/^calcBtnSeven$/i)

        expect(element.textContent.trim()).toBe('7')        
    })
    it('calc button -8- is exist, with text 8', () => {
        const element = screen.getByRole(/^calcBtnEight$/i)
        
        expect(element.textContent.trim()).toBe('8')
    })
    it('calc button -9- is exist, with text 9', () => {
        const element = screen.getByRole(/^calcBtnNine$/i)

        expect(element.textContent.trim()).toBe('9')
    })
    it('calc button -4- is exist, with text 4', () => {
        const element = screen.getByRole(/^calcBtnFour$/i)

        expect(element.textContent.trim()).toBe('4')
    })
    it('calc button -5- is exist, with text 5', () => {
        const element = screen.getByRole(/^calcBtnFive$/i)

        expect(element.textContent.trim()).toBe('5')
    })
    it('calc button -6- is exist, with text 6', () => {
        const element = screen.getByRole(/^calcBtnSix$/i)

        expect(element.textContent.trim()).toBe('6')
    })
})
