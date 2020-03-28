import React from 'react';
import classes from './Registration.module.css'
import {connect} from "react-redux";
import {addUserTC} from "./regInReducer";



class Registration extends React.Component {

    state={
        email:'',
        pas:''
    }


    ChangedEmil=(e)=>{
       // let newEmail=
        this.setState({
            email:e.currentTarget.value
        })

    }

    ChangedPass=(e)=>{
        this.setState({
            pas:e.currentTarget.value
        })
    }

    addRegister=()=>{
        this.props.addUserTC(this.state.email,this.state.pas)
    }

    render = () => {

        return (

            <div className={classes.register}>
                register
<input onChange={this.ChangedEmil} />
<input onChange={this.ChangedPass}/>
<input />
                <div className={classes.btn} onClick={this.addRegister} >Register</div>

    </div>

    );
    }
}

export default connect(null,{addUserTC})(Registration)