import { createSlice } from '@reduxjs/toolkit'
import selectCorrectRegExpForCalcScreen from './selectCorrectRegExpForCalcScreen'

const initialState = {
    displayData: '0',
}

/* 
const regExpForGoodDisplay = (str) => {
    // return str + 'dsa'
    let middleStr
    middleStr = str
    //begin > 00 > 0
    middleStr = middleStr.replace(/^0+/, '0')
    //begin > 02 > 0
    middleStr = middleStr.replace(/^0(\d|[(])/, '$1')
    //begin > 012 > 12; + 02 > + 2
    middleStr = middleStr.replace(/([+-]|÷|\*)\s*0(\d)/, '$1 $2')
    //++ -- ÷÷ *** +-÷  > + - * ÷
    middleStr = middleStr.replace(
        /(\s*\+\s*|\s*-\s*|\s*÷\s*|\s*\*\s*)+/g,
        ' $1 '
    )
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
    middleStr = middleStr.replace(/^\s*(\*|÷)\s*(\d+)/, '$2 $1 $2 ')
    // '    ' -> ' '
    middleStr = middleStr.replace(/\s{2}/g, ' ')
    return middleStr
}
 */

const buttonToDisplaySlice = createSlice({
    name: 'digitalsDisplay',
    initialState,
    reducers: {
        /*
        addButtonValueToScreen: {
            reducer: (state, action) => {
                // state.displayData.push(action.payload)
                // state.displayData = action.payload
                state.displayData = regExpForGoodDisplay(
                    state.displayData + action.payload
                )
            },
            prepare: (payload) => {
                // console.log(payload)
                //  payload = payload.trim()

                // return {
                //     payload,
                // } 
                return {
                    payload: payload.trim()
                }
            },
        },
*/

        addButtonValueToScreen(state, action) {
            // example: '   4   ' ~> '4'
            // example: '   +   ' ~> '+'
            // const payload = action.payload.trim()
            // run regExp for correct calc screen data
            // example: '++++' ~> '+'
            // example: '7....' ~> '7.'
            state.displayData = selectCorrectRegExpForCalcScreen(
                state,
                action.payload
            )

            /* 
            state.displayData = regExpForGoodDisplay(
                state.displayData + payload
            )
             */
        },
        clearAllFromCalcScreen(state) {
            state.displayData = '0'
        },
        doEqual(state, action) {
            console.log('12312345::: ', state.displayData.split(' '))
            console.log('87954::: ', action.payload)
        },
    },
})

export const {
    addButtonValueToScreen,
    clearAllFromCalcScreen,
    doEqual,
} = buttonToDisplaySlice.actions

export default buttonToDisplaySlice.reducer
