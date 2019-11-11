import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Signup />
    </Fragment>
  );
};

export default App;
