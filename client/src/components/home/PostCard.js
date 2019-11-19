import React from 'react';

const PostCard = ({ data }) => {
  return (
    <div class="card mb-3 home-post-card mb-4">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={data.image}
            class="card-img fit-image h-full"
            width="175"
            height="175"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title truncate-2-lines">{data.title}</h5>
            <p class="card-text font-smaller truncate-2-lines">
              {data.subtitle}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated {data.date}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
