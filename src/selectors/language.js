import { createSelector } from 'reselect';

import { ENGLISH } from 'constants/constants';

export const languageSelector = (state) => state.language;

export const isEnglishSelector = createSelector(
  languageSelector,
  (language) => language === ENGLISH,
);
