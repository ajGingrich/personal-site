import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  ListGroup,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons/faGoodreads';

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
  link: 'https://www.linkedin.com/in/andrew-gingrich/',
  icon: faLinkedin,
};

const INSTAGRAM = {
  link: 'https://www.instagram.com/gingrich_andrew/',
  icon: faInstagram,
};

const TWITTER = {
  link: 'https://twitter.com/coys3000',
  icon: faTwitter,
};

const GOOD_READS = {
  link: 'https://www.goodreads.com/user/show/104514401-andrew-gingrich',
  icon: faGoodreads,
};

const SOCIAL_NETWORKS = [
  LINKED_IN,
  GITHUB,
  STACK_OVERFLOW,
  INSTAGRAM,
  TWITTER,
  GOOD_READS,
];

const SocialNetworks = ({ language }) => {
  return (
    <Row>
      <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center">
        <p>{SOCIAL_NETWORK_TITLE[language]}</p>
        <ListGroup horizontal="sm" className={classnames('justify-content-center', styles.networks)}>
          {SOCIAL_NETWORKS.map(({ link, icon }) => (
            <li
              key={`social-network-${link}`}
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
        </ListGroup>
      </Col>
    </Row>
  );
};

SocialNetworks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default SocialNetworks;
