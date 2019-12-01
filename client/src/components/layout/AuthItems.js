import React, { Fragment } from 'react';
import AuthAccountDropdown from './AuthAccountDropdown';
import NotificationDropdown from './NotificationDropdown';

const AuthItems = () => {
  return (
    <div className="d-flex align-items-center">
      <NotificationDropdown />
      <AuthAccountDropdown />
    </div>
  );
};

export default AuthItems;
