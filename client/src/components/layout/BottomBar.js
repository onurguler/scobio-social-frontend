import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const BottomBar = () => {
  return (
    <Fragment>
      <div className="navbar py-md-0 bg-gray-900 border-gray-900 border-top">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-decoration-none text-gray-300">
            <FontAwesomeIcon
              className="mr-1 align-middle"
              icon={faSellcast}
              size={'1x'}
            />
          </Link>
          <div className="d-flex">
            <span className="align-middle text-teal-100 mr-4" href="#aboutus">
              About Us
            </span>
            <span className="align-middle text-teal-100" href="#contact">
              Contact
            </span>
            <div>
              <span
                className="small align-middle text-teal-100"
                href="#AboutUs">
                © Scobi 2019, All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BottomBar;
