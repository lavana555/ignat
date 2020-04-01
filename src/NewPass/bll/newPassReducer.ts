import {Dispatch} from "redux";
import {apiNewPass} from "../dal/apiNewPass";

const RESET_PASSWORD = "app/newPassReducer/RESET_PASSWORD"
const ERROR_ALERT = "app/newPassReducer/ERROR_ALERT"
const DELETE_ERROR = "app/newPassReducer/DELETE_ERROR"
const LOADING_STATUS = "app/newPassReducer/LOADING_STATUS"
const DISABLE_STATUS = "app/newPassReducer/DISABLE_STATUS"

const initialState = {
    success: false,
    error: "",
    loading: false,
    disable: false
}

export const newPassReducer = (state = initialState, action: recPassActionType) => {
    switch (action.type) {
        case RESET_PASSWORD:
            return {...state, success: action.success};
        case ERROR_ALERT:
            return {...state, error: action.error};
        case DELETE_ERROR:
            return {...state, error: ""};
        case LOADING_STATUS:
            return {...state, loading: action.loading};
        case DISABLE_STATUS:
            return {...state, disable: action.disable};
        default:
            return state
    }
}
type recPassActionType =
    ResetPassSuccessActionType
    | ErrorAlertActionType
    | DeleteErrorMessageActionType
    | LoadingStatusActionType
    | DisableStatusActionType

type ResetPassSuccessActionType = {
    type: typeof RESET_PASSWORD
    success: boolean
}
const resetPassSuccess = (success: boolean): ResetPassSuccessActionType => ({type: RESET_PASSWORD, success})
type DisableStatusActionType = {
    type: typeof DISABLE_STATUS
    disable: boolean
}
const disableStatusChanging  = (disable: boolean): DisableStatusActionType => ({type: DISABLE_STATUS, disable})

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
export const addNewPass = (token: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(loadingStatusChanging(true));
        dispatch(disableStatusChanging(true));
        let response: any = await apiNewPass.addNewPass(token, password);
        dispatch(loadingStatusChanging(false));
        dispatch(disableStatusChanging(false));
        dispatch(resetPassSuccess(response))
    } catch (error) {
        debugger
        dispatch(loadingStatusChanging(false));
        dispatch(disableStatusChanging(false));
        dispatch(errorAlertSuccess(error.response.data.error))

    }
}
