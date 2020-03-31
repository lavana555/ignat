import React, {Component} from 'react';
import NewPass from "./NewPass";
import {deleteErrorMessage, sendMail} from "./bll/newPassReducer";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router";

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

class NewPassContainer extends Component<PropsType> {
    render() {
        return (
            <div>
                <NewPass deleteErrorMessage={this.props.deleteErrorMessage}
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


let WithRouterRecoveryPassContainer = withRouter(NewPassContainer);
export default connect(mstp, {sendMail,deleteErrorMessage})(WithRouterRecoveryPassContainer)