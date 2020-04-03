import React from 'react';
import './App.css';
import Registration from "./Registration";
import WithRouterRecoveryPassContainer from "./RecoveryPass/RecoveryPassContainer";
import {BrowserRouter, Link, Route} from "react-router-dom";
import NewPass from "./NewPass/NewPass";
import WithRouterNewPassContainer from "./NewPass/NewPassContainer";
import Loginization from "./Login/Loginization";
import Users from "./Users/Users";


class App extends React.Component {


    state = {
        flag: false

    }
    showHedaer = () => {
        this.setState({
            flag: !this.state.flag

        })
    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="header">
                        {!this.state.flag &&
                            <div className="headerbtn" onClick={this.showHedaer}>SHOW HEADER</div>
                        }
                        {this.state.flag &&

                      <>
                          <div className="headerbtn" onClick={this.showHedaer}>COVER HEADER</div>
                          <ul className="nav">
                            <li><Link to="SignIN">sig-in</Link></li>
                            <li><Link to="Registration">register</Link></li>
                            <li><Link to="Forgot">RecoveryPassword</Link></li>
                            <li><Link to="login">Login</Link></li>
                        </ul>

                      </>
                        }
                        <Route exact path='/Registration' component={Registration}/>
                        <Route exact path='/Forgot/' component={WithRouterRecoveryPassContainer}/>
                        <Route exact path='/reset-password/:token' component={WithRouterNewPassContainer}/>
                        <Route exact path='/login/' component={Loginization}/>
                    </div>

                    {/*<Route exact path='/SignIN' component={SignIN}/>*/}
<Users />
                    {/*<Registration/>*/}
                    {/*<RecoveryPassContainer/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
