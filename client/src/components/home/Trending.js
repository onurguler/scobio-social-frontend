import React, { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import TrendItem from './TrendItem';

const Trending = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Fragment>
      <div className="pr-2 py-2 border-bottom border-gray-400 mb-4">
        <span className="h5 font-weight-bold">Trending on Scobio today</span>
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
      <Carousel
        /*
          swipeable={false}
          draggable={false}
          */
        responsive={responsive}
        ssr
        infinite={false}
        //beforeChange={() => this.setState({ isMoving: true })}
        //afterChange={() => this.setState({ isMoving: false })}
        //containerClass="first-carousel-container container"
        //deviceType={this.props.deviceType}
      >
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </Carousel>
    </Fragment>
  );
};

export default Trending;
