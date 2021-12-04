import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Footer from 'components/Footer';
import BlogNavigation from './BlogNavigation';
import List from './List';
import Post from './Post';

import styles from './blog.module.css';

const Blog = () => {
  const { path } = useMatch();

  return (
    <Container className={styles.container}>
      <BlogNavigation />
      <Routes>
        <Route path={path} element={<List />} />
        <Route path={`${path}/post/:slug`} element={<Post />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Blog;
