import {createStore} from "redux"
import RootReducer from "./Reducers/rootReducers"

const store = createStore(
    RootReducer
)

export default store