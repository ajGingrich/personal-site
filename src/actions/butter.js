import { DEFAULT_PAGE_SIZE } from 'constants/constants';

export const FETCH_POST_LOADING = 'FETCH_POST_LOADING';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

export const fetchPostListActionCreator = ({
  page = 1,
  size = DEFAULT_PAGE_SIZE,
}) => async dispatch => {
  dispatch({ type: FETCH_POST_LOADING });
  try {
    // const response = await butter.post.list({ page, page_size: size });
    const response = { data: { meta: {}, data: {} } };
    dispatch({
      type: FETCH_POST_LIST_SUCCESS,
      payload: {
        count: response.data.meta.count,
        posts: response.data.data,
        page,
      },
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};

export const fetchPostActionCreator = slug => async dispatch => {
  dispatch({ type: FETCH_POST_LOADING });
  try {
    const response = { data: { meta: {}, data: {} } };
    // const response = await butter.post.retrieve(slug);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};
