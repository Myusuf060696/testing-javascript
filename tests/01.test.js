const charLength = require('../src/01');

test('char length of mr_robot equal 8', () => {
  expect(charLength('mr_robot')).toBe(8);
});