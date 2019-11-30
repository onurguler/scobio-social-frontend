import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

const Comments = () => {
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile border py-2">
      <p className="text-gray-700 text-sm font-semibold">
        Showing comments for:
      </p>
      <PostCard />
    </div>
  );
};

export default Comments;
