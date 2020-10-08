import React from 'react';
import './App.scss';

import {Home} from './components/Home';
import {Users} from './components/Users';
import {Navigation} from './components/Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h3 className="m-3 d-flex justify-content-center">React Exam</h3>
      <Navigation></Navigation>
      <div className="container">
        <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/users" component={Users}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
