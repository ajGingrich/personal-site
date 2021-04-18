import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

import { butterSelector } from 'selectors/butter';
import { DEFAULT_PAGE_SIZE } from 'constants/constants';
import { fetchPostListActionCreator } from 'actions/butter';

import styles from '../blog.module.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const { count, page } = useSelector(butterSelector);
  const numPages = Math.ceil(count / DEFAULT_PAGE_SIZE);
  const isFirstPage = page === 1;
  const isLastPage = page === numPages;

  const handlePageBack = () => {
    if (isFirstPage) return null;

    return dispatch(fetchPostListActionCreator({ page: page - 1 }));
  };

  const handlePageForward = () => {
    if (isLastPage) return null;

    return dispatch(fetchPostListActionCreator({ page: page + 1 }));
  };

  return (
    <div className={styles.pagination}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={classnames(styles.pageArrow, { [styles.disabled]: isFirstPage })}
        onClick={handlePageBack}
      />
      <span className={styles.pageIndicator}>
        {`${page} of ${numPages}`}
      </span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={classnames(styles.pageArrow, { [styles.disabled]: isLastPage })}
        onClick={handlePageForward}
      />
    </div>
  );
};

export default Pagination;
