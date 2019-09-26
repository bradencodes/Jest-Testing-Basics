const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('string reverses', () => {
  expect(reverseString('hello')).toBe('olleh');
});
