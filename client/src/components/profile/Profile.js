import React from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';

const Profile = () => {
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      <ProfileTop />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
    </div>
  );
};

export default Profile;
