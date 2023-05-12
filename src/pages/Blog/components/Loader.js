import React from 'react';
import { Spinner } from 'react-bootstrap';

import styles from '../blog.module.css';

const Loading = () => (
  <div className={styles.loaderWrapper}>
    <Spinner animation="border" role="status" />
  </div>
);

export default Loading;
