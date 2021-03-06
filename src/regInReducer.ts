import {api} from './api'
import {Dispatch} from "redux";


export const REGISTER = 'REGISTER_USER'
export const LOADING_STATUS = 'LOADING'
export const ERROR_MESSAGE='ERROR_MESSAGE'


const intialstate = {
    success: false,
    loading: false,
    error:''
}


export const regInReducer = (state = intialstate, action:RegActionType) => {

    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
                success: action.success
            }
        }
        case LOADING_STATUS: {
            return {
                ...state,
                loading: action.loading
            }

        }
        case ERROR_MESSAGE : {
          return {
              ...state,
              error: action.error
          }
        }
        default: {
            return state;
        }

    }

}


export const addUserTC = (email:string, pas:string) => async (dispatch:Dispatch) => {

    try {
        dispatch(loadAC(true))
        let res = await api.addRegistrApi(email, pas)
        let success = res.data.success
        dispatch(loadAC(false))
        dispatch(addUserAC(success))
    } catch (e) {
      // debugger
        //console.log(res)
        dispatch(loadAC(false))
        dispatch(errorAlertSuccess(e.response.data.error))


    }
}

type RegActionType=AddUserActionType
|LoadActionType
|ErrorAlertSuccessActionType




const addUserAC = (success:boolean):AddUserActionType => ({type: REGISTER, success})
type AddUserActionType={
    type:typeof REGISTER,
    success:boolean
}

const loadAC = (loading:boolean) :LoadActionType=>({type: LOADING_STATUS, loading})
type LoadActionType={
    type:typeof LOADING_STATUS,
    loading:boolean
}

const errorAlertSuccess=(error:string):ErrorAlertSuccessActionType=>({type : ERROR_MESSAGE, error})
type ErrorAlertSuccessActionType={
    type:typeof ERROR_MESSAGE,
    error:string

}