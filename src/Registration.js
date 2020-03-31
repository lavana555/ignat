import React from 'react';
import classes from './Registration.module.css'
import {connect} from "react-redux";
import {addUserTC} from "./regInReducer";


class Registration extends React.Component {

    state = {
        email: '',
        pas1: '',
        pas2: '',
        errorPas: false,
        errorMail: false
    }


    ChangedEmil = (e) => {
        // let newEmail=
        this.setState({
            email: e.currentTarget.value
        })

    }

    ChangedPassOne = (e) => {
        this.setState({
            pas1: e.currentTarget.value
        })
    }

    ChangedPassTwo = (e) => {
        this.setState({
            pas2: e.currentTarget.value
        })
    }

    addRegister = () => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.state.pas1 !== this.state.pas2) {
            this.setState({
                errorPas: !this.state.errorPas
            })
        } else if (reg.test(this.state.email) === false) {
            this.setState({
                errorMail: !this.state.errorMail
            })

        } else {
            this.props.addUserTC(this.state.email, this.state.pas1)
        }


    }

    render = () => {
        return (
            <div className={classes.register}>
                register
                mail: <input onChange={this.ChangedEmil}/>
                passsword: <input onChange={this.ChangedPassOne}/>
                password: <input onChange={this.ChangedPassTwo}/>
                {this.state.errorPas ?
                    <div style={{color: "red"}}>You entered two different passwords. Please try again</div> : null}
                {this.state.errorMail ?
                    <div style={{color: "red"}}>You entered incorrect mail. Please try again</div> : null}
                {this.props.loading ? <div style={{color: "red"}}>Loading...</div> : null}
                {this.props.error!==''?<div style={{color: "red"}}>{this.props.error}</div> : null}
                <div className={classes.btn} onClick={this.addRegister}>Register</div>

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.regIn.loading,
        error:state.regIn.error
    }
}


export default connect(mapStateToProps, {addUserTC})(Registration)