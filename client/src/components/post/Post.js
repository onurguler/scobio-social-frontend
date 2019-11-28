import React from 'react';
import PostHeader from './PostHeader';
import PostUser from './PostUser';

const Post = () => {
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      <div className="mb-4 rounded-lg px-4 py-4 bg-white profile-post">
        <PostHeader />
        <PostUser className="mt-4" />
      </div>
    </div>
  );
};

export default Post;
