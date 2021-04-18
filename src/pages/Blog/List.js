import React, { useEffect } from 'react';
import { useLocation, Link, useRouteMatch } from 'react-router-dom';
import qs from 'query-string';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPostListActionCreator } from 'actions/butter';
import { butterLoadingSelector, butterPostsSelector } from 'selectors/butter';

import { DEFAULT_PAGE_SIZE } from 'constants/constants';

import PostTitle from './components/PostTitle';
import Loader from './components/Loader';

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
    return <Loader />;
  }

  return (
    <>
      {posts.map(({ title, slug, summary, featured_image: image }) => (
        <Link
          to={`${url}/post/${slug}`}
          key={slug}
          className={styles.postLink}
        >
          <PostTitle
            title={title}
            image={image}
          />
          <p>{summary}</p>
        </Link>
      ))}
    </>
  );
};

export default List;
