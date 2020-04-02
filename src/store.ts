import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {regInReducer} from "./regInReducer";
import {recPassReducer} from "./RecoveryPass/bll/recPassReducer";
import {newPassReducer} from "./NewPass/bll/newPassReducer";
import logInReducer from "./Login/login-reducer";

const rootReducer = combineReducers({
    logIn: logInReducer,
    regIn: regInReducer,
    recPass: recPassReducer,
    newPass: newPassReducer,
    // profile:profileReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store