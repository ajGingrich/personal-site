import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { Row, Col, Carousel } from 'react-bootstrap';

import { languageSelector } from 'selectors/language';

import {
  INTERESTS_TITLE,
  INTERESTS_SLIDESHOW,
} from './constants';

import styles from './interests.module.css';

const Interests = () => {
  const language = useSelector(languageSelector);

  return (
    <section id="interests">
      <Row>
        <Col md={12}>
          <span className="text-center">
            <h3>{INTERESTS_TITLE[language]}</h3>
          </span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <Carousel>
            {INTERESTS_SLIDESHOW.map(({
              image,
              title,
              style = {},
            }) => {
              return (
                <Carousel.Item key={`interet-carousel-${image}`}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className={classnames(styles.captionTitle)} style={style}>
                      {title[language]}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};

export default Interests;
