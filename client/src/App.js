import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/profile/Profile';
import Navbar from './components/layout/Navbar';
<<<<<<< HEAD
import Topic from './components/topic/Topic';
=======
import ProfileEdit from './components/profile/edit/ProfileEdit';
>>>>>>> 1b117ca8bbff4e5ffccd9ad97b3e04e0373e7e60

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/profile" component={Profile} />
<<<<<<< HEAD
          <Route exact path="/topic" component={Topic} />
=======
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/profile/edit/:option" component={ProfileEdit} />
>>>>>>> 1b117ca8bbff4e5ffccd9ad97b3e04e0373e7e60
        </Switch>
      </div>
    </Router>
  );
};

export default App;
