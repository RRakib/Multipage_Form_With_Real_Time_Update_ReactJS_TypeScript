import {Action} from "./IMainReducer"
import {InitialState} from "./IMainReducer"

const initialState: InitialState = {
    age: '',
    lastName: '',
    firstName: '',
    middleName: '',
    university: '',
    profession : '',
    github : '',
    yOe : ''
}

const mainReducer = (state = initialState , action : Action) => {
    switch (action.type){
        case "STORE_DATA":
            state = action.payload
            return state
        default:
            return state
    }
}

export default mainReducer