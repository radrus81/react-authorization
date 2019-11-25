import { combineReducers } from 'redux'
import authorization from './authorizationReducer'


export default combineReducers({
    authorization: authorization
})