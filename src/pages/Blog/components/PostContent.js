import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import DOMPurify from 'dompurify';

// languages
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import bash from 'highlight.js/lib/languages/bash';
import c from 'highlight.js/lib/languages/c';
import 'highlight.js/styles/atom-one-dark.css';

import styles from '../blog.module.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('java', java);
hljs.registerLanguage('c', c);
hljs.registerLanguage('yaml', c);

const PostContent = ({ body }) => {
  const cleanBody = DOMPurify.sanitize(body);

  const highlightCode = useCallback(() => {
    const nodes = document.querySelectorAll('pre code');
    nodes.forEach(n => {
      hljs.highlightElement(n);
    });
  }, []);

  useEffect(() => {
    highlightCode();
  }, [highlightCode]);

  return (
    <div
      className={styles.postContent}
      dangerouslySetInnerHTML={{ __html: cleanBody }}
    />
  );
};

PostContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default PostContent;
