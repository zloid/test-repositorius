/** @module utils-uiDidMount */

import keyboardEventListener from './keyboardEventListener'
import calcFeaturesLogic from './calcFeaturesLogic'

/**
 * Must be called when UI did first mount
 * @date 2020-09-20
 * @returns {void} call all callbacks after ui did first render
 */

const uiDidMount = () => {
    keyboardEventListener()
    calcFeaturesLogic()
}

export default uiDidMount
