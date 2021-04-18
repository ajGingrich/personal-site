import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';

const Pagination = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      1 of 2
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
};

export default Pagination;
