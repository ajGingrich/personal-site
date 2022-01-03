import React from 'react';
import { Row, Col } from 'react-bootstrap';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <section id="footer">
      <Row>
        <Col md={12}>
          <footer className={styles.footer}>
            <div className="text-center">
              <p>&copy; Andrew Gingrich {new Date().getFullYear()}</p>
            </div>
          </footer>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
