import Reef from 'reefjs'
import { createStore } from 'redux'

// todo
const initialState = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}

// todo
export const store = createStore(initialState)
console.log('store.state~>: ', store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs',
})

console.log('store.state~>: ', store.getState())

store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs',
})

console.log('store.state~>: ', store.getState().join(''))

store.dispatch({
    type: 'ADD_TODO',
    text: 'store.js 987654 tst',
})

console.log('store.state~>: ', store.getState())

let myStore = store.getState()

store.subscribe(() => {
    console.log(store.getState())

    myStore = store.getState()





    
})

// todo
// creating reefjs's sharing state
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
