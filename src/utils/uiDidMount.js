/** @module utils-uiDidMount */

import keyboardEventListener from './keyboardEventListener'
import calcFeaturesLogic from './calcFeaturesLogic'

/**
 * Must be called when UI did first mount
 * @function uiDidMount
 * @returns {void} call all special scripts after ui did first render
 * @example
 * // keyboardEventListener(); calcFeaturesLogic()
 * uiDidMount()
 */
export const uiDidMount = () => {
    keyboardEventListener()
    calcFeaturesLogic()
}