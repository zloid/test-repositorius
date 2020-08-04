import Reef from 'reefjs'
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer, { modernReducer } from './rootReducer'

// todo
/* export const testReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
} */

// todo Redux store
// export const store = createStore(testReducer)

// todo RTK
export const store = configureStore({
    // reducer: testReducer,
    reducer: rootReducer,
})

// console.log('store.getState --> ', store.getState())

// console.log('rootReducer: ', rootReducer)
// console.log('modernReducer: ', modernReducer)
// console.log('store.state~>: ', store.getState())
 

// console.log('store.state~>: ', store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs',
})

// console.log('store.state~>: ', store.getState().join(''))

store.dispatch({
    type: 'ADD_TODO',
    text: 'store.js 987654 tst',
})

// console.log('store.state~>: ', store.getState())

/* 
store.subscribe(() => {
    console.log(store.getState())

    myStore = store.getState()
    
}) */

// todo
// creating reefjs's sharing state

/* 
let myStore = store.getState()
export const storeTwo = new Reef.Store({
    data: {
        heading: 'My Todos',
        todos: ['Swim', 'Climb', 'Jump', 'Play'],
        tsttt: 'my tstatstst',
        store: myStore,
    },
    getters: {
        total: props => {
            console.log("whole store's data: ", props)
            console.log("all sore's keys: ")
            for (let k in props) {
                console.log(k)
            }
        },
    },
})
 */