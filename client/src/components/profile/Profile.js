import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex flex-column d-flex align-items-center justify-content-center border border-primary p-4 rounded-lg mt-4 "
        style={{ background: '#e2e8f0' }}>
        <div className="d-flex align-items-center border-bottom border-secondary pb-3 mb-3">
          <img
            className="rounded-circle fit-image mr-4"
            width="127"
            height="127"
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
            alt=""
          />
          <div className="ml-4">
            <div className="d-flex justify-content-between mb-3 align-items-center">
              <span className="lead font-weight-bold text-center align-middle">
                Ege Çakmak
              </span>

              <button type="button" class="btn btn-outline-primary btn-sm px-4">
                Follow
              </button>
            </div>
            <div className="d-flex flex-row text-center font-montserrat">
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

        <div className="w-75 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut beatae
          eveniet deleniti delectus blanditiis? Delectus eligendi minus pariatur
          ea, sequi molestiae reiciendis totam animi, illo nesciunt dignissimos
          sit, necessitatibus natus temporibus nemo rerum veniam atque dolores
          eius unde aut ipsam aperiam! Enim sapiente officiis corporis expedita
          illo temporibus a eum?
        </div>
      </div>
    </div>
  );
};

export default Profile;
