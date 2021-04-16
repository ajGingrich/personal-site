import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { fetchPostListActionCreator } from 'actions/butter';
import { butterLoadingSelector, butterPostsSelector } from 'selectors/butter';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(butterLoadingSelector);
  const posts = useSelector(butterPostsSelector);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPostListActionCreator({ page: 1, pageSize: DEFAULT_PAGE_SIZE }));
    }
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {posts.map(({ title, slug }) => <div key={slug}>{title}</div>)}
    </>
  );
};

export default List;
