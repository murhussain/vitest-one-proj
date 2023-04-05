import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers =  [1,2,3]
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  const input = ['hello', 1];
  const result = add(input);
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2', '3'];
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => { 
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it('should throw an error if no argument is provided', () => { 
  const result = () => {
    add();
  };
  expect(result).toThrow();
})