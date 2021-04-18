import React, { Fragment } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import BlogNavigation from './BlogNavigation';
import List from './List';
import Post from './Post';

const Blog = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <BlogNavigation />
      <Switch>
        <Route exact path={path} component={List} />
        <Route path={`${path}/post/:slug`} component={Post} />
        <Post />
      </Switch>
    </>
  );
};

export default Blog;
