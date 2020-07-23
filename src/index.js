import Reef from 'reefjs'
// own
import iCreateElement from './utils/iCreateElement'
import App from './app/App'
// styles
import './bootstrap.css'
// own styles
import './own.css'

// const iRnd = () => console.log(Math.random())

// create DOM element <div id="root"></div>
// iCreateElement({ id: 'app', className: '', inner: '' })
iCreateElement({ id: 'root', cut: 'all' })
// <div id="root"><div class="badge badge-primary">Hello, world!</div></div>
App.render()

const WORLD = 'WRLD'

myLib.create({ tag: 'hr', only: 'true' })
myLib.create({ tag: 'hr', only: 'true' })
;[...Array(9)].forEach(() => {
    // myLib.create({ tag: 'button', className: 'btn btn-success', inner: ' * ' })
    iCreateElement({
        tag: 'button',
        className: 'btn btn-success',
        inner: ' * - btn -',
    })
    // myLib.create({ tag: 'br', only: true })
    myLib.create({ tag: 'strong', only: true, inner: `<i>hello</i> ${WORLD}` })
})
