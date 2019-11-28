import React, { useState } from 'react';

function ProfileNav({ setShowPosts, setShowScobs, setShowBookmarks }) {
  const [postsIsActive, setPostsIsActive] = useState(true);
  const [scobsIsActive, setScobsIsActive] = useState(false);
  const [bookmarksIsActive, setBookmarksIsActive] = useState(false);

  return (
    <div>
      <nav class="nav nav-pills flex-column flex-sm-row mb-3">
        <a
          class={`flex-sm-fill text-sm-center nav-link ${postsIsActive &&
            'active'}`}
          href="#"
          onClick={() => {
            setPostsIsActive(true);
            setScobsIsActive(false);
            setBookmarksIsActive(false);
            setShowPosts(true);
            setShowScobs(false);
            setShowBookmarks(false);
          }}>
          Posts
        </a>
        <a
          class={`flex-sm-fill text-sm-center nav-link ${scobsIsActive &&
            'active'}`}
          href="#"
          onClick={() => {
            setPostsIsActive(false);
            setScobsIsActive(true);
            setBookmarksIsActive(false);
            setShowPosts(false);
            setShowScobs(true);
            setShowBookmarks(false);
          }}>
          Scobs
        </a>
        <a
          class={`flex-sm-fill text-sm-center nav-link ${bookmarksIsActive &&
            'active'}`}
          href="#"
          onClick={() => {
            setPostsIsActive(false);
            setScobsIsActive(false);
            setBookmarksIsActive(true);
            setShowPosts(false);
            setShowScobs(false);
            setShowBookmarks(true);
          }}>
          Bookmarks
        </a>
      </nav>
    </div>
  );
}

export default ProfileNav;
