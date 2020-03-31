import {Dispatch} from "redux";
import {apiNewPass} from "../dal/apiNewPass";

const PASSWORD_RECOVERY = "app/newPassReducer/PASSWORD_RECOVERY"
const ERROR_ALERT = "app/newPassReducer/ERROR_ALERT"
const DELETE_ERROR = "app/newPassReducer/DELETE_ERROR"
const LOADING_STATUS = "app/newPassReducer/LOADING_STATUS"

const initialState = {
    success: false,
    error: "",
    loading: false
}

export const newPassReducer = (state = initialState, action: recPassActionType) => {
    switch (action.type) {
        case PASSWORD_RECOVERY:
            return {...state, success: action.success};
        case ERROR_ALERT:
            return {...state, error: action.error};
        case DELETE_ERROR:
            return {...state, error: ""};
        case LOADING_STATUS:
            return {...state, loading: action.loading};
        default:
            return state
    }
}
type recPassActionType =
    RecoveryPassSuccessActionType
    | ErrorAlertActionType
    | DeleteErrorMessageActionType
    | LoadingStatusActionType

type RecoveryPassSuccessActionType = {
    type: typeof PASSWORD_RECOVERY
    success: boolean
}
const recoveryPassSuccess = (success: boolean): RecoveryPassSuccessActionType => ({type: PASSWORD_RECOVERY, success})
type LoadingStatusActionType = {
    type: typeof LOADING_STATUS
    loading: boolean
}
const loadingStatusChanging = (loading: boolean): LoadingStatusActionType => ({type: LOADING_STATUS, loading})
type ErrorAlertActionType = {
    type: typeof ERROR_ALERT
    error: string
}
const errorAlertSuccess = (error: string): ErrorAlertActionType => ({type: ERROR_ALERT, error})
type DeleteErrorMessageActionType = {
    type: typeof DELETE_ERROR
}
const deleteErrorMessageSuccess = (): DeleteErrorMessageActionType => ({type: DELETE_ERROR})

export const deleteErrorMessage = () => (dispatch: Dispatch) => {
    dispatch(deleteErrorMessageSuccess())
}
export const sendMail = (mail: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(loadingStatusChanging(true));
        let response: any = await apiNewPass.sendMail(mail);
        dispatch(loadingStatusChanging(false));
        dispatch(recoveryPassSuccess(response))
    }
    catch (error) {
        debugger
        dispatch(loadingStatusChanging(false));
        dispatch(errorAlertSuccess(error.response.data.error))

    }
}
