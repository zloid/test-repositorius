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

describe('App.js - calc multiplication logic', () => {
    it('initial div "root" is exist', () => {
        screen.getByTestId(/^mainRootDiv$/)
    })     
    it('v9856, calc button "*" is working', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // multiplication         
        // 9 * 4
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))        
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtnFour$/i))
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('36')
    }) 
    it('v678985, calc button "*" is working', () => {
        // initial
        // must be here
        document.getElementById('root').innerHTML += ''
        // result will be here
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        // clear screen
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
        // multiplication         
        // 9 * 9 * 100
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))        
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtnNine$/i))        
        fireEvent.click(screen.getByRole(/^calcBtnMultiply$/i))
        fireEvent.click(screen.getByRole(/^calcBtnOne$/i))        
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))        
        fireEvent.click(screen.getByRole(/^calcBtnZero$/i))        
        // equal
        fireEvent.click(screen.getByRole(/^calcBtnEqual$/i))
        // calc screen result
        expect(elementClcScrn.textContent.trim()).toBe('8100')
    }) 
})
