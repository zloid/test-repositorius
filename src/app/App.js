import Reef from 'reefjs'
// own
// import { storeTwo } from '../store'
// import { storeTwo } from '../app/store'
import CalcUi from '../components/calcUi/CalcUi'
import iCreateElement from '../utils/iCreateElement'


// todo
// import { store } from '../store'
import { store } from '../app/store'

import { tsts } from './rootReducer'
// import CalcDisplay from '../components/calcDisplay/CalcDisplay'

// console.log(tsts())
// console.log(CalcDisplay())


store.dispatch({
    type: 'ADD_TODO',
    text: '789978987',
})

// console.log('store.state~>: App.js >>', store.getState())

// window.myLib.create({ parentId: '#root', inner: 'dsfa' })
// iCreateElement({ parentId: '#root', inner: 'dsfa' })

/* 
const doSome = () => {
    storeTwo.data.todos.push('Take a nap... doSome()')
}

doSome() */

// App will render to #root at src/index.js

// todo
// ${props.map((todo) => `<li>${todo}</li>`).join('')}

const App = new Reef('#root', {
    // store: storeTwo,
    template: (props) => `<div class="container">

        ${CalcUi()}     
        
        <button
            onClick="window.myLib.strTest()"
            class="btn btn-primary"
        >
            ibtn hello
        </button>
        <button
            onClick="myLib.create({tag: 'button'})"
            class="btn btn-warning"
        >
            ibtn hello
        </button>

        
        
    </div>`,
})

/*

${store
            .getState()
            .map((elem) => `<li>${elem}</li>`)
            .join('')}

            ${store.getState().map((todo) => `<li>${todo}</li>`).join('')}
 
   */
// storeTwo.data.todos.push('Take a nap... App.js')
// storeTwo.data.todos.push('Take a nap... App.js')

// storeTwo.data.todos.push('app')
// storeTwo.data.todos.push('ap')

// store.get('total')

export default App

store.dispatch({
    type: 'ADD_TODO',
    text: 'App.js - 78945621',
})

/* 

        ${MyComponent({ bar: 987 })}  
 

*/

/* 

// creating customEvent - 'cccp'
// iCreateElement({ id: 'elemm', tag: 'button', inner: 'elemm' })
let event = new Event('cccp')
document.addEventListener('cccp', () => alert('is cccp'))

document.getElementById('elemm').addEventListener('click', (ev) => {
    document.dispatchEvent(event)
})

// old App

`
        ${MyComponent({ foo: 'fofofo', color: 'success' })}
        <div onclick="msg()" class="badge badge-primary">
            Hello, world!
        </div>
        ${MyComponent({ bar: 'brbrbr' })}
        <div id="d_897123">
            d_897123
        </div>
        ${MyComponent({ bar: 'brbrbr' })}
        ${MyComponent({ bar: 'brbrbr', color: 'danger' })}
        ${MyComponent({ bar: 'brbrbr' })}
        <br />
        <button id="d_213342">
            btn 645123
        </button>
        <br />
        <button
            id="elem2"
            class="btn btn-info"
        >
            Autoclick 111
            ${MyComponent({ bar: 'brbrbr' })}
        </button>
`
        
  */
