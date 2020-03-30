import React from 'react';

import './App.css';
import Registration from "./Registration";
import Loginization from "./Login/Loginization";
import { Route } from 'react-router-dom';

import RecoveryPassContainer from "./RecoveryPass/RecoveryPassContainer";


function App() {
  return (
    <div className="App">

    <Route path='/registration' component={Registration } />
      <Route path='/loginization'  component={Loginization} />

      <RecoveryPassContainer/>

    </div>
  );
}

export default App;
