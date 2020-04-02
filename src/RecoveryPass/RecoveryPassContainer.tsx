import React, {Component} from 'react';
import RecoveryPass from "./RecoveryPass";
import {deleteErrorMessage, sendMail} from "./bll/recPassReducer";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router";
import {AppStateType} from "../store";

type MapStateType = {
    success: boolean
    error: string
    loading:boolean
}
type MapDispatchType = {
    sendMail: (email: string) => void
    deleteErrorMessage:()=>void
}
type PropsType = MapDispatchType & MapStateType&RouteComponentProps

class RecoveryPassContainer extends Component<PropsType> {
    render() {
        return (
            <div>
                <RecoveryPass  deleteErrorMessage={this.props.deleteErrorMessage}
                               success={this.props.success}
                               error={this.props.error}
                               loading={this.props.loading}
                               sendMail={this.props.sendMail}/>
            </div>
        );
    }
}

const mstp = (state: AppStateType): MapStateType => ({
    success: state.recPass.success,
    error: state.recPass.error,
    loading:state.recPass.loading
})


let WithRouterRecoveryPassContainer = withRouter(RecoveryPassContainer);
export default connect(mstp, {sendMail,deleteErrorMessage})(WithRouterRecoveryPassContainer)