import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { languageSelector } from 'selectors/language';

import { WELCOME } from './constants';

import styles from './welcome.module.css';

const Welcome = () => {
  const language = useSelector(languageSelector);

  return (
    <header className={styles.intro}>
      <div className={styles.introBody}>
        <Container>
          <Row>
            <Col sm={{ span: 6, offset: 6 }} xs={{ span: 9, offset: 3 }}>
              <p className={styles.introText}>
                {WELCOME[language]}
              </p>
              <h2>ANDREW GINGRICH.</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Welcome;
