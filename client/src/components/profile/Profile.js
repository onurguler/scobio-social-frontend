import React, { Fragment } from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import { Container } from 'react-bootstrap';
const Profile = () => {
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      <ProfileTop />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
    </div>
  );
};

export default Profile;
