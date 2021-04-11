import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import { languageSelector } from 'selectors/language';

import { CONTACT_TITLE } from './constants';

import ContactForm from './ContactForm';
import SocialNetworks from './SocialNetworks';

const Contact = () => {
  const language = useSelector(languageSelector);

  const handleClick = () => {
    fetch('andrew-be-service/user')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error);
  }

  return (
    <section>
      <Button onClick={handleClick}>
        Click Me!
      </Button>
      <Row>
        <Col md={12}>
          <h3 className="text-center">
            <span>{CONTACT_TITLE[language]}</span>
          </h3>
        </Col>
      </Row>
      <ContactForm language={language} />
      <hr />
      <SocialNetworks language={language} />
    </section>
  );
};

export default Contact;
