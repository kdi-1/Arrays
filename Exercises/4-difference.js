'use strict';

const difference = (array1, array2) => array1.filter(item => !array2.includes(item));

module.exports = { difference };
