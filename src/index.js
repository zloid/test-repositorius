// -myLib- must be here, there all dispatch actions
import myLib from './utils/myLib'

import App from './app/App'
import { DOMDidMount } from './utils/DOMDidMount'

import store from './app/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app/app.css'

// creating DOM element: <div id="root"></div>
document.body.innerHTML = '<div id="root"></div>'

// render Reef's App to #root
// first render
App.render()
DOMDidMount()

// render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
})
