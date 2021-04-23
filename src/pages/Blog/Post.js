import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostActionCreator } from 'actions/butter';
import { currentPostSelector, butterLoadingSelector } from 'selectors/butter';

import PostTitle from './components/PostTitle';
import Loader from './components/Loader';
import PostContent from './components/PostContent';

const Post = () => {
  const post = useSelector(currentPostSelector);
  const loading = useSelector(butterLoadingSelector);
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  const { slug } = params || {};
  const {
    title,
    body,
    featured_image: image,
  } = post;

  useEffect(() => {
    dispatch(fetchPostActionCreator(slug));
  }, [slug, dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (Object.keys(post).length === 0) {
    return null;
  }

  return (
    <div>
      <PostTitle
        title={title}
        image={image}
      />
      <PostContent body={body} />
    </div>
  );
};

export default Post;
