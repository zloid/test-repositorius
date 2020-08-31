import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit'
import buttonToDisplayReducer from '../features/buttonToDisplay/buttonToDisplaySlice'

// import { testReducer } from '../app/store'
/* 
const someReducer = (state = ['foo'], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}
 */

const addTodo = createAction('ADD_TODO')

const initialState = { foo: 'bar', defaultArray: ['abr', 'vlg'] }

export const modernReducer = createReducer(initialState, {
    [addTodo.type]: (state, action) => {
        // console.log(action.text)
        state.foo = Math.random()
        state.defaultArray.push(action.text)
    },
})

const rootReducer = combineReducers({
    modernReducer,
    buttonToDisplay: buttonToDisplayReducer,
})

export default rootReducer
