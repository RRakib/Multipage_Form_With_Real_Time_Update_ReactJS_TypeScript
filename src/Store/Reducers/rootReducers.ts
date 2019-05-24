import {combineReducers} from "redux"
import mainReducer from "./mainReducer"

const RootReducer = combineReducers({
    mainStore : mainReducer
})

export default RootReducer