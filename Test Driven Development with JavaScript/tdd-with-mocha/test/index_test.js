const mocha = require('mocha')
const assert = require('assert');
const Calculate = require('../index');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns 120 when the input is 5', () => {

            // Setup
            const inputNumber = 5;
            const expectedResult = 120;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });

        it('returns 6 when the input is 3', () => {

            // Setup
            const inputNumber = 3;
            const expectedResult = 6;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });

        it('returns 1 when the input is 0', () => {

            // Setup
            const inputNumber = 0;
            const expectedResult = 1;

            // Exercise
            const actualResult = Calculate.factorial(inputNumber);

            // Verify
            assert.strictEqual(actualResult, expectedResult);

        });

    });
});