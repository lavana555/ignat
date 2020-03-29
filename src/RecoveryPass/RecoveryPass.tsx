import React, {Component, ChangeEvent} from 'react';
type PropsType ={
    sendMail:(email:string)=>void
}
class RecoveryPass extends Component<PropsType> {
    state={
        email: ""
    }
    emailAdd =(e:ChangeEvent<HTMLInputElement>)=>{
       let emailValue=e.currentTarget.value;
        this.setState({email:emailValue})
    }
    sendMail = ()=>{
        this.props.sendMail(this.state.email)
    }
    render() {
        return (
            <div>
                <div>Forgot</div>
                <div><input placeholder={'enter your email'} value={this.state.email} onChange={this.emailAdd}/></div>
                <div><button onClick={this.sendMail}>Send email</button></div>
                <a href={'#'}>Sign in</a>
            </div>
        );
    }
}

export default RecoveryPass