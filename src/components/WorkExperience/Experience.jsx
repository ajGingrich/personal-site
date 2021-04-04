import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Experience = ({
  company,
  position,
  image,
  description,
  location,
  // startDate,
  // endDate,
}) => {
  // <img id="imgAvantica" className="img-responsive center-xs" src="img/work_avantica.jpg">
  return (
    <Row>
      <Col sm={3} xs={12}>
        Hello Image
      </Col>
      <Col sm={9} xs={12}>
        <p class="p-together">
          <span class="company">{company}</span>
        </p>
        <p class="p-together">
          <span class="workTitle en">{position}<span className="workDates">December 2018 to November 2020</span></span>
        </p>
        <p class="lastP"><span class="workLocation">{location}</span></p>
        <p class="workDescription en">
          {description}
        </p>
      </Col>
    </Row>
  )
};

Experience.props = {
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Experience;
