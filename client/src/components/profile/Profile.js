import React, { Fragment } from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import { Container } from 'react-bootstrap';

const Profile = () => {
  return (
<<<<<<< HEAD
    <div className="container">
      <div className="flex flex-column align-items-center justify-content-center d-flex border border-primary mt-4 p-4 rounded-lg">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle fit-image mr-4"
            width="127"
            height="127"
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
            alt=""
          />
          <div className="d-flex flex-row ml-4 text-center font font-quicksand">
            <div className="px-4 py-2 border-right">
              <small>Post</small>
              <div>40</div>
            </div>
            <div className="px-4 py-2 border-right">
              <small>Followers</small>
              <div>10M</div>
            </div>
            <div className="px-4 py-2">
              <small>Following</small>
              <div>456</div>
            </div>
          </div>
        </div>
        <div>cccccccccccc</div>
      </div>
=======
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      <ProfileTop />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
>>>>>>> 44e1f355c43bcae8897d844b061a6e0e140c6372
    </div>
  );
};

export default Profile;
