/** @module utils-mapAllDispatch */

import store from '../app/store'
// RTK action
import {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} from '../features/buttonToDisplay/buttonToDisplaySlice'

// define own lib
/** @class Connect
 * library for compose RTK actions
 * @returns {Object} collection of all dispathes needs for App
 */
// class for creating Singleton
class Connect {
    buttonToDisplay = {
        getBtnValue: (payload) =>
            store.dispatch(addButtonValueToScreen(payload)),
        clearAll: () => store.dispatch(clearAllFromCalcScreen()),
        doEqual: () => store.dispatch(doEqual()),
    }
    constructor() {
        // reference on the instance, we can check whether or not we’ve already instantiated a Connect, and if we have, we won’t create a new one.
        if (!Connect.mapAllDispatch) {
            Connect.mapAllDispatch = this
        }
        return Connect.mapAllDispatch
    }
}
// Singleton
const mapAllDispatch = new Connect()
Object.freeze(mapAllDispatch)

export default window.mapAllDispatch = mapAllDispatch
