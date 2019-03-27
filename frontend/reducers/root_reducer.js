import { combineReducers } from "redux";
import entities from "./entities_reducer";
import { session } from "./session_reducer";
import {errors} from './errors_reducer'

const RootReducer = combineReducers({
    //unexplicity explicit (bc I export defaulted them)
    entities: entities,
    session: session,
    errors: errors
})

export default RootReducer