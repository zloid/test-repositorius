import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // displayData: ['0'],
    displayData: '0',
}

const regExpForGoodDisplay = str => {
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

// function prettyString(notPrettyString) {
//     switch (true) {
//         case /\*/i.test(notPrettyString):
//             return '*'
//         case /\./i.test(notPrettyString):
//             return '.'

//         default:
//             console.log(Number(notPrettyString))
//             return Number(notPrettyString).toString()
//     }
// }

function prettyString(notPrettyString) {
    return notPrettyString.trim()
}

const buttonToDisplaySlice = createSlice({
    name: 'digitalsDisplay',
    initialState,
    reducers: {
        addButtonValueToScreen: {
            reducer: (state, action) => {
                // state.displayData.push(action.payload)
                // state.displayData = action.payload
                state.displayData = regExpForGoodDisplay(
                    state.displayData + action.payload
                )
            },
            prepare: payload => {
                // prettyString(payload)
                console.log(payload)
                payload = payload.trim()

                return {
                    payload,
                }
            },
        },
    },
})

export const { addButtonValueToScreen } = buttonToDisplaySlice.actions

export default buttonToDisplaySlice.reducer
