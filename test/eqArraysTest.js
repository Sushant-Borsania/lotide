const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 2, 3], [1, 2, 3]), true);