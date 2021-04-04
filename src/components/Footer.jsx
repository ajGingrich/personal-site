import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <section id="footer" className="container">
      <Row>
        <Col md={12}>
          <footer>
            <div className="container text-center">
              <p>&copy; Andrew Gingrich 2021</p>
            </div>
          </footer>
          </Col>
      </Row>
    </section>
  )
}

export default Footer;
