import React, { useEffect } from 'react';
import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import qs from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { fetchPostListActionCreator } from 'actions/butter';
import { butterLoadingSelector, butterPostsSelector } from 'selectors/butter';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';

import styles from './blog.module.css';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(butterLoadingSelector);
  const posts = useSelector(butterPostsSelector);
  const { search } = useLocation();
  const { url } = useRouteMatch();
  const { page } = qs.parse(search);

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPostListActionCreator({ page, pageSize: DEFAULT_PAGE_SIZE }));
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
      {posts.map(({ title, slug, summary, featured_image }) => (
        <Link
          to={`${url}/post/${slug}`}
          key={slug}
          className={styles.postLink}
        >
          <h1 className={styles.title}>
            {title}
            <img className={styles.postImage} src={featured_image} alt="" />
          </h1>
          <p>{summary}</p>
        </Link>
      ))}
    </>
  );
};

export default List;
