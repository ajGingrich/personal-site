/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Footer from 'components/Footer';

import { languageSelector } from 'selectors/language';

import {
  POSITIONS,
  WORK_EXPERIENCE_TITLE,
  EDUCATION,
  EDUCATION_TITLE,
} from './constants';

import Experience from './Experience';

const WorkExperience = () => {
  const language = useSelector(languageSelector);
  return (
    <Container className="content">
      <section id="work-experience">
        <Row>
          <Col md={12}>
            <h3 className="text-center">
              <span>{WORK_EXPERIENCE_TITLE[language]}</span>
            </h3>
          </Col>
        </Row>
        {POSITIONS.map((position, index) => (
          <Experience
            key={`work-experience-${position.company}`}
            {...position}
            isCurrent={index === 0}
          />
        ))}
        <Row>
          <Col md={12}>
            <h3 className="text-center">
              <span>{EDUCATION_TITLE[language]}</span>
            </h3>
          </Col>
        </Row>
        {EDUCATION.map(position => (
          <Experience
            key={`work-experience-${position.company}`}
            {...position}
          />
        ))}
      </section>
      <Footer />
    </Container>
  );
};

export default WorkExperience;
