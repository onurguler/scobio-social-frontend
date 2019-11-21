import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import OverView from '../edit/OverView';
import Education from '../edit/Education';
import Privacy from '../edit/Privacy';

const ProfileTop = () => {
  return (
    <Router>
      <Fragment>
        <div
          className="flex flex-column d-flex align-items-center justify-content-center p-4 shadow  mw-100 profile-top mb-4"
          style={{ background: '#e2e8f0' }}>
          <div className="d-flex align-items-center pb-3 mb-3">
            <div className="row">
              <div className="col-sm-4 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                <img
                  className="rounded-circle fit-image mr-md-4"
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <div className="ml-4">
                  <div className="d-flex justify-content-between mb-3 align-items-center px-4">
                    <span className="lead font-weight-bold text-center align-middle">
                      Ege Çakmak
                    </span>
                  </div>
                  <div className="d-flex flex-row text-center font-montserrat justify-content-center">
                    <div className="px-4 py-2 border-right border-secondary">
                      <div>14</div>
                      <small>Posts</small>
                    </div>
                    <div className="px-4 py-2 border-right border-secondary">
                      <div>1429</div>
                      <small>Followers</small>
                    </div>
                    <div className="px-4 py-2">
                      <div>124</div>
                      <small>Following</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 border">
            <ul className="list-group m-4">
              <Link
                className="text-decoration-none text-dark font-bold"
                to="/profile/edit/overview">
                <li className="list-group-item">OverView</li>
              </Link>
              <Link
                className="text-decoration-none text-dark font-bold"
                to="/profile/edit/education">
                <li className="list-group-item">Education</li>
              </Link>
              <Link
                className="text-decoration-none text-dark font-bold"
                to="/profile/edit/privacy">
                <li className="list-group-item">Privacy</li>
              </Link>
            </ul>
          </div>

          <div className="col-8 border">
            <Switch>
              <Route exact path="/profile/edit/overview" component={OverView} />
              <Route
                exact
                path="/profile/edit/education"
                component={Education}
              />
              <Route exact path="/profile/edit/privacy" component={Privacy} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default ProfileTop;
