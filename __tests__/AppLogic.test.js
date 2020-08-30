import { screen, fireEvent } from '@testing-library/dom'
// it must be here, there is all dispatch actions
import myLib from '../src/utils/myLib'
import App from '../src/app/App'
import { store } from '../src/app/store'

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

    it('click on some calc button is correct', () => {
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

        // after click
        expect(elementClcScrn.textContent.trim()).toBe('4105')

        // console.log('213546987::: ', elementClcScrn.textContent.trim())
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
    it('calc button "+" is working', () => {
        // initial
        document.getElementById('root').innerHTML += ''
        const elementClcScrn = screen.getByRole(/^calcMainScreen$/i)
        fireEvent.click(screen.getByRole(/^calcBtnClear$/i))
        // calc screen is clear
        expect(elementClcScrn.textContent.trim()).toBe('0')
    })
})

/* 
    it('dellll click 2', () => {
        document.getElementById('root').innerHTML += ''

        const elementClcScrnAfter = screen.getByRole(/^calcMainScreen$/i)
        console.log('87954621::: ', elementClcScrnAfter.textContent.trim())

        const elementBtn2 = screen.getByRole(/^calcBtnOne$/i)

        fireEvent.click(elementBtn2)
        fireEvent.click(elementBtn2)
        fireEvent.click(elementBtn2)

        const elementBtn = screen.getByRole(/^calcBtnTwo$/i)
        fireEvent.click(elementBtn)
        fireEvent.click(elementBtn)
        fireEvent.click(elementBtn)

        fireEvent.click(screen.getByRole(/^calcBtnFive$/i))

        console.log('213546987::: ', elementClcScrnAfter.textContent.trim())
    })
     */

/* 
    it('dellll', () => {
        // onclick="window.myLib.create({tag: 'span', inner: 'фывфывфывфыв'})"
        document.getElementById('root').innerHTML += `<button
                id="tst"
                role="someBtn"
                
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"

            >click_click::: ${store.getState().modernReducer.foo}</button>`
             */
/* 
        // screen info
        document.getElementById('root').innerHTML += `<h4>${
            store.getState().buttonToDisplay.displayData
        }</h4>`
         */
/* 
        store.dispatch(addButtonValueToScreen('765'))
        store.dispatch(addButtonValueToScreen('765'))
 */
// const element324897 = screen.getByRole(/^someBtn$/i)
// fireEvent.click(element324897)
// fireEvent.click(element324897)
// fireEvent.click(element324897)
// fireEvent.click(element324897)

/* 
        const elementBtn = screen.getByRole(/^calcBtnOne$/i)
        const leftClick = { button: 0 }
        fireEvent.click(elementBtn, leftClick)
        fireEvent.click(elementBtn, leftClick)
        fireEvent.click(elementBtn, leftClick)
        fireEvent.click(elementBtn, leftClick)
        fireEvent.click(elementBtn, leftClick)
 */
/* 
        document.getElementById('root').innerHTML += `<h4>${
            store.getState().buttonToDisplay.displayData
        }</h4>`
 */
// App.render()

// const leftClick = { button: 0 }
// fireEvent.click(element324897, leftClick)
// fireEvent.click(element324897, { button: 1 })
// fireEvent.click(element324897, { button: 2 })
// fireEvent.click(element324897, { button: 3 })
// fireEvent.click(element324897, { button: 0 })

// console.log('3459876:::', store.getState().modernReducer.foo)

// myLib
// window.myLib.create({tag: 'span', inner: 'someeee1'})

// console.log('myLib::: ', window.myLib.create({tag: 'span', inner: 'someeee'}))

/* 
        const elementBtn2 = screen.getByRole(/^calcBtnTwo$/i)
        
        fireEvent.click(elementBtn2)
        fireEvent.click(elementBtn2)
        fireEvent.click(elementBtn2)
        
        
        // screen.debug()
        const elementClcScrnAfter = screen.getByRole(/^calcMainScreen$/i)
        console.log('1232345345::: ', elementClcScrnAfter.textContent.trim())
    })
        */
