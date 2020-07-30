import iCreateElement from '../utils/iCreateElement'
import { store } from '../store'
// define own lib

const myLib = {
    iRnd: () => alert(Math.random()),
    create: iCreateElement,
    // strTest: store.data.todos.push('ap'),
    // strTest: () => console.log(222, ' - hi -')
    strTest: () => iCreateElement({}),
    doRdx: (nmbr = 123123123) => {
        // doRdx()
         console.log(nmbr)

         store.dispatch({
             type: 'ADD_TODO',
             text: `myLib.js - ${nmbr.trim()}`,
         })
        //  console.log(store.getState())
    },
}

function doRdx(nmbr = 999666) {
    console.log(nmbr)
    console.log(store.getState())

    store.dispatch({
        type: 'ADD_TODO',
        text: `myLib.js - ${nmbr}`,
    })
}

console.log(77654)
// store.data.todos.push('app')

export default (window.myLib = myLib)
