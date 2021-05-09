import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import butterReducer from './butterReducer';
import contactReducer from './contactReducer';

const reducer = combineReducers({
  butter: butterReducer,
  contact: contactReducer,
  language: languageReducer,
});

export default reducer;
