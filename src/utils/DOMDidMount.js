/** @module utils_DOMDidMount */

import { keyboardEventListener } from './keyboardEventListener'
import { calcFeaturesLogic } from './calcFeaturesLogic'

/**
 * Return eventListener -DOMContentLoaded- for window obj. The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
 * @function DOMDidMount
 * @returns {EventListener} EventListener which call all special scripts after DOMDidMount
 * @example
 * // keyboardEventListener(); calcFeaturesLogic()
 * DOMDidMount()
 */
export const DOMDidMount = () =>
    window.addEventListener('DOMContentLoaded', () => {
        keyboardEventListener()
        calcFeaturesLogic()
    })
