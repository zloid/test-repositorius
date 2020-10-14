/** @module utils-myLib */

import store from '../app/store'
// RTK action
import {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} from '../features/buttonToDisplay/buttonToDisplaySlice'

// define own lib
/** @class ConnectDispatch
 * library for compose RTK actions
 * @returns {Object} collection of all dispathes needs for App
 */
/* 
const myLib = {
    buttonToDisplay: {
        btnToDspl: (payload) =>
            store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: () => store.dispatch(doEqual()),
    },
}
 */
// class for creating Singleton
class ConnectDispatch {
    buttonToDisplay = {
        btnToDspl: (payload) => store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: () => store.dispatch(doEqual()),
    }
    constructor() {
        // reference on the instance, we can check whether or not we’ve already instantiated a ConnectDispatch, and if we have, we won’t create a new one.
        if (!ConnectDispatch.myLib) {
            ConnectDispatch.myLib = this
        }

        return ConnectDispatch.myLib
    }
}

const myLib = new ConnectDispatch()
Object.freeze(myLib)

export default window.myLib = myLib
