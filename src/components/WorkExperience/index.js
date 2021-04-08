import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { languageSelector } from 'selectors/language';

import { POSITIONS, WORK_EXPERIENCE_TITLE } from './constants';

import Experience from './Experience';

const WorkExperience = () => {
  const language = useSelector(languageSelector);
  return (
    <section id="work-experience">
      <Row>
        <Col md={12}>
          <h3 className="text-center">
            <span>{WORK_EXPERIENCE_TITLE[language]}</span>
          </h3>
        </Col>
      </Row>
      {POSITIONS.map(({
        company,
        image,
        location,
        description,
        imageMargin,
        position,
        startDate,
        endDate,
      }, index) => (
        <Experience
          key={`work-experience-${company}`}
          company={company}
          image={image}
          location={location}
          description={description}
          startDate={startDate}
          endDate={endDate}
          position={position}
          imageMargin={imageMargin}
          isCurrent={index === 0}
        />
      ))}
    </section>
  );
};

export default WorkExperience;
