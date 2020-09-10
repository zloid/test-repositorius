/** @module utils-myLib */
import iCreateElement from '../utils/iCreateElement'

import store from '../app/store'
// RTK action
import {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} from '../features/buttonToDisplay/buttonToDisplaySlice'

// define own lib
/**
 * library for compose RTK actions
 * @date 2020-09-10
 * @returns {object} window.object
 */
const rnd = () => Math.floor(Math.random() * 20)

const myLib = {
    // todo
    iRnd: () => alert(store.getState().buttonToDisplay.displayData),
    // todo
    create: iCreateElement,
    strTest: () => iCreateElement({}),
    // todo
    doRdx: (nmbr = 123123123) => {
        store.dispatch({
            type: 'ADD_TODO',
            text: `myLib.js - ${nmbr.trim()} ~> ${rnd()}`,
        })
    },
    buttonToDisplay: {
        btnToDspl: (payload) => store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: () => store.dispatch(doEqual()),
    },
}

export default window.myLib = myLib
