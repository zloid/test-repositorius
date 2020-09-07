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
export default function (state, payload) {
    const oldWithNewScreenData = state.displayData + payload.trim()
    // const regExpForGoodDisplay = (str) => {
    let middleStr = oldWithNewScreenData

    // todo
    /* 
    if ((/error/ig).test(middleStr)) {
        middleStr.replace(/[error]/ig, '')
    }
     */

    // 'error' ~> ''
    middleStr = middleStr.replace(/error/gi, '')

    //begin > 00 > 0
    middleStr = middleStr.replace(/^0+/, '0')
    //begin > 02 > 0
    middleStr = middleStr.replace(/^0(\d|[(])/, '$1')
    //begin > 012 > 12; + 02 > + 2
    middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')

    //++ -- ÷÷ *** +-÷  > + - * ÷
    // '+5' ~> '+ 5'
    middleStr = middleStr.replace(
        /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
        ' $1 '
    )
    //++ -- ÷÷ *** +-÷  > + - * ÷
    // '+5' ~> '+ 5'
    // middleStr = middleStr.replace(
    //     /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
    //     ' $1 '
    // )

    //.... > . > (( > ( > )) > )
    middleStr = middleStr.replace(/(\.|\(|\))+/g, '$1')
    //begin > ) > (
    middleStr = middleStr.replace(/^0\)/, '(')
    //() > ' '
    // middleStr = middleStr.replace(/\(\)/, ' ');
    //431.55.66 + 1.2.3 > 431.5566 + 1.23
    middleStr = middleStr.replace(/(\d+\.\d+)\./g, '$1')
    //.7 > 0.7
    middleStr = middleStr.replace(/[^\d]\./, ' 0.')
    middleStr = middleStr.replace(/^\./, '0.')
    // todo 7. + > 7 +
    middleStr = middleStr.replace(/([\d])\.\s/g, '$1 ')
    // '' * 5 > 5 * 5  ; ÷ 5 > 5 ÷ 5
    middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2')
    // '    ' -> ' '
    middleStr = middleStr.replace(/\s{2}/g, ' ')
    return middleStr
    // }
}
