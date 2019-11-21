import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Trending from './Trending';
import PopularTopics from './PopularTopics';
import CategoriesList from './CategoriesList';

// static data
import { popularCategories } from '../static_data/popularCategories';

const Home = () => {
  return (
    <Fragment>
      <Container className="pt-3">
        <Trending />

        <Row className="mt-3">
          <Col lg={8}>
            <PopularTopics data={popularCategories} />
          </Col>
          <Col lg={4} className="p pl-5">
            <CategoriesList />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
