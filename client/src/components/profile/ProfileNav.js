import React from 'react';

function ProfileNav() {
  return (
    <div>
      <nav class="nav nav-pills flex-column flex-sm-row mb-3">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">
          Posts
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Scobs
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">
          Bookmarks
        </a>
      </nav>
    </div>
  );
}

export default ProfileNav;
