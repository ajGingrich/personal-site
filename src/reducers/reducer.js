import { combineReducers } from 'redux';

const languageReducer = (state = 'english') => state;

const reducer = combineReducers({
  language: languageReducer,
});

export default reducer;
