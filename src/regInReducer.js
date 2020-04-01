import {api} from './api'


export const REGISTER = 'REGISTER_USER'
export const LOADING_STATUS = 'LOADING'
export const ERROR_MESSAGE='ERROR_MESSAGE'


const intialstate = {
    success: false,
    loading: false,
    error:''
}


export const regInReducer = (state = intialstate, action) => {

    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
                success: action.succusess
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


export const addUserTC = (email, pas) => async (dispatch) => {

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



const addUserAC = (succusess) => {
    return {
        type: REGISTER, succusess
    }
}

const loadAC = (loading) => {
    return {
        type: LOADING_STATUS, loading
    }
}

const errorAlertSuccess=(error)=>{
    return{
        type : ERROR_MESSAGE, error
    }
}