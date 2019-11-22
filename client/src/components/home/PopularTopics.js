import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TopicCard from '../topic/TopicCard';

const PopularTopics = ({ data }) =>
  data.map(category => (
    <Fragment>
      <div className="pr-2 py-2 border-bottom border-gray-400 mb-4">
        <span className="h5 font-weight-bold">{category.categoryName}</span>
        <Link
          className="float-right text-decoration-none text-gray-600"
          to={`/topic/${category.categoryName.toLowerCase()}`}>
          More
          <FontAwesomeIcon
            className="align-middle ml-2"
            icon={faChevronRight}
          />
        </Link>
      </div>
      {category.popularPosts.map(post => (
        <TopicCard data={post} />
      ))}
    </Fragment>
  ));

export default PopularTopics;
