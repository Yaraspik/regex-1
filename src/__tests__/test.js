import Validator from '../validator';

test('validate', () => {
  expect(Validator.validateUsername('y235dr')).toBe(true);
});

test('validate', () => {
  expect(Validator.validateUsername('y2356dr')).toBe(false);
});
