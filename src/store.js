import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";
import {recPassReducer} from "./RecoveryPass/bll/recPassReducer";
import {newPassReducer} from "./NewPass/bll/newPassReducer";
// import logInReducer from "./Login/login-reducer";

const reducers=combineReducers({
    // logIn:logInReducer,
    regIn:regInReducer,
    recPass:recPassReducer,
    newPass:newPassReducer,
    // profile:profileReducer
})



const store=createStore(reducers,applyMiddleware(thunkMiddleware))
export  default store