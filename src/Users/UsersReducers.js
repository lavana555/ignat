
import {Dispatch} from "redux";
import {api} from "../api";


export  const GET_USERS='GETUSERS'
export  const LOADING_STATUS='LOADINGSTATUS'
export  const ERROR_MESSAGE='ERROR_MESSAGE'


const initialState={
    users:[],
    loading:false,

}


export const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users:action.users.map(u=>({...u, tasks:[]}))
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



const getUsersAC=(users)=> {
    return {
        type: GET_USERS,
        users: users
    }
}
export const getTodolistsTC=()=>(dispatch)=>{
    api.getUsersApi()
        .then(res=>{
            debugger;
            dispatch(getUsersAC(res.data.users))
        })
}