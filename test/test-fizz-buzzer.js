//write unit tests for the fizzBuzzer function found in fizzBuzzer.js
//test normal case on a range of representative inputs
//test for at least one edge case - non numeric inputs
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {
  // test the normal case
  it('should return fizz for multiple of 3', function() {
    const fizzCase = [3, 6, 9, 12];
    fizzCase.forEach(function(input) {
    	expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });
  it('should return buzz for multiple of 5', function() {
    const buzzCase = [5, 10, 20];
    buzzCase.forEach(function(input) {
    	expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });
  it('should return fizz-buzz for multiple of 3 and 5', function() {
    const fizzBuzzCase = [15, 30, 45, 60];
    fizzBuzzCase.forEach(function(input) {
    	expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });
  // range of bad inputs
  it('should raise error if args not numbers', function() {
    const badInputs = [true, false, 'word', function() {}, [1,2,3]];
    badInputs.forEach(function(input) {
    	expect(function() {
    		fizzBuzzer(input);
    	}).to.throw(Error);
    });
  });
});
