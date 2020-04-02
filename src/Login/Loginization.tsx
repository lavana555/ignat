import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginTC} from "./login-reducer";
import s from "./Loginization.module.css"


type MapStateType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type MapDispatchType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    // rememberMeAC: (rememberMe: boolean)=>void
}
type PropsType = MapDispatchType & MapStateType;


class Loginization extends Component<PropsType> {
    state = {
        email: '',
        password: '',
        rememberMe: false
    };


    onEmailChange = (e: any) => {
        this.setState({email: e.currentTarget.value})
    };

    onPasswordChange = (e: any) => {
        this.setState({password: e.currentTarget.value})
    };

    rememberMe = (e: any) => {
        this.setState({rememberMe: e.currentTarget.checked})
        //this.props.rememberMeAC(e.currentTurget.checked)
    };

    addLogin = () => {
        this.props.loginTC(this.state.email, this.state.password, this.state.rememberMe)
    };


    render() {
        return <div className={s.login}>

            <h1>Login</h1>
            <span>Имя пользователя или e-mail </span>
            <input
                value={this.state.email}
                onChange={this.onEmailChange}
                placeholder='Enter your username'/>
            <span>Пароль </span>
            <input
                onChange={this.onPasswordChange}
                value={this.state.password}
                type='password'
                placeholder='Enter your password'/>
            <input type='checkbox' checked={this.state.rememberMe}
                   onChange={this.rememberMe}/><span>Запомнить меня</span>
            <button onClick={this.addLogin}>Войти</button>
        </div>
    }
};


const mstp = (state: any): MapStateType => ({
    email: state.logIn.email,
    password: state.logIn.password,
    rememberMe: state.logIn.rememberMe

});
export default connect(mstp, {loginTC})(Loginization)