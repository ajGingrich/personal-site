import Butter from 'buttercms';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';
import { getData } from 'utils/service';
import { BUTTER } from 'constants/api';

export const FETCH_POST_LOADING = 'FETCH_POST_LOADING';
export const FETCH_POST_LIST_SUCCESS = 'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

// This is a read-only key so not a security risk
const butter = Butter('e214fff9440099a8267608a6956d4e2ea80c0a37');

export const fetchPostListActionCreator = ({
  page = 1,
  size = DEFAULT_PAGE_SIZE,
}) => async dispatch => {
  dispatch({ type: FETCH_POST_LOADING });
  try {
    // const response = await getData(`${BUTTER}/post`, { page, pageSize: size });
    const { data: response } = await butter.post.list({ page, page_size: size });
    dispatch({
      type: FETCH_POST_LIST_SUCCESS,
      payload: {
        count: response.meta.count,
        posts: response.data,
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
    // const response = await getData(`${BUTTER}/post/${slug}`);
    const { data: response } = await butter.post.retrieve(slug);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};
