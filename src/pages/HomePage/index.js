import React, { useState } from 'react';

import styles from './home-page.module.css';

const HomePage = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.container}>
      Hello
      <span onClick={() => setCount(count + 1)}>{count}</span>
    </div>
  );
};

export default HomePage;
