import React from 'react';
import PropTypes from 'prop-types';

import styles from '../blog.module.css';

const PostTitle = ({ title, image }) => (
  <div className={styles.postTitle}>
    <h1>
      {title}
      <img className={styles.postImage} src={image} alt="" />
    </h1>
  </div>
);

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostTitle;
