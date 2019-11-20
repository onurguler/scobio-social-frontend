import React from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-12 col-lg-8 mx-auto">
          <ProfileTop />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
      </div>
    </div>
  );
};

export default Profile;
