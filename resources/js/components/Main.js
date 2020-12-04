import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./login/Form"
import List from "./login/List"
import Edit from "./login/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/login/index" exact component={List} />
          <Route path="/login/form"  component={Form} />
          <Route path="/login/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('main-login'));