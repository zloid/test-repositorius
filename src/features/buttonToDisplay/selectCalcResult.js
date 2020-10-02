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

export default ({ displayData }) => {
    // error handler for getting quick answer
    if (/error|nan/i.test(displayData)) {
        return 'Error'
    }
    // infinity handler for getting quick answer
    if (/^-*\s*infinity$/i.test(displayData)) {
        return displayData
    }

    /**
     * For handle of early data
     * @param {string} data - from state
     * @example
     * // '0 - 8'
     * correctBeginOfSingleNegativeNmbr('- 8')
     */
    function correctBeginOfSingleNegativeNmbr(data) {
        return data.replace(/^-\s*(\d*)/, '0 - $1')
    }

    /**
     * For convert input sting to specific arrays of numbers and strings (operators and operands)
     * @param {string} data - from state
     * @returns {Array<string|number>}
     * @example
     * // [2, '+', 225]
     * turnDisplayDataToArray('2 + 225')
     */
    function turnDisplayDataToArray(data) {
        const outputData = data.split(' ').map((e) => {
            if (/\d/.test(e)) {
                return Number(e)
            }
            return e
        })
        return outputData
    }

    displayData = correctBeginOfSingleNegativeNmbr(displayData)
    displayData = turnDisplayDataToArray(displayData)

    // multiplication and division logic
    // [9, '*', 4] ~> [null, null, 36]
    // [9, '÷', 4] ~> [null, null, 2.25]
    displayData.forEach((element, index) => {
        if (element === '*') {
            displayData[index + 1] =
                displayData[index - 1] * displayData[index + 1]
            displayData[index] = null
            displayData[index - 1] = null
        }
        if (element === '÷') {
            displayData[index + 1] =
                displayData[index - 1] / displayData[index + 1]
            displayData[index] = null
            displayData[index - 1] = null
        }
    })

    // subtraction logic
    // [null, null, 36, '-', 3] ~> [36, '-', 3]
    displayData = displayData.filter((e) => e !== null)
    // [36, '-', 3] ~> [33]
    displayData.forEach((element, index) => {
        if (element === '-') {
            displayData[index + 1] =
                displayData[index - 1] - displayData[index + 1]
            displayData[index] = null
            displayData[index - 1] = null
        }
    })
    // addition logic
    // [null, 2, '+', 225] ~> [2, 225]
    // [null, null, 36] ~> [36]
    const getAllNumbersForAddition = displayData.filter(
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
    // const finalResult = additionResult.replace(/^-(\s*)+/g, '- $1')

    // 'NaN' ~> 'Error'
    if (/nan/gi.test(finalResult)) {
        return 'Error'
    }

    return finalResult
    // return String(additionResult)
}
