import {
  CONTACT_LOADING,
  CONTACT_SUCCESS,
  CONTACT_ERROR,
} from 'actions/contact';

const defaultState = {
  loading: false,
  error: null,
};

const contactReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
