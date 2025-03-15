import { body, param } from 'express-validator';

export const additionValidation = [
  body('a')
    .isNumeric()
    .withMessage('Parameter "a" must be a number')
    .custom((value) => !isNaN(parseFloat(value)))
    .withMessage('Parameter "a" must be a valid number'),
  body('b')
    .isNumeric()
    .withMessage('Parameter "b" must be a number')
    .custom((value) => !isNaN(parseFloat(value)))
    .withMessage('Parameter "b" must be a valid number'),
];

export const factorialValidation = [
  param('number')
    .isInt({ min: 0, max: 170 })
    .withMessage('Parameter must be a positive integer less than or equal to 170'),
];

export const fibonacciValidation = [
  param('count')
    .isInt({ min: 1, max: 100 })
    .withMessage('Count must be a positive integer between 1 and 100'),
]; 
