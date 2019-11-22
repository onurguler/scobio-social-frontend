import React, { Fragment } from 'react';

const EmailSettings = () => {
  return (
    <Fragment>
      <h1 className="border-bottom pb-3">EmailSettings</h1>
      <div className="font-bold text-lg mt-4">Your email</div>
      <div className="text-gray-800 border-bottom pb-4 mt-2">
        egeckmk@gmail.com
      </div>
      <div className="font-bold text-lg mt-4">Emails from Scobers</div>
      <div className="text-gray-800 mt-2">
        Receive notifications when people you follow share a new post.
      </div>
      <div className="font-bold text-lg mt-4">Followed Scobers</div>

      <div className="text-gray-800 border-bottom pb-4 mt-2">
        Control which emails are sent to you from scobers you follow.
      </div>
      <div className="font-bold text-lg mt-4">Social notifications</div>
      <div className="text-gray-800 border-bottom pb-4 mt-2">
        Notifications when someone follows you.
      </div>
      <div className="font-bold text-lg mt-4">Mention notifications</div>
      <div className="text-gray-800 border-bottom pb-4 mt-2">
        Notifications when people mention you in their posts on Scobio.
      </div>
      <div className="font-bold text-lg mt-4">Updates for Scobers</div>
      <div className="text-gray-800  pb-5 mt-2">
        Notifications on your scobs.
      </div>
    </Fragment>
  );
};

export default EmailSettings;
