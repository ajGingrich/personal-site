import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import { SOCIAL_NETWORK_TITLE, SOCIAL_NETWORKS } from './constants';
import styles from './contact.module.css';

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
                <i className={`fab fa-${icon} fa-2x`} />
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
