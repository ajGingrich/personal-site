import {
  FETCH_POST_LOADING,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
} from 'actions/butter';

const defaultState = {
  page: 1,
  count: 0,
  loading: false,
  currentPost: {},
  posts: [],
  tags: [],
};

const butterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload.posts,
        count: action.payload.count,
        page: action.payload.page,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentPost: action.payload,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default butterReducer;
