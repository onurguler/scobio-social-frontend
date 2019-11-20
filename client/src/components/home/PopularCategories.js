import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PostCard from './PostCard';

const PopularCategories = ({ data }) =>
  data.map(category => (
    <Fragment>
      <div className="pr-2 py-2 border-bottom border-gray-400 mb-4">
        <span className="h5 font-weight-bold">{category.categoryName}</span>
        <a
          className="float-right text-decoration-none text-secondary"
          href="#!">
          More
          <FontAwesomeIcon
            className="align-middle ml-2"
            icon={faChevronRight}
          />
        </a>
      </div>
      {category.popularPosts.map(post => (
        <PostCard data={post} />
      ))}
    </Fragment>
  ));

export default PopularCategories;
