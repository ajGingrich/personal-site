import React from 'react';
import PropTypes from 'prop-types';

import styles from '../blog.module.css';

const PostTitle = ({ title, image }) => (
  <h1 className={styles.title}>
    {title}
    <img className={styles.postImage} src={image} alt="" />
  </h1>
);

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostTitle;
