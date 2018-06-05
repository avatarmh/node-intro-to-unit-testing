// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return fizz if divisible by 3, buzz if divisible by 5 and fizz-buzz if divisible by 15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: -15, expected: 'fizz-buzz'}
    ];
    // for each inputs normalCases[i], `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
});
});