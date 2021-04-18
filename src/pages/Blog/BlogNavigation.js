import React from 'react';
import {
  Navbar,
  Button,
} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import Pagination from './components/Pagination';

import styles from './blog.module.css';

const BLOG_HOME_PATH = '/blog';

const BlogNavigation = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={styles.navbarCustom}
    >
      {pathname !== BLOG_HOME_PATH && (
        <Button
          onClick={() => history.go(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </Button>
      )}
      {pathname === BLOG_HOME_PATH && <Pagination />}
    </Navbar>
  );
};

export default BlogNavigation;
