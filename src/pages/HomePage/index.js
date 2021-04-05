import React, { useState } from 'react';

import Welcome from 'components/Welcome';
import Navigation from 'components/Navigation';


import styles from './home-page.module.css';


const HomePage = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.container}>
      <Navigation />
      <Welcome />
      <span onClick={() => setCount(count + 10)}>{count}</span>
    </div>
  );
};

export default HomePage;
