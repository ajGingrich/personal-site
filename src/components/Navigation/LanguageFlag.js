import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleLanguageActionCreater } from 'actions/language';

import { languageSelector } from 'selectors/language';
import english from 'images/lang_english.png';
import spanish from 'images/lang_spanish.png';

import styles from './navigation.module.css';

const LanguageFlag = () => {
  const dispatch = useDispatch();
  const language = useSelector(languageSelector);

  const handleChangeLanguage = () => {
    dispatch(toggleLanguageActionCreater());
  };

  return (
    <div className={styles.flag} onClick={handleChangeLanguage}>
      <img src={language === 'english' ? english : spanish} alt="flag" />
    </div>
  );
};

export default LanguageFlag;
