// -myLib- must be here, there all dispatch actions
import myLib from './utils/myLib'

import App from './app/App'
import uiDidMount from './utils/uiDidMount'

import store from './app/store'

// styles
// import './bootstrap.min.css'
// import * as btp './bootstrap.min.js'
// import './bootstrap.css'
//import './bootstrap-theme.css'
// import './own.css'

// import 'bootstrap/js/dist/button.js'
//import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/app.css'

// creating DOM element: <div id="root"></div>
document.body.innerHTML = '<div id="root"></div>'

// render Reef's App to #root
// first render
App.render()
uiDidMount()

console.log('store.modernReducer.foo::: ', store.getState().modernReducer.foo)

// render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
    // console.log(store.getState().modernReducer)
})
