import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './welcome.module.css';

const Welcome = () => {
  return (
    <header className={styles.intro}>
      <div className={styles.introBody}>
        <Container>
          <Row>
            <Col sm={{ span: 6, offset: 6 }} xs={{ span: 9, offset: 3 }}>
              <p className={styles.introText}>
                Hey, I'm
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
