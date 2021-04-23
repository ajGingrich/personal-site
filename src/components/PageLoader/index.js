import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

import styles from './page-loader.module.css';

const PageLoader = () => {
  return (
    <Container className={styles.loaderContainer}>
      <Spinner animation="border" />
    </Container>
  );
};

export default PageLoader;
