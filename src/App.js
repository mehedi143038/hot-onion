import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Breakfast from './Components/Breakfast/Breakfast';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Breakfast></Breakfast>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
