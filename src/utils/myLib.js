import iCreateElement from '../utils/iCreateElement'
// import { store } from '../store'
import { store } from '../app/store'

import { addButtonValueToScreen } from '../features/buttonToDisplay/buttonToDisplaySlice'
// define own lib

const rnd = () => Math.floor(Math.random() * 20)

const myLib = {
    // iRnd: () => alert(Math.random()),
    iRnd: () => alert(store.getState().buttonToDisplay.displayData),
    create: iCreateElement,
    // strTest: store.data.todos.push('ap'),
    // strTest: () => console.log(222, ' - hi -')
    strTest: () => iCreateElement({}),
    doRdx: (nmbr = 123123123) => {
        // console.log('nmbr is: ', nmbr)
        // const rnd = () => Math.floor(Math.random() * 20)
        store.dispatch({
            type: 'ADD_TODO',
            text: `myLib.js - ${nmbr.trim()} ~> ${rnd()}`,
        })
    },
    // btnToDspl: val => store.dispatch(addButtonValueToScreen(val)),
    buttonToDisplay: {
        btnToDspl: val => store.dispatch(addButtonValueToScreen(val)),
    }
}

export default (window.myLib = myLib)
