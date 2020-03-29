import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";
import {recPassReducer} from "./RecoveryPass/bll/recPassReducer";

const reducers=combineReducers({
    // logIn:logInReducer,
    regIn:regInReducer,
    recPass:recPassReducer,
    // newPas:newPasReducer,
    // profile:profileReducer
})



const store=createStore(reducers,applyMiddleware(thunkMiddleware))
export  default store