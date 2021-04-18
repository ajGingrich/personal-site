import Butter from 'buttercms';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';

export const FETCH_POST_LIST_LOADING = 'FETCH_POST_LIST_LOADING';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_LIST_ERROR = 'FETCH_POST_LIST_ERROR';

const butter = Butter(process.env.BUTTERCMS_KEY);

export const fetchPostListActionCreator = ({
  page = 1,
  size = DEFAULT_PAGE_SIZE,
}) => async dispatch => {
  dispatch({ type: FETCH_POST_LIST_LOADING });
  try {
    const response = await butter.post.list({ page, page_size: size });
    dispatch({
      type: FETCH_POST_LIST_SUCCESS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_LIST_ERROR });
  }
};
