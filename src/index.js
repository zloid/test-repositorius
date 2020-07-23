// own
import myLib from './utils/myLib'
import iCreateElement from './utils/iCreateElement'
import App from './app/App'

// styles
import './bootstrap.css'
// own styles
import './own.css'

// creating DOM element: <div id="root"></div>
// same as call user's lib: window.myLib.create({ id: 'root', cut: 'all' })
iCreateElement({ id: 'root', cut: 'all' })
// render Reef's App to #root
App.render()

/*     
const WORLD = 'WRLD'
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
 */
