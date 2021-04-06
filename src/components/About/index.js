import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { languageSelector } from 'selectors/language';
import aboutFormal from 'images/about_formal.png';

import { ABOUT_ME, SKILLS_INFORMATION } from './text';

const About = () => {
  const language = useSelector(languageSelector);

  return (
    <section id="about">
      <Row>
        <Col md={12}>
          <span className="text-center">
            <h3>{ABOUT_ME[language]}</h3>
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={12} className="text-center">
          <img className="img-responsive center-xs" src={aboutFormal} />
        </Col>
        <Col sm={9} xs={12}>
          <p>
            I have over three years of professional experience working with full-stack technologies. I currently work as a Senior Software Engineer
            at Gorilla Logic with React, Ruby on Rails, and MySQL. Although I enjoy seeing the end product, my real passion is for learning and
            conquering new challenges. This philosophy is described eloquently by Allan Watts:
          </p>
          <p>
            “This is the real secret of life -- to be completely engaged with what you are doing in the here and now.
            And instead of calling it work, realize it is play”
          </p>
          <h5>
            {SKILLS_INFORMATION.header[language]}
          </h5>
          <p>
            <span className="underline">
              {`${SKILLS_INFORMATION.strong[language]}: `}
            </span>
            JavaScript, Java, HTML/CSS, React/Redux, Node
          </p>
          <p>
            <span className="underline">
              {`${SKILLS_INFORMATION.knowledgable[language]}: `}
            </span>
            C, Python, Ruby on Rails
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
