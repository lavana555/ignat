import {Dispatch} from "redux";
import {apiRecovery} from "../dal/apiRecovery";

const PASSWORD_RECOVERY = "app/recPassReducer/PASSWORD_RECOVERY"
const ERROR_ALERT = "app/recPassReducer/ERROR_ALERT"
const DELETE_ERROR = "app/recPassReducer/DELETE_ERROR"
const LOADING_STATUS = "app/recPassReducer/LOADING_STATUS"

const initialState = {
    success: false,
    error: "",
    loading: false
}

export const recPassReducer = (state = initialState, action: recPassActionType) => {
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
        let response: any = await apiRecovery.sendMail(mail);
        dispatch(loadingStatusChanging(false));
        dispatch(recoveryPassSuccess(response))
    }
    catch (error) {
        debugger
        dispatch(loadingStatusChanging(false));
        dispatch(errorAlertSuccess(error.response.data.error))

    }
}