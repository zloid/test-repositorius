import iCreateElement from '../utils/iCreateElement'

import store from '../app/store'
// RTK action
import {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} from '../features/buttonToDisplay/buttonToDisplaySlice'

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
        btnToDspl: (payload) => store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: (payload) => store.dispatch(doEqual(payload)),
    },
}

export default window.myLib = myLib
