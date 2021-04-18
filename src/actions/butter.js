import Butter from 'buttercms';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';

export const FETCH_POST_LOADING = 'FETCH_POST_LOADING';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

const butter = Butter(process.env.BUTTERCMS_KEY);

export const fetchPostListActionCreator = ({
  page = 1,
  size = DEFAULT_PAGE_SIZE,
}) => async dispatch => {
  dispatch({ type: FETCH_POST_LOADING });
  try {
    const response = await butter.post.list({ page, page_size: size });
    dispatch({
      type: FETCH_POST_LIST_SUCCESS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};

export const fetchPostActionCreator = slug => async dispatch => {
  dispatch({ type: FETCH_POST_LOADING });
  try {
    const response = await butter.post.retrieve(slug);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};
