// it must be here
import myLib from './utils/myLib'

import App from './app/App'

import { store } from './app/store'

// own
// styles
import './bootstrap.css'
// own styles
import './own.css'

// creating DOM element: <div id="root"></div>
window.myLib.create({ id: 'root', cut: 'all' })

// render Reef's App to #root
// first render
App.render()

console.log('store.modernReducer.foo::: ', store.getState().modernReducer.foo )
  

// render each time when dispatch redux actions
store.subscribe(() => {
    App.render()
    // console.log(store.getState().modernReducer)
})
