module.exports = function reverse (n) {
  let result = Math.abs(n) + '';
  return +result.split('').reverse().join('');
};
