import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';

import Footer from 'components/Footer';

import { languageSelector } from 'selectors/language';

import { CONTACT_TITLE } from './constants';

import ContactForm from './ContactForm';
import SocialNetworks from './SocialNetworks';

const Contact = () => {
  const language = useSelector(languageSelector);

  return (
    <Container className="content">
      <section>
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
      <Footer />
    </Container>
  );
};

export default Contact;
