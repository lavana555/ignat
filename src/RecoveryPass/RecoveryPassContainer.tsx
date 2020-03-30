import React, {Component} from 'react';
import RecoveryPass from "./RecoveryPass";
import {deleteErrorMessage, sendMail} from "./bll/recPassReducer";
import {connect} from "react-redux";

type MapStateType = {
    success: boolean
    error: string
    loading:boolean
}
type MapDispatchType = {
    sendMail: (email: string) => void
    deleteErrorMessage:()=>void
}
type PropsType = MapDispatchType & MapStateType

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

const mstp = (state: any): MapStateType => ({
    success: state.recPass.success,
    error: state.recPass.error,
    loading:state.recPass.loading
})

export default connect(mstp, {sendMail,deleteErrorMessage})(RecoveryPassContainer)