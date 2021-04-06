import { TOGGLE_LANGUAGE } from 'actions/language';
import { ENGLISH, SPANISH } from 'constants/constants';

const languageReducer = (state = ENGLISH, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return state === ENGLISH ? SPANISH : ENGLISH;
    default:
      return state;
  }
};

export default languageReducer;
