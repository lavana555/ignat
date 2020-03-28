import {api} from  './api'

export const REGISTER='REGISTER_USER'



 const intialstate={
    success:false
}



export const regInReducer=(state=intialstate,action)=>{
    switch (action.type) {
        case REGISTER:{
            return{
                ...state,
                success: action.succusess
            }

        }
        default:{
            return  state;
        }

    }

}


export const addUserTC=(email,pas)=>{
    return(dispatch)=>{
        api.addRegistrApi(email,pas).then(res=>{
            debugger;
            let success=res.data.success
            dispatch(addUserAC(success))
        })
    }
}


const addUserAC=(succusess)=>{
    return {
        type:REGISTER, succusess
    }
}