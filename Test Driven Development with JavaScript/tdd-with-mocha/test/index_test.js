const mocha = require('mocha')
const assert = require('assert');
const Calculate = require('../index');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('checks if the output of 5! is 120', () => {

            // Setup
            const inputNumber = 5;
            const expectedResult = 120;


            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });

        it('checks if the output of 3! is 6', () => {

            // Setup
            const inputNumber = 3;
            const expectedResult = 6;


            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });
    });
});