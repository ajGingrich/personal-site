import React, { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPostListActionCreator } from 'actions/butter';
import { butterLoadingSelector, butterPostsSelector } from 'selectors/butter';

import PostTitle from './components/PostTitle';
import Loader from './components/Loader';

import styles from './blog.module.css';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(butterLoadingSelector);
  const posts = useSelector(butterPostsSelector);
  const { url } = useMatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPostListActionCreator({}));
    }
  }, [dispatch, posts]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {posts.map(({
        title,
        slug,
        summary,
        featured_image,
      }) => (
        <Link
          to={`${url}/post/${slug}`}
          key={slug}
          className={styles.postLink}
        >
          <PostTitle
            title={title}
            image={featured_image}
          />
          <p>{summary}</p>
        </Link>
      ))}
    </>
  );
};

export default List;
