/** @module selector-selectCalcResult */

/**
 * For getting calc result, main logic
 * @function selectCalcResult
 * @date 2020-09-02
 * @param {{displayData: ''}} state - RTK state.displayData
 * @returns {number} result of calculation
 * @example
 * // returns: 229
 * selectCalcResult({displayData: '2 + 225 + 2'})
 */
export default function (state) {
    // initial
    // '2 + 225' ~> [2, '+', 225]
    let displayDataToArray = state.displayData.split(' ').map((e) => {
        if (/\d/.test(e)) {
            return Number(e)
        }
        return e
    })

    // multiplication logic
    // [9, '*', 4] ~> [null, null, 36]
    displayDataToArray.forEach((element, index) => {
        // todo
        // if (element === '*') {
        //     displayDataToArray[index + 1] = displayDataToArray[index + 1] * displayDataToArray[index - 1]
        //     displayDataToArray[index - 1] = null
        //     displayDataToArray[index] = null
        // }
        
        if (element === '*') {
            displayDataToArray[index + 1] =
                displayDataToArray[index + 1] * displayDataToArray[index - 1]
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

    /* 
    displayDataToArray.forEach((element, index) => {
        switch (true) {
            // multiplication logic
            // [9, '*', 4] ~> [null, null, 36]
            case element === '÷':
                displayDataToArray[index + 1] = displayDataToArray[index - 1] / displayDataToArray[index + 1]
                displayDataToArray[index - 1] = element = null
                        case element === '*':
                            displayDataToArray[index + 1] *= displayDataToArray[index - 1]
                            displayDataToArray[index - 1] = element = null
             
        }
    })
 */

    // addition logic
    // [2, '+', 225] ~> [2, 225]
    // [null, null, 36] ~> [36]
    const getAllNumbersForAddition = displayDataToArray.filter(
        (e) => typeof e === 'number'
    )
    // [2, 225] ~> 227
    const additionResult = getAllNumbersForAddition.reduce(
        (accum, currentVal) => accum + currentVal
    )

    // todo
    // console.log('987564::: ', state.displayData.split(''))
    console.log('21867::: ', displayDataToArray)
    // console.log('213584::: ', getAllNumbersForAddition)
    console.log('31867::: additionResult ', additionResult)

    // todo
    // return (state.displayData = additionResult)
    return additionResult
}
