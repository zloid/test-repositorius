import { screen } from '@testing-library/dom'
import myLib from '../src/utils/myLib'
import App from '../src/app/App'

// creating DOM div #root
window.myLib.create({ id: 'root', cut: 'all' })
// render App to #root
App.render()

describe('App.js', () => {
    /* it('show whole DOM-tree ', () => {
        // debug
        // screen.debug()
        console.log(78456321)
    }) */
    it('component CalcUi is render to DOM', () => {
        // find element
        const element = screen.getByText(/^CalcUi_9832$/i)
        // debug
        screen.debug()
        console.log(32445632)
    })
    it(`calc's UI is correct`, () => {
        // element is exist
        const element = screen.getByRole(/^calcMainScreen$/i)
        // debug
        screen.debug()
        console.log(321231)
        console.log('element --- ', element)
    })
})