/** @module utils-myLib */

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
 * @date 2020-10-7
 * @returns {Object} window.object
 */

const myLib = {
    buttonToDisplay: {
        btnToDspl: (payload) =>
            store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: () => store.dispatch(doEqual()),
    },
}

export default window.myLib = myLib