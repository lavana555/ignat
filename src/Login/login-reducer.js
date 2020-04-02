
import {apiLogin} from "./apiLogin";

export const SET_LOGIN_DATA = "logInReducer/SET_LOGIN_DATA";
export const REMEMBER_ME = "logInReducer/REMEMBER_ME";


const initialState = {
    email: '',
    password: '',
    rememberMe: false
};


const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.userData
            }
        }
        case REMEMBER_ME: {
            return {
                ...state,
                ...action.rememberMe
            }
        }
        default: {
            return state;
        }
    }

};


const setAuthUserDataAC = (login, password, rememberMe) =>
    ({type: SET_LOGIN_DATA, userData: {login, password, rememberMe}});


export const loginTC = (email, password, rememberMe) => (dispatch) => {
    apiLogin.addLogin(email, password, rememberMe).then(res => {
        let resp = res.data.success;
        dispatch(setAuthUserDataAC(resp))
    })

};


export default logInReducer;