import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ENGLISH } from 'constants/constants';

import { languageSelector } from 'selectors/language';

import styles from './experience.module.css';

const Experience = ({
  company,
  position,
  image,
  description,
  location,
  imageMargin,
  startDate,
  endDate,
  isCurrent,
}) => {
  const language = useSelector(languageSelector);
  const isEnglish = language === ENGLISH;
  const preciseDescription = description[language];
  const preciseStartDate = startDate[language];
  const preciseEndDate = endDate && endDate[language];
  const precisionPosition = position[language];
  const englishDatePreposition = isCurrent ? 'since ' : '';
  const endDateText = `${isEnglish ? 'to' : 'hasta'} ${preciseEndDate}`;

  return (
    <Row>
      <Col lg={3} xs={12} className="text-center">
        <img src={image} alt="" className={classnames('img-fluid', styles.image)} style={{ marginTop: imageMargin }} />
      </Col>
      <Col lg={9} xs={12} className={styles.experienceText}>
        <p className="noMargin">
          <span className={styles.company}>{company}</span>
        </p>
        <p className="noMargin">
          <span className={styles.workTitle}>
            {precisionPosition}
            <span className={styles.workDates}>
              {`, ${isEnglish ? englishDatePreposition : 'desde '}${preciseStartDate} ${isCurrent ? '' : endDateText} `}
            </span>
          </span>
        </p>
        <p className={classnames('noMargin', styles.locationParagraph)}>
          <span className={styles.workLocation}>{location}</span>
        </p>
        <p className={styles.workDescription}>
          {preciseDescription}
        </p>
      </Col>
    </Row>
  );
};

Experience.propTypes = {
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.shape({
    english: PropTypes.string.isRequired,
    spanish: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.shape({
    english: PropTypes.string.isRequired,
    spanish: PropTypes.string.isRequired,
  }).isRequired,
  imageMargin: PropTypes.string,
  startDate: PropTypes.shape({
    english: PropTypes.string.isRequired,
    spanish: PropTypes.string.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    english: PropTypes.string,
    spanish: PropTypes.string,
  }),
  isCurrent: PropTypes.bool.isRequired,
};

Experience.defaultProps = {
  imageMargin: '10px',
  endDate: null,
};

export default Experience;
