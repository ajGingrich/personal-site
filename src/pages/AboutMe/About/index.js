import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { languageSelector } from 'selectors/language';
import { SITE_ASSETS } from 'constants/constants';

import {
  ABOUT_ME_TITLE,
  ABOUT_DESCRIPTION,
} from './constants';
import styles from './about.module.css';

const About = () => {
  const language = useSelector(languageSelector);

  return (
    <section id="about">
      <Row>
        <Col md={12}>
          <span className="text-center">
            <h3>{ABOUT_ME_TITLE[language]}</h3>
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={12} className="text-center">
          <img
            className="img-responsive center-xs"
            src={`${SITE_ASSETS}/about_formal.webp`}
            alt=""
          />
        </Col>
        <Col sm={9} xs={12}>
          <p className={styles.introText}>
            {ABOUT_DESCRIPTION.details[language]}
          </p>
          <p className={styles.introText}>
            {ABOUT_DESCRIPTION.quoteHeader[language]}
          </p>
          <p className={styles.introText}>
            {ABOUT_DESCRIPTION.quote[language]}
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
