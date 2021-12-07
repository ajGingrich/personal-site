import React, { Fragment } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import { languageSelector } from 'selectors/language';

import {
  SKILLS_TITLE,
  SKILLS_RATINGS,
  SKILLS_CATEGORIES,
  SKILL_CATEGORY_STRONG,
  SKILL_CATEGORY_COMFORTABLE,
  SKILL_CATEGORY_FAMILIAR,
} from './constants';

import styles from './skills.module.css';

const Skills = () => {
  const language = useSelector(languageSelector);

  const renderCheck = () => <FontAwesomeIcon icon={faCheck} />;

  return (
    <section id="interests">
      <Row>
        <Col md={12}>
          <span className="text-center">
            <h3>{SKILLS_TITLE[language]}</h3>
          </span>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table
            responsive
            striped
            bordered
            hover
            size="sm"
            className={styles.table}
          >
            <thead>
              <tr>
                {Object.keys(SKILLS_RATINGS).map(rating => (
                  <th key={`skill-header-${rating}`}>{SKILLS_RATINGS[rating][language]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SKILLS_CATEGORIES.map(({ title, skills }) => (
                <Fragment key={`skill-category-row-${title}`}>
                  <tr className={styles.skillCategory}>
                    <td colSpan="4">{title}</td>
                  </tr>
                  {skills.map(({ name, level }) => (
                    <tr key={`skill-${name}`}>
                      <td>{name}</td>
                      <td>{level === SKILL_CATEGORY_STRONG && renderCheck()}</td>
                      <td>{level === SKILL_CATEGORY_COMFORTABLE && renderCheck()}</td>
                      <td>{level === SKILL_CATEGORY_FAMILIAR && renderCheck()}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
