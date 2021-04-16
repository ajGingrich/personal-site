import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import butterReducer from './butterReducer';

const reducer = combineReducers({
  butter: butterReducer,
  language: languageReducer,
});

export default reducer;
