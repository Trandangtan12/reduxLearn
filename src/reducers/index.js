import { combineReducers } from 'redux'
import counterReducer from './counter'
import productReducer from './product'

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
})

export default rootReducer
