import { DEFAULT_PAGE_SIZE } from 'constants/constants';
import { getData } from 'utils/service';
import { BUTTER } from 'constants/api';

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
    const response = await getData(`${BUTTER}/post`, { page, pageSize: size });
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
    const response = await getData(`${BUTTER}/post/${slug}`);
    dispatch({
      type: FETCH_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_POST_ERROR });
  }
};
