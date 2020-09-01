import { createSlice } from '@reduxjs/toolkit'
import selectCorrectRegExpForCalcScreen from './selectCorrectRegExpForCalcScreen'

const initialState = {
    displayData: '0',
}

const buttonToDisplaySlice = createSlice({
    name: 'digitalsDisplay',
    initialState,
    reducers: {
        addButtonValueToScreen(state, action) {
            /* todo
            state.displayData = regExpForGoodDisplay(
                state.displayData + payload
            )
             */
            state.displayData = selectCorrectRegExpForCalcScreen(
                state,
                action.payload
            )
        },
        clearAllFromCalcScreen(state) {
            state.displayData = '0'
        },
        doEqual(state, action) {
            selectCalcResult(state)
            // state.displayData = selectCalcResult(state)
        },
    },
})

function selectCalcResult(state) {
    console.log('12312345::: ', state.displayData.split(' '))
    // console.log('87954::: ', payload)

    // '2 + 225' ~> [2, '+', 225]
    const displayDataToArray = state.displayData.split(' ').map((e) => {
        if (/\d/.test(e)) {
            return Number(e)
        }
        return e
    })

    // addition logic
    // [2, '+', 225] ~> [2, 225]
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
    console.log('31867::: ', getAllNumbersForAddition)
    console.log('31867::: additionResult ', additionResult)

    // todo
    return (state.displayData = additionResult)
}

export const {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} = buttonToDisplaySlice.actions

export default buttonToDisplaySlice.reducer
