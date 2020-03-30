import React from 'react';

import './App.css';
import Registration from "./Registration";
import Loginization from "./Loginization";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Route path='/registration' component={Registration } />
      <Route path='/loginization'  component={Loginization} />

    </div>
  );
}

export default App;
