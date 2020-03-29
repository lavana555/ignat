import React, {Component} from 'react';
import RecoveryPass from "./RecoveryPass";
import {sendMail} from "./bll/recPassReducer";
import {connect} from "react-redux";
type MapStateType ={

}
type MapDispatchType ={
    sendMail:(email:string)=>void
}
class RecoveryPassContainer extends Component<MapDispatchType> {
    render() {
        return (
            <div>
                <RecoveryPass sendMail={this.props.sendMail}/>
            </div>
        );
    }
}

const mstp=(state:any):MapStateType=>({

})

export default connect (mstp,{sendMail})( RecoveryPassContainer)