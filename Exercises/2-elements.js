'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    while (true) {
      const i = array.indexOf(item);
      if (i === -1) break;
      array.splice(i, 1);
    }
  }
};

module.exports = { removeElements };
