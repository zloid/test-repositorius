import iCreateElement from '../utils/iCreateElement'

import { store } from '../app/store'
// RTK action
import { addButtonValueToScreen } from '../features/buttonToDisplay/buttonToDisplaySlice'

// define own lib
const rnd = () => Math.floor(Math.random() * 20)

const myLib = {
    iRnd: () => alert(store.getState().buttonToDisplay.displayData),
    create: iCreateElement,
    strTest: () => iCreateElement({}),
    doRdx: (nmbr = 123123123) => {
        store.dispatch({
            type: 'ADD_TODO',
            text: `myLib.js - ${nmbr.trim()} ~> ${rnd()}`,
        })
    },
    buttonToDisplay: {
        btnToDspl: val => store.dispatch(addButtonValueToScreen(val)),
        clearAll: () => console.log('9898989898989clearAll::: test')
    }
}

export default (window.myLib = myLib)
