import { createSlice } from '@reduxjs/toolkit'
import { selectCorrectRegExpForCalcScreen } from './selectCorrectRegExpForCalcScreen'
import { selectCalcResult } from './selectCalcResult'

const initialState = {
    displayData: '0',
}

const buttonToDisplaySlice = createSlice({
    name: 'digitalsDisplay',
    initialState,
    reducers: {
        addButtonValueToScreen(state, { payload }) {
            state.displayData = selectCorrectRegExpForCalcScreen(state, payload)
        },
        clearAllFromCalcScreen(state) {
            state.displayData = '0'
        },
        doEqual(state) {
            state.displayData = selectCalcResult(state)
        },
    },
})

export const {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} = buttonToDisplaySlice.actions

export default buttonToDisplaySlice.reducer
