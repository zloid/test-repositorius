import { combineReducers } from '@reduxjs/toolkit'
import buttonToDisplayReducer from '../features/buttonToDisplay/buttonToDisplaySlice'

const rootReducer = combineReducers({
    buttonToDisplay: buttonToDisplayReducer,
})

export default rootReducer
