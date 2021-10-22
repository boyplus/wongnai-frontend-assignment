import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import history from '../history';
import Home from './Home';

import '../css/App.css';


const App = () => {

  return <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
}

export default App;
