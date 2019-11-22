import React, { Fragment } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const Education = () => {
  return (
    <Fragment>
      <Form className="m-4">
        <Form.Group>
          <Form.Label>Old Password:</Form.Label>
          <Form.Control size="sm" type="password" placeholder="Old Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Password:</Form.Label>
          <Form.Control size="sm" type="password" placeholder="New Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>New Password:</Form.Label>
          <Form.Control size="sm" type="password" placeholder="Again" />
        </Form.Group>
        <Button className="float-right mb-4" variant="outline-success">
          Save
        </Button>
      </Form>
    </Fragment>
  );
};

export default Education;
