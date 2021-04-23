import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';

// <div dangerouslySetInnerHTML={{ __html: cleanBody }} />

import 'highlight.js/styles/atom-one-dark.css';

const PostContent = ({ body }) => {
  const cleanBody = DOMPurify.sanitize(body);
  const node = useRef(null);

  useEffect(() => {
    // highlightCode();
    // const nodes = ReactDOM.findDOMNode(this).querySelectorAll('pgn');
    hljs.highlightElement(node.current)
  });

  return (
    <div ref={node}>
      <pre className="language-python">
        <code>
        @requires_authorization(roles=["ADMIN"])
        def somefunc(param1='', param2=0):
            r'''A docstring'''
            if param1 > param2: # interesting
                print 'Gre\'ater'
            return (param2 - param1 + 1 + 0b10l) or None

        class SomeClass:
            pass

        >>> message = '''interpreter
        ... prompt'''
        </code>
      </pre>
    </div>
  )
};

PostContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default PostContent;
