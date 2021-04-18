import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from 'components/Footer';
import BlogNavigation from './BlogNavigation';
import List from './List';
import Post from './Post';

import styles from './blog.module.css';

const Blog = () => {
  const { path } = useRouteMatch();

  return (
    <Container className={styles.container}>
      <BlogNavigation />
      <Switch>
        <Route exact path={path} component={List} />
        <Route path={`${path}/post/:slug`} component={Post} />
      </Switch>
      <Footer />
    </Container>
  );
};

export default Blog;
