import React from 'react';

const PostCard = () => {
  return (
    <div class="card mb-3 home-post-card">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1562887194-f0bca025726c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            class="card-img h-100 fit-image"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title truncate-2-lines">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, qui.
            </h5>
            <p class="card-text font-smaller truncate-2-lines">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              inventore eveniet magni ipsum iste suscipit quo deleniti. Vel
              adipisci facilis ducimus aliquam consequatur accusantium
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
