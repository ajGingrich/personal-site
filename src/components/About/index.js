import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { languageSelector } from 'selectors/language';

import {
  ABOUT_ME_TITLE,
  SKILLS_INFORMATION,
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
            src="https://andrewgingrich-site-assets.s3.amazonaws.com/personal-site/about_formal.png"
            alt=""
          />
        </Col>
        <Col sm={9} xs={12}>
          <p className={styles.introText}>
            {ABOUT_DESCRIPTION.details[language]}
          </p>
          <p className={styles.introText}>
            {ABOUT_DESCRIPTION.quote[language]}
          </p>
          <h5 className={styles.skillsHeader}>
            {SKILLS_INFORMATION.header[language]}
          </h5>
          <p className={styles.introText}>
            <span className="underline">
              {`${SKILLS_INFORMATION.strong[language]}:`}
            </span>
            &nbsp;JavaScript, Java, HTML/CSS, React/Redux, Node
          </p>
          <p className={styles.introText}>
            <span className="underline">
              {`${SKILLS_INFORMATION.knowledgable[language]}:`}
            </span>
            &nbsp;C, Python, Ruby on Rails
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
