import React from 'react';

import english from 'images/lang_english.png';

import styles from './navigation.module.css';

const LanguageFlag = () => {
  return (
    <div className={styles.flag}>
      <img src={english} alt="flag" />
    </div>
  );
};

export default LanguageFlag;
