import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Form,
  Col,
  Button,
} from 'react-bootstrap';

import { sendContactEmailActionCreator } from 'actions/contact';

import { CONTACT_DESCRIPTION, CONTACT_FORM } from './constants';

const ContactForm = ({ language }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contact.loading);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const params = {
      firstName,
      lastName,
      email,
      message,
      phone,
    };

    gtag('event', 'send_contact_email', { // eslint-disable-line no-undef
      method: 'Google',
    });

    dispatch(sendContactEmailActionCreator(params));
  };

  return (
    <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }} className="text-center">
        <p>{CONTACT_DESCRIPTION[language]}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactFirstName">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.firstName[language]}
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactLastName">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.lastName[language]}
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Control
              type="email"
              placeholder={CONTACT_FORM.email[language]}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              {CONTACT_FORM.emailWarning[language]}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactPhoneNumber">
            <Form.Control
              type="text"
              placeholder={CONTACT_FORM.phone[language]}
              onChange={e => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
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
            onClick={handleSubmit}
            disabled={loading}
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
