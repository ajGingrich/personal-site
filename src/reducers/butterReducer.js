import {
  FETCH_POST_LIST_LOADING,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_LIST_ERROR,
} from 'actions/butter';

const defaultState = {
  loading: false,
  currentPost: {},
  posts: [],
};

const butterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POST_LIST_LOADING:
      return {
        loading: true,
      };
    case FETCH_POST_LIST_SUCCESS:
      return {
        loading: false,
        error: true,
        posts: action.payload,
      };
    case FETCH_POST_LIST_ERROR:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default butterReducer;
