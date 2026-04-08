'use strict';

function kebabCase(str) {
  return str.replace(/\//g, '-');
}

module.exports = { kebabCase };

