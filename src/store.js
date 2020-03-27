import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";

const reducers=combineReducers({
    logIn:logInReducer,
    regIn:regInReducer,
    recPas:recPasReducer,
    newPas:newPasReducer,
    profile:profileReducer
})



const store=createStore(reducers,applyMiddleware(thunkMiddleware))
export  default store