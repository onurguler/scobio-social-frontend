import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const ProfileTop = () => {
  return (
    <Fragment>
      <div className="flex flex-column d-flex align-items-center justify-content-center p-4 shadow  mw-100 profile-top mt-4 mb-4 bg-teal-700">
        <div className="d-flex align-items-center border-bottom border-secondary pb-3 mb-3">
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
                    <Link className="text-gray-600" to="/profile/edit/overview">
                      <FontAwesomeIcon className="ml-2" icon={faEdit} />
                    </Link>
                  </span>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm px-4">
                    Follow
                  </button>
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

        <div className="px-md-5 mx-md-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
          aliquid molestias explicabo, natus ullam, consequatur voluptatum
          minima necessitatibus ut, consequuntur voluptatem. Temporibus
          similique fugit optio vel, accusantium consequatur nobis!
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTop;
