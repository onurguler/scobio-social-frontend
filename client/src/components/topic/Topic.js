import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import TopicCard from './TopicCard';
import { popularCategories } from '../static_data/popularCategories';

const Topic = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = popularCategories.filter(
      topic => topic.categoryName.toLowerCase() == match.params.topic_name
    );
    setData(res[0]);
  });

  return (
    data !== null && (
      <Fragment>
        <div className="flex flex-column d-flex bg-gray-300 text-center p-5 border-bottom shadow">
          <h1>{data.categoryName}</h1>
        </div>

        <div className="container my-4">
          <div className="row">
            <div className="col-lg-4 order-lg-2">asdasd</div>
            <div className="col-lg-8 order-lg-1">
              <div className="flex d-flex border-bottom pb-2 px-2 mb-4">
                <a
                  href="#!"
                  className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                  Latest
                </a>
                <a
                  href="#!"
                  className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                  Popular
                </a>
                <a
                  href="#!"
                  className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                  Trending
                </a>
                <a
                  href="#!"
                  className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                  Hot
                </a>
              </div>

              {data.popularPosts.map(post => (
                <TopicCard data={post} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default Topic;
