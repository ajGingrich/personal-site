import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Form,
  Col,
  Button,
} from 'react-bootstrap';

import { CONTACT_DESCRIPTION, CONTACT_FORM } from './constants';

const ContactForm = ({ language }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(firstName, lastName, email, phone, message);

    fetch('/api/user')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }} className="text-center">
        <p>{CONTACT_DESCRIPTION[language]}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="contactFirstName">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.firstName[language]}
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="contactLastName">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.lastName[language]}
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="contactEmail">
            <Form.Control
              type="email"
              placeholder={CONTACT_FORM.email[language]}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              {CONTACT_FORM.emailWarning[language]}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="contactPhoneNumber">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.phone[language]}
              onChange={e => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="contactMessage">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder={CONTACT_FORM.message[language]}
              onChange={e => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
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
