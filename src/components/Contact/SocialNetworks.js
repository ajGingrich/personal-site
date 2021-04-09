import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';

// add goodreads
import { SOCIAL_NETWORK_TITLE } from './constants';
import styles from './contact.module.css';

const GITHUB = {
  link: 'https://github.com/ajGingrich',
  icon: faGithub,
};

const STACK_OVERFLOW = {
  link: 'http://stackoverflow.com/users/7096540/andrewgi?tab=profile',
  icon: faStackOverflow,
};

const LINKED_IN = {
  link: 'http://stackoverflow.com/users/7096540/andrewgi?tab=profile',
  icon: faLinkedin,
};

const SOCIAL_NETWORKS = [
  LINKED_IN,
  GITHUB,
  STACK_OVERFLOW,
];

const SocialNetworks = ({ language }) => {
  return (
    <Row>
      <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center">
        <p>{SOCIAL_NETWORK_TITLE[language]}</p>
        <ul className={styles.networks}>
          {SOCIAL_NETWORKS.map(({ link, icon }) => (
            <li
              key={`social-network-${icon}`}
              className={styles.listItem}
            >
              <Button
                className={classnames('btn-default', styles.networkButton)}
                onClick={() => window.location.replace(link)}
              >
                <FontAwesomeIcon icon={icon} size="2x" />
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

SocialNetworks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default SocialNetworks;
