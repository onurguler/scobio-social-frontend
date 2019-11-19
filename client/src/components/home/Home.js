import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from '../layout/Navbar';
import Trending from './Trending';
import PopularCategories from './PopularCategories';

// static data
import { popularCategories } from '../static_data/popularCategories';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Container className="pt-3">
        <Trending />

        <Row className="mt-3">
          <Col lg={8}>
            <PopularCategories data={popularCategories} />
          </Col>
          <Col lg={4}>
            kategoriler, reklamlar yer alacak. kategoriye tıklanınca o
            kategoriye ait içeriklerin listelendiği sayfa açılacak
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
