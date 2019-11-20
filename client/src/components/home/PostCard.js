import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ data }) => {
  return (
    <div class="card mb-3 home-post-card mb-4 overflow-hidden">
      <div class="row no-gutters">
        <div class="col-2 col-md-4">
          <img
            src={data.image}
            class="card-img fit-image rounded-0"
            width="200"
            height="200"
            alt="..."
          />
        </div>
        <div class="col-10  col-md-8">
          <div class="card-body">
            <h5 class="card-title truncate-2-lines">{data.title}</h5>
            <p class="card-text font-smaller truncate-2-lines text-gray-700">
              {data.subtitle}
            </p>
            <div class="card-text">
              <div>
                <Link
                  className="text-decoration-none text-gray-900 text-sm"
                  to="/profile">
                  {data.author}
                </Link>
              </div>
              <small class="text-xs text-gray-700">
                Last updated {data.date}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
