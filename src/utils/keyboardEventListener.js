/** @module utils-keyboardEventListener */

// todo
/**
 * Function which returns keydown events handler, catching keyboard and write to screen
 * @function keyboardEventListener
 * @date 2020-09-15
 * @returns {document.addEventListener('keydown', listener)}  EventListener for catching Keyboard and NumPad buttons:  1234567890.,+-*÷ enter delete; and ignoring all f-buttons on keyboard
 * @example
 * // click on keyboard -5- ~> show '5' on screen
 * // click on keyboard -*- ~> show '*' on screen
 * // click on keyboard -enter- ~> do calc Equal
 * // click on keyboard -delete- ~> clear calc screen
 * // click on keyboard -f5- ~> usual OS behavior, nothing for calc
 * keyboardEventListener()
 */
export default () => {
    document.addEventListener(
        'keydown',
        (event) => {
            if (event.defaultPrevented || /f[0-9]/gi.test(event.key)) {
                return // Do nothing if the event was already processed or pressing some -F- function buttons
            }

            switch (true) {
                case /[0-9|+|\-|/|\*|\.|\,]/.test(event.key):
                    window.myLib.buttonToDisplay.btnToDspl(event.key)
                    break
                case /enter/gi.test(event.key):
                    window.myLib.buttonToDisplay.doEqual()
                    break
                case /delete|backspace/gi.test(event.key):
                    window.myLib.buttonToDisplay.clearAll()
                    break
                default:
                    return // Quit when this doesn't handle the key event.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault()
        },
        true
    )
    // for UI, to avoid undefined
    return ''
}
