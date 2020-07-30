import Reef from 'reefjs'
import myLib from './utils/myLib'

import App from './app/App'

import { store } from './store'

// own

// styles
import './bootstrap.css'
// own styles
import './own.css'

// creating DOM element: <div id="root"></div>
window.myLib.create({ id: 'root', cut: 'all' })

// render Reef's App to #root
App.render()

store.subscribe(() => {
    console.log(11111, store)
    App.render()
})
