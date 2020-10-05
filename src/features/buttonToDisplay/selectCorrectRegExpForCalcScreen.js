/** @module selector-selectCorrectRegExpForCalcScreen */

/**
 * For transpile any string to correct data for calculator screen
 * @function selectCorrectRegExpForCalcScreen
 * @date 2020-09-30
 * @param {{displayData: ''}} state - RTK state.displayData
 * @param {string} payload - action.payload, string for RegExp
 * @returns {string}
 * @example
 * //returns: '0.1 + 2214 * 21'
 *  selectCorrectRegExpForCalcScreen({displayData: '0'}, '   0.....1 ++ 2214 *** 21   ')
 */
export const selectCorrectRegExpForCalcScreen = (
    state = { displayData: '' },
    payload = ''
) => {
    let middleStr = state.displayData.trim() + payload.trim()

    switch (true) {
        case middleStr === '':
            return '0'
        case /infinity\d/i.test(middleStr):
            middleStr = middleStr.replace(/(-*\s*infinity)\d/i, '$1')
        case /error[a-z]/i.test(middleStr):
            // 'errorabc7' ~> '0'
            return middleStr.replace(/error\w*/gi, '0')
        case /error/i.test(middleStr):
            // 'error123' ~> '123'
            // 'error' ~> ''
            return middleStr.replace(/error/gi, '')
        case /e - /.test(middleStr):
            // '8.1e - 9' ~> '8.1e-9'
            middleStr = middleStr.replace(/e - /gi, 'e-')
        case /[a-z]/gi.test(middleStr):
            // '0.1e-9' match exponential
            const regExp = /\d*\.*\de-\d+/
            // only words matching
            const regExpTwo = /\s*[a-z]+\d*/gi
            // if exponential number exist, f.e.'0.1e-9'
            if (regExp.test(middleStr)) {
                // take expotential f.e.'0.1e-9'
                const expl = middleStr.match(regExp).join('')
                middleStr = middleStr.replace(regExp, '##%#')
                // safe -Infinity-
                middleStr = middleStr.replace(/infinity/gi, '%%#%')
                // clear screen from unusual words
                middleStr = middleStr.replace(regExpTwo, '')
                // return expotential
                middleStr = middleStr.replace(/##%#/, expl)
                // return -Infinity-
                middleStr = middleStr.replace(/%%#%/gi, 'Infinity')
            } else {
                // safe -Infinity-
                middleStr = middleStr.replace(/infinity/gi, '%%#%')
                // clear screen from unusual words
                // '1.1 + 1 / meow + 4 meow4 blah' ~> '1.1 + 1 /  + 4  '
                middleStr = middleStr.replace(regExpTwo, '')
                // return -Infinity-
                middleStr = middleStr.replace(/%%#%/gi, 'Infinity')
            }
            
        case /[\/]/.test(middleStr):
            // '/' ~> '÷'
            middleStr = middleStr.replace(/[\/]/g, '÷')
        case /\,/.test(middleStr):
            // ',' ~> '.'
            middleStr = middleStr.replace(/\,/g, '.')
        case /^0+/.test(middleStr):
            // '0000' ~> '0'
            middleStr = middleStr.replace(/^0+/, '0')
        // return middleStr.replace(/^0+/, '0')
        case /^0(\d|[(])/.test(middleStr):
            // '0000002' ~> '0'
            middleStr = middleStr.replace(/^0(\d|[(])/, '$1')
        case /([+-]|÷|\*)\s*0(\d)/.test(middleStr):
            // '012' ~> '12'; '+ 02' ~> '+ 2'; same for -*÷
            middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')
        case /^\s*(\*|÷)\s*(\d+)/.test(middleStr):
            // '^ * 5' ~> '^5 * 5' ; '^ ÷ 5' ~> '^5 ÷ 5'
            middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2')
        case /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/.test(middleStr):
            // '++ -- ÷÷ *** +-÷'  ~> '+ - * ÷'
            // '+5' ~> '+ 5'
            middleStr = middleStr.replace(
                /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
                ' $1 '
            )
        case /(\.|\(|\))+/.test(middleStr):
            // '....' ~> '.' ; '((' ~> '(' ; '))' ~> ')'
            middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1')
        /*
        case /^0\)/.test(middleStr):
            // '^0)' ~> '^('
            middleStr = middleStr.replace(/^0\)/, '(')
        */
        case /(\d+\.\d+)\./.test(middleStr):
            //'431.55.66 + 1.2.3' ~> '431.5566 + 1.23'
            middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1')
        case /^\./.test(middleStr):
            // '^.7' ~> '0.7' ; '^.' ~> '0.'
            middleStr = middleStr.replace(/^\./, '0.')
        case /[^\d]\./.test(middleStr):
            // '0.7 + .123 - .5 / .8' ~> '0.7 + 0.123 - 0.5 ÷ 0.8'
            middleStr = middleStr.replace(/[^\d]\./g, ' 0.')
        case /([\d])\.\s/.test(middleStr):
            //  '7. + 1' ~> '7 + 1'; '7. + 32. - 5.' ~> '7 + 32 - 5.'
            middleStr = middleStr.replace(/([\d])\.\s/g, '$1 ')
        case /\s{2}/.test(middleStr):
            // '1     +    2    ' ~> '1 + 2'
            middleStr = middleStr.replace(/\s{2}/g, ' ')

        case /e - /.test(middleStr):
            // '8.1e - 9' ~> '8.1e-9'
            middleStr = middleStr.replace(/e - /gi, 'e-')
        case /infinit[y]*\s*\d*\./i.test(middleStr):
            // '- Infinit 0.' ~> '- Infinity'; 'Infinity.' ~> 'Infinity'
            middleStr = middleStr.replace(/(-*\s*)infinit[y]*\s*\d*\./ig, '$1Infinity')
        default:
            break
    }

    // todo ?
    // 1000_000 ~> 1000000

    return middleStr
}
