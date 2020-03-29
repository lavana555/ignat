import {Dispatch} from "redux";
import {apiRecovery} from "../dal/apiRecovery";

const PASSWORD_RECOVERY = "app/recPassReducer/PASSWORD_RECOVERY"

const initialState = {
    success: false
}

export const recPassReducer = (state = initialState, action: RecoveryPassSuccessActionType) => {
    switch (action.type) {
        case PASSWORD_RECOVERY:
            return {...state, success: action.success}
        default:
            return state
    }
}

type RecoveryPassSuccessActionType = {
    type: typeof PASSWORD_RECOVERY
    success: boolean
}
const recoveryPassSuccess = (success: boolean): RecoveryPassSuccessActionType => ({type: PASSWORD_RECOVERY, success})

export const sendMail = (mail: string) => async (dispatch: Dispatch) => {
    let response: any = await apiRecovery.sendMail(mail)
    dispatch(recoveryPassSuccess(response))
}
