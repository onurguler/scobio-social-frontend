import React, { Fragment } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import login_img from '../../assets/img/login.jpg';

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={4}>
          <Image
            className="img-fluid vh-100 d-none d-lg-block"
            src={login_img}
          />
        </Col>
        <Col lg={8} className="justify-content-center vertical-center">
          <Form className="login-form text-center">
            <h3 className="mb-5">Login to continue</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="text-left" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <a className="d-block mb-3" href="#!">
              Forgot Password?
            </a>

            <Button className="w-50" variant="primary" type="submit">
              LOG IN
            </Button>

            <Form.Text className="text-muted mt-4">or sign in using</Form.Text>

            <Button id="facebook" variant="default">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Button>
            <Button id="google" variant="default">
              <FontAwesomeIcon icon={faGooglePlus} size="2x" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
