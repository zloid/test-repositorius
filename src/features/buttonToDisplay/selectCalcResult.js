/** @module selector-selectCalcResult */

/**
 * For getting calc result, main logic
 * @function selectCalcResult
 * @date 2020-09-15
 * @param {object} state - Redux state
 * @param {string} state.displayData - data from calc screen, f.e. '2 + 456 * 9', spaces are required
 * @returns {string} result of calculation
 * @example
 * // returns: '229'
 * selectCalcResult({displayData: '2 + 225 + 2'})
 * @example
 * // returns: 'Error'
 * selectCalcResult({displayData: '0 ÷ 0'})
 */
export default (state) => {
    // todo
    console.log(state.displayData)

    if (/error/gi.test(state.displayData)) {
        return 'Error'
    }

    // todo
    //'^-3' ~> '0 - 3'
    // inp = inp.replace(/^-(\d*)/, '0 - $1')

    // let beginDataSubstract = state.displayData().replace(/^-(\d*)/, '0 - $1')
    // todo
    // '- 8' ~> '0 - 8'
    const beginDataSubstract = state.displayData.replace(/^-\s*(\d*)/, '0 - $1')
    // console.log('beginDataSubstract::: ', beginDataSubstract)

    // initial
    // '2 + 225' ~> [2, '+', 225]
    let displayDataToArray = beginDataSubstract.split(' ').map((e) => {
        if (/\d/.test(e)) {
            return Number(e)
        }
        return e
    })

    // multiplication and division logic
    // [9, '*', 4] ~> [null, null, 36]
    // [9, '÷', 4] ~> [null, null, 2.25]
    displayDataToArray.forEach((element, index) => {
        if (element === '*') {
            displayDataToArray[index + 1] =
                displayDataToArray[index - 1] * displayDataToArray[index + 1]
            displayDataToArray[index] = null
            displayDataToArray[index - 1] = null
        }
        if (element === '÷') {
            displayDataToArray[index + 1] =
                displayDataToArray[index - 1] / displayDataToArray[index + 1]
            displayDataToArray[index] = null
            displayDataToArray[index - 1] = null
        }
    })

    // subtraction logic
    // [null, null, 36, '-', 3] ~> [36, '-', 3]
    displayDataToArray = displayDataToArray.filter((e) => e !== null)
    // [36, '-', 3] ~> [33]
    displayDataToArray.forEach((element, index) => {
        if (element === '-') {
            displayDataToArray[index + 1] =
                displayDataToArray[index - 1] - displayDataToArray[index + 1]
            displayDataToArray[index] = null
            displayDataToArray[index - 1] = null
        }
    })

    // addition logic
    // [null, 2, '+', 225] ~> [2, 225]
    // [null, null, 36] ~> [36]
    const getAllNumbersForAddition = displayDataToArray.filter(
        (e) => typeof e === 'number'
    )
    // [2, 225] ~> 227
    // [36] ~> 36
    let additionResult = getAllNumbersForAddition.reduce(
        (accum, currentVal) => accum + currentVal
    )

    // avoid 0.1 + 0.2
    // additionResult = parseFloat(additionResult.toFixed(15))
    additionResult = parseFloat(additionResult.toFixed(11))

    // todo
    // -8 ~> '-8' ~> '- 8'
    const finalResult = String(additionResult).replace(/^-(\s*)+/g, '- $1')

    // 'NaN' ~> 'Error'
    if (/nan/gi.test(finalResult)) {
        return 'Error'
    }

    return finalResult
    // return String(additionResult)
}
