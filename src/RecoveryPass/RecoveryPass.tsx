import React, {Component, ChangeEvent} from 'react';

type PropsType = {
    sendMail: (email: string) => void
    success: boolean
    error: string
    deleteErrorMessage:()=>void
    loading:boolean
}

class RecoveryPass extends Component<PropsType> {
    state = {
        email: "",
    }
    emailAdd = (e: ChangeEvent<HTMLInputElement>) => {
        let emailValue = e.currentTarget.value;
        this.setState({email: emailValue});
        this.props.deleteErrorMessage()
    }
    sendMail = () => {
     this.props.sendMail(this.state.email)
    }

    render() {
        return (
            <div>
                {!this.props.success ?
                    <div>
                        <div>Forgot</div>
                        <div>
                            <input placeholder={'enter your email'} value={this.state.email} onChange={this.emailAdd}/>
                            {this.props.loading?<div style={{color:"red"}}>Loading...</div>:null}
                            {this.props.error!==""?<div style={{color:"red"}}>{this.props.error}</div>:null}
                        </div>
                        <div>
                            <button onClick={this.sendMail}>Send email</button>
                        </div>
                        <a href={'#'}>Sign in</a>
                    </div>
                    : <div>Check your email</div>
                }
            </div>
        );
    }
}

export default RecoveryPass