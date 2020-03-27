
 let intialstate=[]



export const regInReducer=(state=intialstate,action)=>{
    switch (action.type) {
        case REGISTER:{
            return{
                ...state
            }

        }
        default:{
            return  state;
        }

    }

}