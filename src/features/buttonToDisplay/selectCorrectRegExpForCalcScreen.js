/** @module selector-selectCorrectRegExpForCalcScreen */

/**
 * For transpile any string to correct data for calculator screen
 * @function selectCorrectRegExpForCalcScreen
 * @date 2020-09-07
 * @param {{displayData: ''}} state - RTK state.displayData
 * @param {string} payload - action.payload, string for RegExp
 * @returns {string}
 * @example
 * //returns: '0.1 + 2214 * 21'
 *  selectCorrectRegExpForCalcScreen({displayData: '0'}, '   000 00.....1 ++ 2214 *** 21   ')
 */
export default function (state = { displayData: '' }, payload = '') {
    // const oldWithNewScreenData = state.displayData.trim() + payload.trim()
    // let middleStr = oldWithNewScreenData

    let middleStr = state.displayData.trim() + payload.trim()

    switch (true) {
        case /error/i.test(middleStr):
            // 'error' ~> ''
            return middleStr.replace(/error/gi, '')
        case /\//.test(middleStr):
            // '/' ~> '÷'
            middleStr = middleStr.replace(/\//g, '÷')
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
            middleStr = middleStr.replace(/e - /g, 'e-')

        default:
            break
    }

    // todo ?
    // 1000_000 ~> 1000000

    return middleStr

    // old version
    // todo_1
    // 'error' ~> ''
    // middleStr = middleStr.replace(/error/gi, '')

    // todo_1
    // '/' ~> '÷'
    // middleStr = middleStr.replace(/\//g, '÷')

    // todo_1
    // ',' ~> '.'
    // middleStr = middleStr.replace(/\,/g, '.')

    // todo_1
    // begin > 00 > 0
    // middleStr = middleStr.replace(/^0+/, '0')

    // todo_1
    // begin > 02 > 0
    // middleStr = middleStr.replace(/^0(\d|[(])/, '$1')

    // todo_1
    // begin > 012 > 12; + 02 > + 2 || -*÷
    // middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')

    // todo_1
    // '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
    // middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2')

    // todo_1
    //++ -- ÷÷ *** +-÷  > + - * ÷
    // '+5' ~> '+ 5'
    /* 
    middleStr = middleStr.replace(
        /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
        ' $1 '
    ) 
    */

    //++ -- ÷÷ *** +-÷  > + - * ÷
    // '+5' ~> '+ 5'
    // middleStr = middleStr.replace(
    //     /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
    //     ' $1 '
    // )

    // todo_1
    // '....' ~> '.' ; '((' ~> '(' ; '))' ~> ')'
    // middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1')

    // todo_1
    //begin > ) > (
    // middleStr = middleStr.replace(/^0\)/, '(')

    //() > ' '
    // middleStr = middleStr.replace(/\(\)/, ' ');

    // todo_1
    //'431.55.66 + 1.2.3' ~> '431.5566 + 1.23'
    // middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1')

    // todo_1
    // '^.7' ~> '0.7'
    // '^.' ~> '0.'
    // middleStr = middleStr.replace(/[^\d]\./, ' 0.')
    // middleStr = middleStr.replace(/^\./, '0.')

    // todo_1
    //  '7. + 1' ~> '7 + 1'; '7. + 32. - 5.' ~> '7 + 32 - 5.'
    // middleStr = middleStr.replace(/([\d])\.\s/g, '$1 ')

    // todo_1
    // '1     +    2    ' -> '1 + 2'
    // middleStr = middleStr.replace(/\s{2}/g, ' ')

    // todo_1
    // '8.1e - 9' ~> '8.1e-9'
    // middleStr = middleStr.replace(/e - /g, 'e-')
}
