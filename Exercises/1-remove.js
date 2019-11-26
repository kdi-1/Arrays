'use strict';
const removeElement = (array, item) => {
  while (true) {
    const i = array.indexOf(item);
    if (i === -1) break;
    array.splice(i, 1);
  }
};

module.exports = { removeElement };
