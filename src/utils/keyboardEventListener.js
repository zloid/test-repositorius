/** @module utils-keyboardEventListener */

// todo
/**
 * keydown events handler, keyboard to screen
 * @date 2020-09-10
 * @param {any} "keydown"
 * @param {any} 'event'
 * @returns {void}
 */
export default () =>
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
