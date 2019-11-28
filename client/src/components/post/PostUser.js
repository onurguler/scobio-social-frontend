import React from 'react';

const PostUser = ({ className }) => {
  return (
    <div className={`d-flex ${className}`}>
      <img
        className="rounded-circle fit-image"
        src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
        width="50"
        height="50"
        alt=""
      />
      <div className="d-flex align-items-start ml-3">
        <div>
          <div className="font-weight-bold">Ege Çakmak</div>
          <div>
            <small className="text-secondary">Nov 15</small>
          </div>
        </div>
        <button className="btn btn-outline-green-500 btn-sm ml-2">
          Follow
        </button>
      </div>
    </div>
  );
};

export default PostUser;
