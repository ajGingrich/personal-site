import React from 'react';
import ReactDom from 'react-dom';

function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script

   return element;
 }

 document.body.appendChild(component());
