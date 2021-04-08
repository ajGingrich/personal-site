import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Form,
  Col,
  Button,
} from 'react-bootstrap';

import { CONTACT_DESCRIPTION } from './constants';

const ContactForm = ({ language }) => {
  return (
    <Row>
      <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center">
        <p>{CONTACT_DESCRIPTION[language]}</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

ContactForm.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ContactForm;
