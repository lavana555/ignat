
import {apiLogin} from "./apiLogin";

export const SET_LOGIN_DATA = "logInReducer/SET_LOGIN_DATA";
export const REMEMBER_ME = "logInReducer/REMEMBER_ME";
export const ADD_TOKEN="logInReducer/ADD_TOKEN"


const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    token:''
};


const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,

            }
        }
        case REMEMBER_ME: {
            return {
                ...state,
                ...action.rememberMe
            }
        }
        case ADD_TOKEN:{
            return {
                ...state,
                error: action.token
            }
        }
        default: {
            return state;
        }
    }

};


const setAuthUserDataAC = (login, password, rememberMe) =>
    ({type: SET_LOGIN_DATA, userData: {login, password, rememberMe}});

const setTokenAC=(token)=>{
    return {
        type:ADD_TOKEN,
        token:token
    }
}


export const loginTC = (email, password, rememberMe) => (dispatch) => {
    apiLogin.addLogin(email, password, rememberMe)
        .then(res => {
        let resp = res.data.success;
        dispatch(setAuthUserDataAC(resp))
        debugger
        dispatch(setTokenAC(res.data.token))
    })

};


export default logInReducer;