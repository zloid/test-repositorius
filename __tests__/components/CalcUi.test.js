import { screen } from '@testing-library/dom'
import myLib from '../../src/utils/myLib'
// import App from '../../src/app/App'
import CalcUi from '../../src/components/calcUi/CalcUi'

// creating DOM div #root
myLib.create({ id: 'root', cut: 'all' })
// render App to #root
// App.render()
document.getElementById('root').innerHTML = CalcUi()

describe('CalcUi.test.js', () => {   
    it('calc screen exist', () => {           
        screen.getByRole(/^calcMainScreen$/i)        
    })
    it('calc screen data is -zero-', () => {
        const element = screen.getByRole(/^calcMainScreenData$/i) 
        
        expect(element.innerHTML).toBe('0')
    })
})
