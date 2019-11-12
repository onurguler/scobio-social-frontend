import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
