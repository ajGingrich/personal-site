import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';

import { fetchPostActionCreator } from 'actions/butter';
import { currentPostSelector, butterLoadingSelector } from 'selectors/butter';

import PostTitle from './components/PostTitle';
import Loader from './components/Loader';

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
  const cleanBody = DOMPurify.sanitize(body);

  useEffect(() => {
    dispatch(fetchPostActionCreator(slug));
  }, []);

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
      <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
    </div>
  );
};

export default Post;
