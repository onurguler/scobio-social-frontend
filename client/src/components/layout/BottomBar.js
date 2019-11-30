import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <Fragment>
      <div className="navbar py-md-0 bg-gray-900 border-gray-900 border-top">
        <div className="container d-flex">
          <Link
            to="/"
            className="navbar-brand text-decoration-none text-gray-300 mr-auto">
            <FontAwesomeIcon
              className="mr-1 align-middle"
              icon={faSellcast}
              size={'1x'}
            />
            <span className="small font-semibold align-middle" href="#home">
              Scobi
            </span>
          </Link>
          <Link className="d-flex text-decoration-none" to="/AboutUs">
            <span className="align-middle text-teal-100 mr-4">About Us</span>
          </Link>
          <Link className="d-flex text-decoration-none" to="/Contact">
            <span className="align-middle text-teal-100">Contact</span>
          </Link>
        </div>
        <div className="d-flex w-100 justify-content-end">
          <span className="small align-middle text-teal-100">
            © Scobi 2019, All Rights Reserved.
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomBar;
