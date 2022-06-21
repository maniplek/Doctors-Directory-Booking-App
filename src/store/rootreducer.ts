import { combineReducers } from "redux";
import appointReducer from "./appointReducer";
import reducer from "./reducer";


const rootReducer = combineReducers ({reducer:reducer, appointment: appointReducer})

export default rootReducer